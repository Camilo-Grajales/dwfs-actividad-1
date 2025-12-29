import { Route, Routes } from 'react-router-dom';

// App
import CatalogPage from 'features/catalog/pages/Catalog';
import CheckoutPage from 'features/checkout/pages/Checkout';
import ProductPage from 'features/product/pages/Product';
import SearchResultsPage from 'features/catalog/pages/SearchResults';
import ThankYouPage from 'features/checkout/pages/ThankYouPage';
import WelcomePage from 'shared/pages/Welcome';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/thank-you-page" element={<ThankYouPage />} />
        </Routes>
    )
};

export default AppRouter;