import React from 'react';
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const OrderSummary = () => {
    return (
        <Card className="checkout-card--active">
            <CardHeader>
                <h4>PURCHASE SUMMARY</h4>
            </CardHeader>
            <CardBody>
                <div>
                    <img src="" alt="product"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet</p>
                        <strong>$XXX.XXX</strong>
                    </div>
                </div>

                <div>
                    <img src="" alt="product"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet</p>
                        <strong>$XXX.XXX</strong>
                    </div>
                </div>

                <div>
                    <div><span>Subtotal:</span> <span>$XXX.XXX</span></div>
                    <div><span>Shipping:</span> <span>$XXX.XXX</span></div>
                    <div><span>Taxes:</span> <span>$XXX.XXX</span></div>
                    <div>
                        <span>Total:</span> <span>$XXX.XXX</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default OrderSummary;


