import {useCheckout} from "features/checkout/context/CheckoutContext";
import Icon from 'shared/components/Icon';
import Button from 'shared/components/Button';
import "./styles.scss";

const SummaryCard = ({title, field1, field2, step}) => {
    const {goTo, isSubmitting} = useCheckout();

    return (
        <div className="summary-card">
            <div className="summary-card__info">
                <div className="summary-card__content">
                    <h1 className="summary-card__title">{title}</h1>
                    <p className="summary-card__text">{field1}</p>
                    <p className="summary-card__text">{field2}</p>
                </div>

                {step && (
                    <Button className={"summary-card__edit"}
                            variant={"inline"}
                            disabled={isSubmitting} onClick={() => !isSubmitting && goTo(step)}>
                        <Icon name="edit" size={14} color="#C5A059"/>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default SummaryCard;
