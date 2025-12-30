import "./styles.scss";

export const Row = ({ children, className = "" }) => (
    <div className={`checkout__row ${className}`}>
        {children}
    </div>
);

export const Col = ({ children, size = "6", className = "" }) => (
    <div className={`checkout__col--${size} ${className}`}>
        {children}
    </div>
);