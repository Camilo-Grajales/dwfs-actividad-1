// Packages
import React from 'react';
import { useSearchParams } from 'react-router-dom';

// App
import Container from 'shared/components/Container';
import Link from 'shared/components/Link';
import { useCatalog } from 'features/catalog/hooks/useCatalog';

// Styles
import './styles.scss';

function SearchResultsPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { books, isLoading, error } = useCatalog({ query: 'subject:fiction' });

    if (isLoading) return <p>Cargando resultados...</p>;
    if (error) return <p>Error: {String(error.message)}</p>;

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container className="search-results">
            <h1>Resultados de búsqueda</h1>

            <p>
                Buscando: <strong>{query}</strong>
            </p>

            <Link to="/catalog">← Volver al catálogo</Link>

            {filteredBooks.length === 0 ? (
                <div className="search-results__empty">
                    <img
                        src="/src/assets/images/no-results.svg"
                        alt="No se encontraron resultados"
                    />
                    <div className="search-results__empty-text">
                        <h2>No hemos encontrado el libro solicitado</h2>
                        <p>Intenta con otro título o revisa si lo escribiste correctamente.</p>
                    </div>
                </div>
            ) : (
                <ul>
                    {filteredBooks.map(book => (
                        <li key={book.id}>
                            <h2>{book.title}</h2>
                            <p>{book.authors.join(', ')}</p>
                            <p>${book.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
}

export default SearchResultsPage;
