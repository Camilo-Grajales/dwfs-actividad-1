// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';

// styles
import './styles.scss';

export default function Footer() {
    return (
        <footer className='app-footer'>
            <Container>
                <p className='app-footer__text'>
                    {`Todos los derechos reservados.© \nRelatos de Papel. ${new Date().getFullYear()}`}
                </p>
            </Container>
        </footer>
    );
};