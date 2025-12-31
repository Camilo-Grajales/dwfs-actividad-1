import "./styles.scss";

const Form = ({children, className = "", onSubmit}) => {
    return (
        <form className={`${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;