import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import SummaryCard from "./SummaryCard"
import {useForm} from "react-hook-form";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from 'sonner';

const StepBilling = () => {
    const {step, billing, setBilling, next, goTo, isSubmitting} = useCheckout();
    const isActive = step === "billing";
    const isCompleted = !!billing.fullName;

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange",
        defaultValues: {
            documentType: "",
            document: "",
            fullName: "",
            phone: ""
        },
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
            <CardHeader onClick={() => !isSubmitting && isCompleted && goTo("billing")}>
                <h4>Billing information</h4>
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
                    <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="checkout__field">
                            <label {...register("documentType")} className="checkout__label">Document Type:</label>
                            <select
                                className={`checkout__control ${errors.documentType ? 'checkout__control--error' : ''}`}
                                {...register("documentType", {required: "Please select a document type."})}
                            >
                                <option value="">Please select a document type...</option>
                                <option value="dni">DNI</option>
                                <option value="passport">Passport</option>
                            </select>
                            {errors.documentType &&
                                <span className="checkout__error">{errors.documentType.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Document number:</label>
                            <input
                                className={`checkout__control ${errors.document ? 'checkout__control--error' : ''}`}
                                {...register("document", {required: "Please enter a document number."})}
                            />
                            {errors.document && <span className="checkout__error">{errors.document.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Full name:</label>
                            <input
                                className={`checkout__control ${errors.fullName ? 'checkout__control--error' : ''}`}
                                {...register("fullName", {required: "Please enter a full name."})} />

                            {errors.fullName && <span className="checkout__error">{errors.fullName.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">E-mail address:</label>
                            <input type="email"
                                   className={`checkout__control ${errors.district ? 'checkout__control--error' : ''}`}

                                   {...register("email", {required: "Please enter a email address."})} />
                            {errors.email && <span className="checkout__error">{errors.email.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Phone number:</label>
                            <input
                                className={`checkout__control ${errors.district ? 'checkout__control--error' : ''}`}
                                {...register("phone", {required: "Please enter a phone number."})} />
                            {errors.phone && <span className="checkout__error">{errors.phone.message}</span>}
                        </div>
                        <button type="submit" className="checkout__btn checkout__btn--primary">
                            Go to shipment
                        </button>
                    </form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepBilling;