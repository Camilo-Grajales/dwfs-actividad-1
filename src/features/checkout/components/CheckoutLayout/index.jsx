import StepBilling from "../StepBilling";
import StepShipment from "../StepShipment";
import StepPayment from "../StepPayment";

import "./styles.scss";
import {Row, Col} from "../Grid";


const CheckoutLayout = () => {

    return (
        <div className="checkout__content">
            <Row>
                <Col size={"6"}>
                    <StepBilling/>
                </Col>
                <Col size={"6"}>
                    <StepShipment/>
                </Col>
                <Col size={"12"}>
                    <StepPayment/>
                </Col>
            </Row>
        </div>
    );
};

export default CheckoutLayout;
