import React from "react";
import PropTypes from "prop-types";
/**
 * Button Element.
 * * Submit, Reset, and Button styles
 * * Disabled state and default styles
 * * [Button documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.2/#button)
 */
declare const Button: {
    ({ buttonType, styles, children, click, ...props }: ButtonProps): JSX.Element;
    propTypes: {
        /**
         * Button content - use html, text
         */
        children: PropTypes.Requireable<any>;
        /**
         * Button onClick function - use to override default click handler
         */
        click: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Set the Button type - default is 'button'
         */
        type: PropTypes.Requireable<string>;
        /**
         * Set the Button styles w/style attribute
         * `{'--btn-bg': 'red', '--btn-color': 'white'}`
         * changes the button background and text color
         */
        styles: PropTypes.Requireable<object>;
    };
};
export default Button;
declare type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    buttonType?: "button" | "submit" | "reset" | undefined;
    click?: () => void;
    styles?: React.CSSProperties;
};
