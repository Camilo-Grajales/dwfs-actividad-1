// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';

// styles
import './styles.scss';

export default function Header() {
    return (
        <header className='app-header'>
            <Container>
                <span className='app-header__logo'>RDP</span>
            </Container>
        </header>
    );
};