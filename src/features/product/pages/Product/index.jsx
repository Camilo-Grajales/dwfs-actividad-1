// Packages
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

// App
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon'
import Link from 'shared/components/Link';
import { formatCurrency } from 'shared/utils/formatCurrency';
import { useCatalog } from 'features/catalog/hooks/useCatalog.js';
import { useCart } from 'features/cart/hooks/useCart';

// Styles
import './styles.scss';

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem, isInCart, removeItem } = useCart();

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

  const handleOnAddItemClick = book => {
      addItem({ ...book, quantity: 1 });
      toast.success(`Added "${book.title}" to cart!`);
  };

  const handleGoBackClick = () => {
    navigate(-1);
  }

  const handleRemoveItem = id => {
    removeItem(id)
  }

  return (
    <Container className="product">
      <div className="product-detail">
        <Link className='product-detail__goBack' onClick={handleGoBackClick} variant='link'>
          <Icon className='product-detail__goBack-icon' name='chevron'/> Volver
        </Link>

        <section className="product-detail__main">
          <div className="product-detail__image">
              {book.thumbnail && (<img src={book.thumbnail} alt={book.title} />)}
          </div>

          <div className="product-detail__info">
            <p className="product-detail__category">
              <Icon className='' name='tag'/>
              {book.categories?.join(', ')}
            </p>
            <h1 className="product-detail__title">{book.title}</h1>
            <p className="product-detail__author">{book.authors?.join(', ')}</p>

            <div className="product-detail__price-row">
              <p className="product-detail__publisher">
                {`Editorial: ${book.publisher}`}
              </p>
              <p className="product-detail__price">{formatCurrency(book.price)}</p>
            </div>
            {book.description && (
              <div className='product-detail__description'>
                <p className="product-detail__description-title">Sinopsis:</p>
                <p className="product-detail__description-text">
                  {book.description}
                </p>
              </div>
            )}
            

            <div className="product-detail__actions">
              <div className="quantity-selector">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>

              {isInCart(book.id) ? (
                <Button onClick={() => handleRemoveItem(book.id)}>
                  <Icon className='' name='trash'/>
                </Button>
              ) : (
                <Button onClick={() => handleOnAddItemClick(book)}>Añadir al carrito</Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default ProductPage;