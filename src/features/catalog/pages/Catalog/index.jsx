// Packages
import React from 'react';

// App
import Container from 'shared/components/Container';
import Link from "shared/components/Link";
import useCatalog from 'features/catalog/hooks/useCatalog.js';

// Styles
import './styles.scss'

function CatalogPage() {
    const { books, isLoading, error } = useCatalog({ query: 'subject:fiction' });

    if (isLoading) return <p>Cargando catálogo...</p>;
    if (error) return <p>Error: {String(error.message)}</p>;

    return (
        <Container className='catalog'>
            <h1>Welcome to page: Catalog!</h1>
            <div className='catalog__links'>
                <Link to="/search-results">Go to Search Results</Link>
                <Link to="/checkout">Go to Checkout</Link>
            </div>
            <ul className='catalog__list'>
                {books.map((book) => (
                    <li className='catalog__list-item' key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Authors: {book.authors.join(', ')}</p>
                        <p>Price: ${book.price}</p>
                        <Link to={`/product/${book.id}`}>Go to Product #{book.id}</Link>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default CatalogPage
