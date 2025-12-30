// Packages
import React from 'react';

// App
import Cart from 'features/cart/components/Cart';
import Container from 'shared/components/Container';
import SearchInput from 'features/catalog/components/SearchInput';


// styles
import './styles.scss';

export default function Header() {
    return (
        <header className='app-header'>
            <Container className='app-header__container'>
                <span className='app-header__logo'>RDP</span>
                <SearchInput />
                <div className='app-header__cart'>
                    <Cart />
                </div>
            </Container>
        </header>
    );
};