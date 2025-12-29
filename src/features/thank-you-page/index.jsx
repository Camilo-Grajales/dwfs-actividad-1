// Packages
import React from 'react';

// App
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Link from 'shared/components/Link';

import Thanks_Image from './thanks.svg';

// Styles
import './styles.scss';

function ThankYouPage() {
  return (
    <main className="thank-you__main">
      <Container className="thank-you__content">
        <section className="thank-you__message">
          <h1>Gracias por tu compra</h1>
          <p>
            Puedes consultar el estado de tu pedido revisando tu historial de pedidos.
          </p>

          <div className="thank-you__actions">
            <Button>Mis pedidos</Button>
            <Button href="/catalog">Seguir comprando</Button>
          </div>
        </section>

        <section className="thank-you__image">
          <img
            src={Thanks_Image}
            alt="Imagen de agradecimiento"
            className="message-image"
          />
        </section>
      </Container>
    </main>
  );
}

export default ThankYouPage;