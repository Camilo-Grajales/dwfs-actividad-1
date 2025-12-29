// Packages
import cn from 'classnames';

// App
import Button from 'shared/components/Button'; 
import Icon from 'shared/components/Icon';
import { useCart } from 'features/cart/hooks/useCart';

// Styles
import './styles.scss';

const BagButton = ({ className = '', onClick }) => {
    const { totalItems } = useCart();
    const hasItems = totalItems > 0;

    return (
        <Button className={cn('bag-button', className)} aria-label="Cart" onClick={onClick}>
            <Icon name="bag" size={40} color="#C5A059" />
            {hasItems && <div className='bag-button__counter'>{totalItems}</div>}
        </Button>
    );
};

export default BagButton;