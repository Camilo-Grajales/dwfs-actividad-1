// Packages
import cn from 'classnames';
// App
import Button from 'shared/components/Button'

// Styles
import './styles.scss'

function CartEmptyState({ className = '', onClick }) {
    return (
        <div className={cn("cart-empty-state", className)}>
            <div className="cart-empty-state__text">
                <h3 className='cart-empty-state__title'>Tu biblioteca aún puede crecer</h3>
                <h4 className='cart-empty-state__subtitle'>Agrega libros al carrito y continúa leyendo.</h4>
            </div>
            <img className='cart-empty-state__image' src='./assets/empty.svg' alt="no data image" />
            <Button onClick={onClick} className='cart-empty-state__cta' href='/catalog' >Ver catálogo</Button>
        </div>
    );
}

export default CartEmptyState;