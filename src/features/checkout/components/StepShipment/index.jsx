import Card from "../Card";
import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import Form from "../Form";
import {Col, Row} from "../Grid";

import SummaryCard from "../SummaryCard";

import {useForm} from "react-hook-form";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from "sonner";
import {SHIPMENT_DEFAULT_STATE} from "./constants.js";
import "./styles.scss"
import Button from "shared/components/Button";
import FormInput from "../FormInput/index.jsx";


const StepShipment = () => {
    const {step, shipment, setShipment, next, goTo, isSubmitting} = useCheckout();
    const isActive = step === "shipment";
    const isCompleted = shipment.address !== "";

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: SHIPMENT_DEFAULT_STATE,
    });


    const onSubmit = (data) => {
        setShipment(data);
        toast.success(`Shipment information was saved successfully.`);
        next();
    };

    return (
        <Card
            className={[
                !isActive && !isCompleted && "checkout-card--collapsed",
                isActive && "checkout-card--active",
            ].filter(Boolean).join(" ")}
        >
            <CardHeader title="Información de envío" onClick={() => !isSubmitting && isCompleted && goTo("shipment")}>
            </CardHeader>
            <CardBody>
                {isCompleted && !isActive && (
                    <SummaryCard
                        title={shipment.address}
                        field1={shipment.postalCode}
                        field2="Delivery within 5 business days"
                        step="shipment"
                    />
                )}
                {isActive && (
                    <Form className={"checkout__form"} onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            type="text"
                            id="department"
                            label={"Department"}
                            placeholder={"Please enter a department."}
                            error={errors.department && errors.department.message}
                            register={register("department", {required: "Please enter a department."})}
                        />

                        <FormInput
                            type="text"
                            id="district"
                            label={"District"}
                            placeholder={"Please enter a district."}
                            error={errors.district && errors.district.message}
                            register={register("district", {required: "Please enter a district."})}
                        />

                        <FormInput
                            type="text"
                            id="address"
                            label={"Address"}
                            placeholder={"Please enter a district."}
                            error={errors.address && errors.address.message}
                            register={register("address", {required: "Please enter a address."})}
                        />

                        <FormInput
                            type="text"
                            id="postalCode"
                            label={"Postal code"}
                            placeholder={"Please enter a postal code."}
                            error={errors.postalCode && errors.postalCode.message}
                            register={register("postalCode", {required: "Please enter a postal code."})}
                        />

                        <FormInput
                            type="text"
                            id="receiver"
                            label={"Receiver"}
                            placeholder={"Please enter a receiver."}
                            error={errors.receiver && errors.receiver.message}
                            register={register("receiver", {required: "Please enter a receiver."})}
                        />
                        <Button type onClick={handleSubmit(onSubmit)}>
                            Ir al pago
                        </Button>
                    </Form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepShipment;