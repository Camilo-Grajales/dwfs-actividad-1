// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';
import Link from "shared/components/Link";

// Styles
import './styles.scss'

function CheckoutPage() {
    return (
        <Container className='checkout'>
            <h1>Welcome to Page: Checkout</h1>
            <Link to="/catalog">Go to Catalog</Link>
            <Link to="/search-results">Go to Search Results</Link>
        </Container>
    )
}

export default CheckoutPage