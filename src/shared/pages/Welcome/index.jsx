// Packages
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// App
import Container from 'shared/components/Container';
import Link from 'shared/components/Link';

// Styles
import './styles.scss'

function WelcomePage() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/catalog');
        }
    }, [countdown, navigate]);

    return (
        <Container className='welcome'>
            <div className='welcome__text'>
                <h1 className='welcome__title'>
                <Link to="/catalog" className="welcome__link">Bienvenido a Relatos de Papel.</Link><br /><span>Grupo #25</span>
                </h1>
                <p className='welcome__countdown'>Redirigiendo en {countdown} segundos...</p>
            </div>
            <div className='welcome__image'>
                <img src='./assets/welcome.svg' alt='A person welcoming' />
            </div>
        </Container>
    )
}

export default WelcomePage