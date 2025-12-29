// Packages
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

// App
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Link from 'shared/components/Link';
import { useCatalog } from 'features/catalog/hooks/useCatalog.js';
import { useCart } from 'features/cart/hooks/useCart';


// Styles
import './styles.scss';

function ProductPage() {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const { addItem, isInCart } = useCart();

  // Utilizamos la misma query que en Catalog
  const { books, isLoading, error } = useCatalog({ query: 'subject:fiction' });

  if (isLoading) return <p>Cargando libro...</p>;
  if (error) return <p>Error: {String(error.message)}</p>;

  // Buscamos dentro de la lista de libros del productId correspondiente
  const book = books.find((b) => b.id === productId);

  if (!book) {
    return (
      <Container className="product">
        <p>Libro no encontrado.</p>
        <Link to="/catalog">Volver al catálogo</Link>
      </Container>
    );
  }

const handleOnAddItemClick = (e, book) => {
    e.preventDefault();
    addItem({ ...book, quantity: 1 });
    toast.success(`Added "${book.title}" to cart!`);
};

  return (
    <Container className="product">
      <Link to="/catalog">Go to Catalog</Link>
      {/* <br />
      <Link to="/thank-you-page">Thank You (quitar de aquí, es solo para probar)</Link> */}

      <div className="product-detail">
        <div className="product-detail__top">
          <div className="product-detail__breadcrumb">
            <span>Home</span>
            <span>&gt;</span>
            <span>Literatura</span>
            <span>&gt;</span>
            <span>{book.title}</span>
          </div>

          <section className="product-detail__main">
            <div className="product-detail__image">
                {book.thumbnail && (<img src={book.thumbnail} alt={book.title} />)}
            </div>

            <div className="product-detail__info">
              <p className="product-detail__category">
                {book.categories?.[0] ?? 'Sin categoría'}
              </p>

              <h2 className="product-detail__title">{book.title}</h2>

              <p className="product-detail__author">{book.authors}</p>

              <div className="product-detail__price-row">
                <p className="product-detail__publisher">
                  <span className="label">Editorial:</span>{' '}
                  {book.publisher || 'Desconocida'}
                </p>

                <p className="product-detail__price">${book.price}</p>
              </div>
                <p className="product-detail__stock">En Stock</p>
            

              <p className="product-detail__subtitle">Sinopsis:</p>
              <p className="product-detail__description">
                {book.description || 'Sin descripción disponible.'}
              </p>

              <div className="product-detail__actions">
                <div className="quantity-selector">
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>
                </div>

                {isInCart(book.id) ? (
                  <p className="product-detail__in-cart">In cart</p>
                ) : (
                  <Button onClick={e => handleOnAddItemClick(e, book)}>Añadir al carrito</Button>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* <section className="product-detail__tabs">
          <div className="tabs-header">
            <button
              className={`tab ${
                activeTab === 'details' ? 'tab--active' : ''
              }`}
              onClick={() => setActiveTab('details')}
            >
              Detalles del producto
            </button>
            <button
              className={`tab ${
                activeTab === 'reviews' ? 'tab--active' : ''
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reseñas
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'detalles' && (
              <p className="tabs-placeholder">
                Información técnica del producto.
              </p>
            )}

            {activeTab === 'reseñas' && (
              <p className="tabs-placeholder">
                Aquí aparecerán las reseñas de los usuarios.
              </p>
            )}
          </div>
        </section> */}
      </div>
    </Container>
  );
}

export default ProductPage;