// Package
import { useState, useMemo } from 'react';
import cn from 'classnames'

// App
import BagButton from 'features/cart/components/BagButton';
import Button from 'shared/components/Button'
import CartEmptyState from 'features/cart/components/CartEmptyState';
import CartItem from 'features/cart/components/CartItem';
import CartOverlay from 'features/cart/components/CartOverlay';
import Divider from 'shared/components/Divider';
import { formatCurrency } from 'shared/utils/formatCurrency';
import { useCart } from 'features/cart/hooks/useCart';

// Styles
import './styles.scss'

function Cart ({ className }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {
        clearCart,
        currency,
        items,
        removeItem,
        totalPrice,
        totalShipping,
        totalTaxes,
    } = useCart();

    const hasItems = items?.length > 0;

    const totals = useMemo(() => {
        return [
            {
                label: 'Subtotal:',
                number: formatCurrency(totalPrice.toFixed(2), currency),
            }, {
                label: 'Shipping:',
                number: formatCurrency(totalShipping.toFixed(2), currency),
            }, {
                label: 'Taxes:',
                number: formatCurrency(totalTaxes.toFixed(2), currency),
            }
        ]
    }, [totalPrice, totalShipping, totalTaxes, currency])

    const totalNumber = useMemo(() => {
        const totalNumber = totalPrice + totalShipping + totalTaxes;
        return formatCurrency(totalNumber.toFixed(2), currency);
    }, [totalPrice, totalShipping, totalTaxes, currency])

    const handleCloseCart = () => {
        setIsCartOpen(false);
    }

    const handleOpenCart = () => {
        setIsCartOpen(true);
    }

    const handleOnTrashClick = id => {
        removeItem(id);
    }

    const handleOnEmptyCart = () => {
        clearCart();
    }

    return (
        <div className={cn('cart', className)}>
            <BagButton className='cart__bag-button' onClick={handleOpenCart} />
            <CartOverlay isOpen={isCartOpen} onClose={handleCloseCart}>
                {hasItems ? (
                    <div className='cart__content'>
                        <div className='cart__items'>
                            {items?.map(item => (
                                <div className='cart__item'>
                                    <CartItem
                                        key={item?.id}
                                        onTrashClick={() => handleOnTrashClick(item?.id)}
                                        {...item}
                                    />
                                    <Divider />
                                </div>
                            ))}
                        </div>
                        <div className='cart__total'>
                            {totals.map((item, index) => (
                                <div key={index} className='cart__total-item'>
                                    <h4>{item?.label}</h4>
                                    <h4>{item?.number}</h4>
                                </div>
                            ))}
                            <div className='cart__total-number'>
                                <h4>Total:</h4>
                                <h4>{totalNumber}</h4>
                            </div>
                        </div>
                        <div className='cart__cta-wrapper'>
                            <Button href='/checkout' onClick={handleCloseCart} >Proceder al Checkout</Button>
                            <Button href='/catalog' onClick={handleCloseCart} variant='outline'>Seguir comprando</Button>
                            <Button onClick={handleOnEmptyCart} variant='link'>Vaciar el Carrito</Button>
                        </div>
                    </div>
                ) : (
                    <CartEmptyState onClick={handleCloseCart} />
                )}
            </CartOverlay>
        </div>
    );
}

export default Cart;