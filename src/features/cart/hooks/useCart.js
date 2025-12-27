import { useCartContext } from 'features/cart/context/CartProvider';

function useCart() {
    return useCartContext();
}

export default useCart;
