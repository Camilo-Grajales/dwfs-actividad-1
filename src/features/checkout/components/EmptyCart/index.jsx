import Button from 'shared/components/Button';
import Container from 'shared/components/Container';

import './styles.scss';

function EmptyCart() {
    return (
        <Container className="empty-cart">
            <section className="empty-cart__message">
                <h1>No tienes items agregados al carrito.</h1>
                <p>
                   Por favor agrega items al carritos para proceder con el proceso de pago.
                </p>
                <div className="empty-cart__actions">
                    <Button variant='outline' href="/catalog">Ir al catalogo</Button>
                </div>
            </section>

            <section className="empty-cart__image">
                <img
                    src='./assets/thanks.svg'
                    alt="Imagen de agradecimiento"
                    className="message-image"
                />
            </section>
        </Container>
    );
}

export default EmptyCart;