// Packages
import { useState } from 'react';
import { toast } from 'sonner';

// App
import Button from 'shared/components/Button';
import HeartButton from 'features/catalog/components/HeartButton';
import Icon from 'shared/components/Icon';
import Link from 'shared/components/Link';
import QuantitySelector from 'features/catalog/components/QuantitySelector';
import TrashButton from 'features/catalog/components/TrashButton';
import { formatCurrency } from 'shared/utils/formatCurrency';
import { useCart } from 'features/cart/hooks/useCart';

// Styles
import './styles.scss';

function BookCard({ book }) {
    const { addItem, removeItem, items, updateQuantity, isInCart } = useCart();

    const [isFavorite, setIsFavorite] = useState(book.isFavorite || false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        addItem({ ...book, quantity: 1 });
        toast.success(`Added "${book.title}" to cart!`);
    };

    const handleDelete = () => {
        removeItem(book.id);
        toast.success(`Removed item from cart!`);
    };

    const handleQuantityChange = (newQuantity) => {
        updateQuantity(book.id, newQuantity);
    };

    const quantityInCart =
        items.find(item => item.id === book.id)?.quantity || 0;

    return (
        <li className="catalog__item">
            <div className="catalog__item-img">
                <img src={book.thumbnail} alt={book.title} />
            </div>

            <Link className="catalog__item-link" to={`/product/${book.id}`}>
                <h2>{book.title}</h2>
            </Link>

            <p>{book.authors?.join(', ')}</p>

            <div className="catalog__item-info">
                <span>{formatCurrency(book.price)}</span>

                <HeartButton
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                />

                <div className="catalog__item-info-rating">
                    <span>{book.ratings}</span>
                    <Icon name="star-full" size={30} color="#2D5A54" />
                </div>
            </div>

            <div className="catalog__item-actions">
                {isInCart(book.id) && quantityInCart > 0 ? (
                    <>
                        <QuantitySelector
                            numOrder={quantityInCart}
                            onChange={handleQuantityChange}
                        />
                        <TrashButton deleteItem={handleDelete} />
                    </>
                ) : (
                    <Button onClick={handleAdd}>
                        Agregar al carrito
                    </Button>
                )}
            </div>
        </li>
    );
}

export default BookCard;
