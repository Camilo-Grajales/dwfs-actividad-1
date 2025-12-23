// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';
import Link from "shared/components/Link";

// Styles
import './styles.scss'

function CatalogPage() {
    return (
        <Container className='catalog'>
            <h1>Welcome to page: Catalog!</h1>
            <Link to="/product/1">Go to Product #1</Link>
            <Link to="/product/2">Go to Product #2</Link>
            <Link to="/search-results">Go to Search Results</Link>
            <Link to="/checkout">Go to Checkout</Link>
        </Container>
    )
}

export default CatalogPage
