// Packages
import React from "react";
import Icons from "./icons";
import cn from "classnames";

// Styles
import "./styles.scss";

const Icon = ({ className, name, size = 24, color = "currentColor", ...props }) => {
    const SvgIcon = Icons[name];

    if (!SvgIcon) {
        return null;
    }

    return <SvgIcon className={cn('icon', className)} width={size} height={size} color={color} {...props} />;
};

export default Icon;