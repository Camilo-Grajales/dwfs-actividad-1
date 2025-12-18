// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';

// styles
import './styles.css';

export default function Header() {
    return (
        <header className='app-header'>
            <Container>
                <span className='app-header__logo'>RDP</span>
            </Container>
        </header>
    );
};