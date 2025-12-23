import React from 'react';
import cn from 'classnames';

// styles
import './styles.scss';

function Container ({
    centered = false,
    children,
    className = '',
    fluid = true,
}) {
    return (
        <div className={cn("container", {
            "container--centered": centered,
            "container--fluid": fluid
        }, className)}>
            {children}
        </div>
    );
}

export default Container;