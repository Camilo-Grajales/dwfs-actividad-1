import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import SummaryCard from "./SummaryCard";
import {useForm} from "react-hook-form";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from "sonner";


const StepShipment = () => {
    const {step, billing, shipment, setShipment, next, goTo, isSubmitting} = useCheckout();
    const isActive = step === "shipment";
    const isCompleted = !!billing.fullName;

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: {
            department: "",
            district: "",
            address: "",
            postalCode: "",
            receiver: "",
        },
    });


    const onSubmit = (data) => {
        setShipment(data);
        toast.success(`Shipment information was saved successfully.`);
        next();
    };

    return (
        <Card
            className={[
                isActive && "checkout-card--active",
                isCompleted && "checkout-card--completed",
            ].filter(Boolean).join(" ")}
        >
            <CardHeader onClick={() => !isSubmitting && isCompleted && goTo("shipment")}>
                <h4>Shipment information</h4>
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
                    <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="checkout__field">
                            <label {...register("department")} className="checkout__label">Department:</label>
                            <input
                                className={`checkout__control ${errors.department ? 'checkout__control--error' : ''}`}
                                {...register("department", {required: "Please enter a department."})}
                            />
                            {errors.department && <span className="checkout__error">{errors.department.message}</span>}

                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">District:</label>
                            <input
                                className={`checkout__control ${errors.district ? 'checkout__control--error' : ''}`}
                                {...register("district", {required: "Please enter a district."})}
                            />
                            {errors.district && <span className="checkout__error">{errors.district.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Address:</label>
                            <input
                                className={`checkout__control ${errors.district ? 'checkout__control--error' : ''}`}

                                {...register("address", {required: "Please enter a address."})} />
                            {errors.address && <span className="checkout__error">{errors.address.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Postal code:</label>
                            <input
                                className={`checkout__control ${errors.district ? 'checkout__control--error' : ''}`}

                                {...register("postalCode", {required: "Please enter a postal code."})} />
                            {errors.postalCode && <span className="checkout__error">{errors.postalCode.message}</span>}
                        </div>

                        <div className="checkout__field">
                            <label className="checkout__label">Receiver:</label>
                            <input
                                className="checkout__control"  {...register("receiver", {required: "Please enter a receiver."})} />
                            {errors.receiver && <span className="checkout__error">{errors.receiver.message}</span>}
                        </div>


                        <button type="submit" className="checkout__btn checkout__btn--primary">
                            Go to payment
                        </button>
                    </form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepShipment;