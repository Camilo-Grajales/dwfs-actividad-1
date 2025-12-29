import "./styles.scss";

const CardHeader = ({title, onClick}) => {
    return (
        <div className="checkout-card__header" onClick={onClick}>
            <h4>{title}</h4>
        </div>
    );
};
export default CardHeader;