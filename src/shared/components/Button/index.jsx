// Packages
import React from 'react';
import cn from 'classnames';

// App
import Link from 'shared/components/Link';

// Styles
import './styles.scss';

const Button = ({
    children,
    className = '',
    disabled = false,
    href,
    onClick = () => {},
    variant = 'full',
    ...rest
}) => {

    const classes = cn(
        'button',
        {
            'button--disabled': disabled,
            [`button--${variant}`]: variant,
        },
        className
    )

    if (href) {
        return (
            <Link to={href} {...rest} onClick={onClick} className={classes}>
                {children}
            </Link>
        )
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
