const Card = ({children, className = ""}) => {
    return (
        <div className={`checkout-card ${className}`}>
            {children}
        </div>
    );
};

export default Card;