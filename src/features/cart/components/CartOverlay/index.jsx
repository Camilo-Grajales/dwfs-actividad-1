// Packages
import cn from 'classnames';

// App
import Button from 'shared/components/Button';
import Divider from 'shared/components/Divider';
import Icon from 'shared/components/Icon';
import { useLockBodyScroll } from 'shared/hooks/useLockBodyScroll';

// Styles
import './styles.scss'

function CartOverlay ({ className, children, isOpen, onClose }) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    const handleCloseClick = () => {
        onClose();
    }

    return (
        <div className={cn("cart-overlay", className)}>
            <div className="cart-overlay__backdrop" onClick={handleCloseClick} />
            <aside className="cart-overlay__content">
                <div className="cart-overlay__content-header">
                    <h2 className='cart-overlay__title'>Carrito de compras</h2>
                    <Button className="cart-overlay__close" onClick={handleCloseClick}>
                        <Icon name="close" size={40} />
                    </Button>
                    <Divider />
                </div>
                <div className="cart-overlay__content-body">
                    {children}
                </div>
            </aside>
        </div>
    )
}

export default CartOverlay;
