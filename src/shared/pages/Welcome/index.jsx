// Packages
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// App
import Container from 'shared/components/Container';

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
                <h1 className='welcome__title'>Bienvenido a Relatos de Papel. Grupo #25</h1>
                <p className='welcome__countdown'>Redirigiendo en {countdown} segundos...</p>
            </div>
            <div className='welcome__image'>
                <img src='./assets/welcoming.svg' alt='A person welcoming' />
            </div>
        </Container>
    )
}

export default WelcomePage