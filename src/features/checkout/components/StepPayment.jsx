import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import {useNavigate} from "react-router-dom";
import {useCheckout} from "features/checkout/context/CheckoutContext";
import {toast} from "sonner";
import {useForm} from "react-hook-form";

const StepPayment = () => {
    const navigate = useNavigate();
    const {step, shipment, billing, goTo, isSubmitting, setIsSubmitting} = useCheckout();
    const isCompleted = !!shipment.address;
    const isActive = step === "payment";


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: {
            cardNumber: "",
            nameOnCard: "",
            fees: "",
            expiration: "",
            cvv:"",
            sameAddress:"",
        },
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 4000));
            toast.success("Purchase completed successfully");
            //navigate("/");
            setIsSubmitting(false);
        } catch (error) {
            toast.error(`Hubo un error al procesar el pago` );
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
            <CardHeader onClick={() => isCompleted && goTo("payment")}>
                <h4>Payment</h4>
            </CardHeader>
            <CardBody>
                {isActive && (
                    <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="checkout__subtitle">Credit card</h5>
                        <div className="checkout__form__group--row">
                            <div className="checkout__field">
                                <label className="checkout__label">Card number:</label>
                                <input
                                    maxLength="16"
                                    className={`checkout__control ${errors.cardNumber ? 'checkout__control--error' : ''}`}
                                    {...register("cardNumber", {
                                        required: "Please enter a card number",
                                        pattern: { value: /^\d{16}$/, message: "Please enter a valid card number" },
                                    })}
                                />
                                {errors.cardNumber && <span className="checkout__error">{errors.cardNumber.message}</span>}
                            </div>
                            <div className="checkout__field">
                                <label className="checkout__label">Name on card:</label>
                                <input
                                    className={`checkout__control ${errors.nameOnCard ? 'checkout__control--error' : ''}`}
                                    {...register("nameOnCard", {required: "Please enter a name on card."})} />
                                {errors.nameOnCard && <span className="checkout__error">{errors.nameOnCard.message}</span>}
                            </div>
                        </div>
                        <div className="checkout__form__group--small">
                            <div className="checkout__field">
                                <label className="checkout__label">Fees:</label>
                                <select
                                    className={`checkout__control ${errors.fees ? 'checkout__control--error' : ''}`}
                                    {...register("fees", { required: "Please chose an option..." })}
                                >
                                    <option value="">Please chose an option...</option>
                                    <option value="3">3 month</option>
                                    <option value="3">6 months</option>
                                    <option value="12">12 months</option>
                                </select>
                                {errors.fees && <span className="checkout__error">{errors.fees.message}</span>}
                            </div>
                            <div className="checkout__field">
                                <label className="checkout__label">Expiration date:</label>
                                <input
                                    placeholder="MM/AAAA"
                                    maxLength="7"
                                    className={`checkout__control ${errors.expiration ? 'checkout__control--error' : ''}`}
                                    {...register("expiration", {
                                        required: "MM/AAAA",
                                        pattern: { value: /^(0[1-9]|1[0-2])\/\d{4}$/, message: "Format invalid, use MM/AAAA.  " },
                                    })}
                                />

                                {errors.expiration && <span className="checkout__error">{errors.expiration.message}</span>}
                            </div>
                            <div className="checkout__field">
                                <label className="checkout__label">CVV</label>
                                <input
                                    type="password"
                                    maxLength="3"
                                    className={`checkout__control ${errors.cvv ? 'checkout__control--error' : ''}`}
                                    {...register("cvv", {
                                        required: "Requerido",
                                        minLength: { value: 3, message: "3 dígitos" }
                                    })}
                                />
                                {errors.cvv && <span className="checkout__error">{errors.cvv.message}</span>}
                            </div>
                        </div>

                        <div className="checkout__checkbox-group">
                            <input
                                type="checkbox"
                                id="sameAddress"
                                {...register("sameAddress")}
                                checked={true}
                            />
                            <label htmlFor="sameAddress" className="checkout__label">
                                Use the shipment address as the payment address
                            </label>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="checkout__btn checkout__btn--primary">
                            {isSubmitting ? "Processing..." : "Complete purchase"}
                        </button>
                    </form>
                )}
            </CardBody>
        </Card>
    );
}
export default StepPayment;