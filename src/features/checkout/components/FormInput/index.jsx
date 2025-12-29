import "./styles.scss";

const FormInput = ({
                       type = "text",
                       id,
                       label,
                       placeholder,
                       register,
                       error,
                       disabled = false,
                       options = [],
                       className = "",
                       maxLength = 250,
                   }) => {


    const isCheckbox = type === "checkbox";
    const inputClass = isCheckbox ? className :
        `form__control ${error ? "form__control--error" : ""} ${className}`;

    const renderElement = () => {
        if (type === "select") {
            return (
                <select disabled={disabled} className={inputClass} {...register}>
                    <option value="" disabled>{placeholder || "Please select an option."}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                id={id}
                type={type}
                disabled={disabled}
                className={inputClass}
                placeholder={placeholder}
                {...(!isCheckbox && { maxLength })}
                {...register}
            />
        );
    };

    return (
        <div className={`${isCheckbox ? "form__group--checkbox" : "form__group"}`}>
            {!isCheckbox && label && <label htmlFor={id} className="form__label">{label}</label>}
            {renderElement()}
            {isCheckbox && label && <label htmlFor={id} className="form__label--checkbox"> {label}</label>}
            {error && <span className="form__error">{error}</span>}
        </div>
    );
};

export default FormInput;