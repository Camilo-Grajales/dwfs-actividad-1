/* eslint-disable react-refresh/only-export-components */
// Packages
import { createContext, useContext, useReducer } from "react";

// App
import { CART_ACTIONS, cartReducer, INITIAL_CART_STATE } from "features/cart/context/cartReducer";

import { getShippingValue, getTaxes } from "./helpers";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

    const currency = cartState?.items[0]?.currency ?? 'EUR';

    const totalItems = cartState.items.reduce(
        (total, item) => total + item.quantity, 0
    );

    const totalPrice = cartState.items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const totalTaxes = cartState.items.reduce((total, item) => {
        const totalItemPrice = item.price * item.quantity
        const taxesByItem = getTaxes(totalItemPrice);
        total = total + taxesByItem;
        return total;
    }, 0);

    const totalShipping = cartState.items.reduce((total, item) => {
        const totalItemPrice = item.price * item.quantity
        const shippingByItem = getShippingValue(totalItemPrice);
        total = total + shippingByItem;
        return total;
    }, 0);

    const addItem = (item) => {
        dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item });
    }

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR_CART });
    }

    const isInCart = (id) => {
        return cartState.items.some(item => item.id === id);
    }

    const removeItem = (id) => {
        dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id } });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
    };

    const value = {
        addItem,
        clearCart,
        currency,
        isInCart,
        items: cartState.items,
        removeItem,
        totalItems,
        totalPrice,
        totalShipping,
        totalTaxes,
        updateQuantity,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}


export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
}