import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext(null);

const STEPS = ["billing", "shipment", "payment"];

export function CheckoutProvider({ children }) {
    const [step, setStep] = useState("billing");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [billing, setBilling] = useState({
        documentType: "",
        document: "",
        fullName: "",
        email: "",
        phone: "",
    });

    const [shipment, setShipment] = useState({
        department: "",
        district: "",
        address: "",
        postalCode: "",
        receiver: "",
    });

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
