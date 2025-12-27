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
    onClick,
    ...rest
}) => {
    if (href) {
        return (
            <Link to={href} {...rest} onClick={onClick} className={cn('button', className, { 'button--disabled': disabled })}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={cn(
                'button',
                {
                    'button--disabled': disabled
                },
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;
