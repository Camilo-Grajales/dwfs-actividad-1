// Package
import cn from 'classnames';

// App
import Button from 'shared/components/Button'; 
import Icon from 'shared/components/Icon';
import { formatCurrency } from 'shared/utils/formatCurrency';

// Styles
import './styles.scss';

function CartItem ({
    className,
    currency,
    thumbnail,
    price,
    title,
    onTrashClick,
}) {
    return (
        <div className={cn('cart-item', className)}>
            <div className='cart-item__thumbnail'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='cart-item__content'>
                <h3 className='cart-item__title'>{title}</h3>
            </div>
            <div className='cart-item__price'>
                {formatCurrency(price, currency)}
                <Button className="cart-item__delete-icon" aria-label="Cart" onClick={onTrashClick}>
                    <Icon name="trash" size={24} color="#222222" />
                </Button>
            </div>
        </div>
    )
}

export default CartItem