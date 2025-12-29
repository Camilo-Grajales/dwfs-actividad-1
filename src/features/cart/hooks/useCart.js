import { useCartContext } from 'features/cart/context/CartProvider';

export function useCart() {
    return useCartContext();
}
