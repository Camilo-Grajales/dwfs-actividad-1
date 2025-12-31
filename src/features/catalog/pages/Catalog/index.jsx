// Packages
import { toast } from 'sonner';

// App
import Container from 'shared/components/Container';
import { useCatalog } from 'features/catalog/hooks/useCatalog';
import BookCard from 'features/catalog/components/BookCard';

// Styles
import './styles.scss';

function CatalogPage() {
    const { books, isLoading, error } = useCatalog({ query: 'subject:fiction' });

    if (isLoading) return <p>Cargando catálogo...</p>;
    if (error) return <p>Error: {String(error.message)}</p>;

    return (
        <Container className="catalog">
            <h1>Destacados</h1>

            <ul className="catalog__list">
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
        </Container>
    );
}

export default CatalogPage;
