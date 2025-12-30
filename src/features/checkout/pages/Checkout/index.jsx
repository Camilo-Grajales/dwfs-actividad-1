import Container from 'shared/components/Container';
import Link from "shared/components/Link";
import {CheckoutProvider} from "features/checkout/context/CheckoutContext";
import OrderSummary from "features/checkout/components/OrderSummary";
import CheckoutLayout from "features/checkout/components/CheckoutLayout";
import {useCartContext} from "features/cart/context/CartProvider";
import EmptyCart from "features/checkout/components/EmptyCart/index.jsx";
import "./styles.scss";

export default function CheckoutPage() {
    const {totalItems} = useCartContext();
    return (

        <CheckoutProvider>
            <Container>
                <h1>Welcome to Page: Checkout</h1>
                <Link to="/catalog">Go to Catalog</Link>
                <Link to="/search-results">Go to Search Results</Link>
                {totalItems > 0 ? (<div className="checkout">
                    <div className="checkout__content">
                        <CheckoutLayout/>
                    </div>

                    <aside className="checkout__summary">
                        <OrderSummary/>
                    </aside>

                </div>) : <EmptyCart/>}

            </Container>
        </CheckoutProvider>
    );
}