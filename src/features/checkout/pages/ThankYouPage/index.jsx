// App
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';

// Styles
import './styles.scss';

function ThankYouPage() {
  return (
    <Container className="thank-you">
      <section className="thank-you__message">
        <h1>Gracias por tu compra</h1>
        <p>
          Puedes consultar el estado de tu pedido revisando tu historial de pedidos.
        </p>

        <div className="thank-you__actions">
          <Button>Mis pedidos</Button>
          <Button variant='outline' href="/catalog">Seguir comprando</Button>
        </div>
      </section>

      <section className="thank-you__image">
        <img
          src='./assets/thanks.svg'
          alt="Imagen de agradecimiento"
          className="message-image"
        />
      </section>
    </Container>
  );
}

export default ThankYouPage;