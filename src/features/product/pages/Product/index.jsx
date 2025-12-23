// Packages
import React from 'react';
import { useParams } from 'react-router';

// App
import Container from 'shared/components/Container';
import Link from "shared/components/Link";

// Styles
import './styles.scss'

function ProductPage() {
    const { productId } = useParams();

    return (
        <Container className='product'>
            <h1>Welcome to product: ID: {productId}</h1>
            <Link to="/catalog">Go Back</Link>
        </Container>
    )
}

export default ProductPage