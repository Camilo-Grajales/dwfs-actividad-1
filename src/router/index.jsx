import { BrowserRouter, Route, Routes } from 'react-router-dom';

// App
import CatalogPage from 'features/catalog/pages/Catalog';
import CheckoutPage from 'features/checkout/pages/Checkout';
import ProductPage from 'features/product/pages/Product';
import SearchResultsPage from 'features/catalog/pages/SearchResults';
import WelcomePage from 'shared/pages/Welcome';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
    )
};

export default AppRouter;