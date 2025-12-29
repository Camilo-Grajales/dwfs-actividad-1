import Card from "../Card";
import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import Form from "../Form";

import {useNavigate} from "react-router-dom";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {FEES, PAYMENT_DEFAULT_STATE} from "./constants.js";
import "./styles.scss"
import Button from "../../../../shared/components/Button/index.jsx";
import {Col, Row} from "../Grid/index.jsx";
import FormInput from "../FormInput/index.jsx";


const StepPayment = () => {
    const navigate = useNavigate();
    const {step, billing, shipment, goTo, isSubmitting, setIsSubmitting} = useCheckout();

    const isCompleted = (billing.fullName !== "" && shipment.address !== "");
    const isActive = step === "payment";


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: PAYMENT_DEFAULT_STATE,
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 4000));
            toast.success("Purchase completed successfully");
            //navigate("/");
            setIsSubmitting(false);
        } catch (error) {
            toast.error(`Hubo un error al procesar el pago`);
            setIsSubmitting(false);
        }
    };

    return (
        <Card
            className={[
                !isActive && "checkout-card--collapsed",
                isActive && "checkout-card--active",
            ].filter(Boolean).join(" ")}
        >
            <CardHeader title={"Payment"} onClick={() => isCompleted && goTo("payment")}>
            </CardHeader>
            <CardBody>
                {isActive && (
                    <Form className={"checkout__form"} onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col size={"6"}>
                                <FormInput
                                    maxLength={16}
                                    type="text"
                                    id="cardNumber"
                                    label={"Card number"}
                                    placeholder={"Please enter a card number."}
                                    error={errors.cardNumber && errors.cardNumber.message}
                                    register={register("cardNumber", {
                                        required: "Please enter a card number.",
                                        pattern: {value: /^\d{16}$/, message: "Please enter a valid card number"}
                                    })}
                                />
                            </Col>
                            <Col size={"6"}>
                                <FormInput
                                    type="text"
                                    id="nameOnCard"
                                    label={"Name on card"}
                                    placeholder={"Please enter a name on card."}
                                    error={errors.nameOnCard && errors.nameOnCard.message}
                                    register={register("nameOnCard", {required: "Please enter a name on card."})}
                                />
                            </Col>
                            <Col size={"6"}>
                                <FormInput
                                    type="select"
                                    id="fees"
                                    label={"Fees"}
                                    options={FEES}
                                    placeholder={"Please chose an option..."}
                                    error={errors.fees && errors.fees.message}
                                    register={register("fees", {required: "Please chose an option..."})}
                                />

                            </Col>
                            <Col size={"3"}>
                                <FormInput
                                    type="text"
                                    id="expiration"
                                    label={"Expiration date"}
                                    placeholder={"MM/AAAA"}
                                    maxLength={7}
                                    error={errors.expiration && errors.expiration.message}
                                    register={register("expiration", {
                                        required: "MM/AAAA", pattern: {
                                            value: /^(0[1-9]|1[0-2])\/\d{4}$/,
                                            message: "Format invalid, use MM/AAAA."
                                        }
                                    })}
                                />

                            </Col>
                            <Col size={"3"}>
                                <FormInput
                                    type="password"
                                    id="cvv"
                                    label={"CVV"}
                                    placeholder={"Please enter a valid CVV"}
                                    maxLength={3}
                                    error={errors.cvv && errors.cvv.message}
                                    register={register("cvv", {
                                        required: "Please enter a valid CVV"
                                    })}
                                />

                            </Col>
                            <Col size={"12"}>
                                <FormInput
                                    type="checkbox"
                                    id="sameAddress"
                                    label={"Use the shipment address as the payment address"}
                                    register={register("sameAddress", { value: true })}
                                />
                            </Col>
                        </Row>


                        <Button disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
                            {isSubmitting ? "Processing..." : "Complete purchase"}
                        </Button>


                    </Form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepPayment;