// Packages
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import cn from 'classnames';

// Styles
import './styles.scss'

function Link({ className, children, to }) {
    return (
        <RouterLink to={to} className={cn('link', className)}>
            {children}
        </RouterLink>
    )
}

export default Link;