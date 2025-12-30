import {createContext, useContext, useState} from "react";
import {BILLING_DEFAULT_STATE} from "../components/StepBilling/constants.js";
import {SHIPMENT_DEFAULT_STATE} from "../components/StepShipment/constants.js";

const CheckoutContext = createContext(null);

const STEPS = ["billing", "shipment", "payment"];

export function CheckoutProvider({children}) {
    const [step, setStep] = useState("billing");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [billing, setBilling] = useState(BILLING_DEFAULT_STATE);
    const [shipment, setShipment] = useState(SHIPMENT_DEFAULT_STATE);

    const next = () => {
        setStep((prev) => {
            if (prev === "billing") return "shipment";
            if (prev === "shipment") return "payment";
            return prev;
        });
    };


    const goTo = (target) => {
        setStep((current) => {
            const currentIndex = STEPS.indexOf(current);
            const targetIndex = STEPS.indexOf(target);

            if (targetIndex === -1) return current;
            if (targetIndex > currentIndex + 1) return current;

            return target;
        });
    };

    return (
        <CheckoutContext.Provider
            value={{
                step,
                billing,
                shipment,
                isSubmitting,
                next,
                goTo,
                setBilling,
                setShipment,
                setIsSubmitting
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}

export const useCheckout = () => useContext(CheckoutContext);
