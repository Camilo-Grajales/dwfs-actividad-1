// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';
import Link from "shared/components/Link";

// Styles
import './styles.scss'

function SearchResultsPage() {
    return (
        <Container className='search-results'>
            <h1>Welcome to Page: Search Results</h1>
            <Link to="/catalog">Go to Catalog</Link>
            <Link to="/checkout">Go to Checkout</Link>
        </Container>
    )
}

export default SearchResultsPage