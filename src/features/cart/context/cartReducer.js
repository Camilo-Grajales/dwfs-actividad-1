export const CART_ACTIONS = {
    ADD_ITEM: "ADD_ITEM",
    CLEAR_CART: "CLEAR_CART",
    REMOVE_ITEM: "REMOVE_ITEM",
    UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

export const INITIAL_CART_STATE = {
    items: [],
};

export function cartReducer(state, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM: {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(i =>
                        i.id === item.id
                            ? { ...i, quantity: i.quantity + item.quantity }
                            : i
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, item],
            };
        }

        case CART_ACTIONS.CLEAR_CART: {
            return INITIAL_CART_STATE;
        }

        case CART_ACTIONS.REMOVE_ITEM: {
            const { id } = action.payload;
            return {
                ...state,
                items: state.items.filter(item => item.id !== id),
            };
        }

        case CART_ACTIONS.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === id
                        ? { ...item, quantity }
                        : item
                ),
            };
        }

        default:
            return state;
    }
};
