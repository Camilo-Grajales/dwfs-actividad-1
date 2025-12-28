const CardHeader = ({children, onClick}) => {
    return (
        <div className="checkout-card__header" onClick={onClick}>
            {children}
        </div>
    );
};
export default CardHeader;