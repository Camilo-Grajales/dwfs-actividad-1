// Packages
import React from 'react';
import { toast } from 'sonner';

// App
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Link from "shared/components/Link";
import useCatalog from 'features/catalog/hooks/useCatalog.js';
import useCart from 'features/cart/hooks/useCart';

// Styles
import './styles.scss'

function CatalogPage() {
    const { books, isLoading, error } = useCatalog({ query: 'subject:fiction' });
    const { addItem, items, isInCart } = useCart();

    const handleOnAddItemClick = (e, book) => {
        e.preventDefault();
        addItem({ ...book, quantity: 1 });
        toast.success(`Added "${book.title}" to cart!`);
    }

    if (isLoading) return <p>Cargando catálogo...</p>;
    if (error) return <p>Error: {String(error.message)}</p>;

    return (
        <Container className='catalog'>
            <h1>Welcome to page: Catalog!</h1>
            <div className='catalog__links'>
                <Link to="/search-results">Go to Search Results</Link>
                <Link to="/checkout">Go to Checkout</Link>
                {items.map(item => (<p key={item.id}>In cart: {item.title} (Quantity: {item.quantity})</p>))}
            </div>
            <ul className='catalog__list'>
                {books.map((book) => (
                    <li className='catalog__list-item' key={book.id}>
                        <Link className="catalog__list-item-link" to={`/product/${book.id}`}>
                            <h2>{book.title}</h2>
                            <p>Authors: {book.authors.join(', ')}</p>
                            <p>Price: ${book.price}</p>
                            {isInCart(book.id) ? (
                                <p>in cart</p>
                            ) : (
                                <Button onClick={e => handleOnAddItemClick(e, book)}>Agregar al carrito</Button>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default CatalogPage
