import StepBilling from "./StepBilling";
import StepShipment from "./StepShipment";
import StepPayment from "./StepPayment";

const CheckoutLayout = () => {

    return (
        <div className="checkout__content">
            <div className="checkout__row">
                <div className="checkout__col checkout__col--half">
                    <StepBilling />
                </div>
                <div className="checkout__col checkout__col--half">
                    <StepShipment />
                </div>
            </div>
            <div className="checkout__row">
                <div className={`checkout__col-col checkout__col--full`} >
                    <StepPayment  />
                </div>
            </div>
        </div>
    );
};

export default CheckoutLayout;
