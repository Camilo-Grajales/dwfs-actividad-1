import Card from "../Card";
import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import Form from "../Form";
import FormInput from "../FormInput";

import SummaryCard from "../SummaryCard"
import {useForm} from "react-hook-form";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from 'sonner';
import {BILLING_DEFAULT_STATE, DOCUMENT_TYPES} from "./constants.js";
import Button from "shared/components/Button";


const StepBilling = () => {
    const {step, billing, setBilling, next, goTo, isSubmitting} = useCheckout();
    const isActive = step === "billing";
    const isCompleted = billing.fullName !== "";

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange",
        defaultValues: BILLING_DEFAULT_STATE,
    });

    const onSubmit = (data) => {
        setBilling(data);
        toast.success(`Billing information was saved successfully.`);
        next();
    };

    return (
        <Card
            className={[
                isActive && "checkout-card--active",
                isCompleted && "checkout-card--completed",
            ].filter(Boolean).join(" ")}
        >
            <CardHeader title={"Billing information"} onClick={() => !isSubmitting && isCompleted && goTo("billing")}>
            </CardHeader>
            <CardBody>
                {isCompleted && !isActive && (
                    <SummaryCard
                        title={billing.fullName}
                        field1={billing.email}
                        field2={billing.phone}
                        step="billing"
                    />
                )}

                {isActive && (
                    <Form className={"checkout__form"} onSubmit={handleSubmit(onSubmit)}>

                        <FormInput
                            type="select"
                            id="documentType"
                            label={"Document Type"}
                            options={DOCUMENT_TYPES}
                            placeholder={"Please select a document type"}
                            error={errors.document && errors.document.message}
                            register={register("documentType", {required: "Please select a document type."})}
                        />


                        <FormInput
                            type="text"
                            id="document"
                            label={"Document number"}
                            placeholder={"Please enter a document number"}
                            error={errors.document && errors.document.message}
                            register={register("document", {required: "Please enter a document number."})}
                        />

                        <FormInput
                            type="text"
                            id="fullName"
                            label={"Full name"}
                            placeholder={"Please enter a full name."}
                            error={errors.fullName && errors.fullName.message}
                            register={register("fullName", {required: "Please enter a full name."})}
                        />

                        <FormInput
                            type="email"
                            id="email"
                            label={"E-mail address"}
                            placeholder={"Please enter a email address."}
                            error={errors.email && errors.email.message}
                            register={register("email", {required: "Please enter a email address."})}
                        />

                        <FormInput
                            type="text"
                            id="phone"
                            label={"Phone number"}
                            placeholder={"Please enter a phone number."}
                            error={errors.phone && errors.phone.message}
                            register={register("phone", {required: "Please enter a phone number."})}
                        />

                        <Button type onClick={handleSubmit(onSubmit)}>
                            {"Go to shipment"}
                        </Button>
                    </Form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepBilling;