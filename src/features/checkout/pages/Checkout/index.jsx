import Container from 'shared/components/Container';
import Link from "shared/components/Link";
import {CheckoutProvider} from "features/checkout/context/CheckoutContext";

import OrderSummary from "features/checkout/components/OrderSummary";
import CheckoutLayout  from "features/checkout/components/CheckoutLayout";


import "./styles.scss";


export default function CheckoutPage() {

    return (
        <CheckoutProvider>
            <Container>
                <h1>Welcome to Page: Checkout</h1>
                <Link to="/catalog">Go to Catalog</Link>
                <Link to="/search-results">Go to Search Results</Link>
                <div className="checkout">
                    <div className="checkout__content">
                        <CheckoutLayout />
                    </div>

                    <aside className="checkout__summary">
                        <OrderSummary />
                    </aside>
                </div>
            </Container>
        </CheckoutProvider>
    );
}