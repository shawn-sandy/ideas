import * as React from "react";
export interface FpIconProps {
    /**
     * The title attribute of the icon
     */
    title: string;
    /**
     * The size of the icon
     */
    size?: string;
    /**
     * The height of the icon
     */
    height?: string;
    /**
     * The fill color of the icon
     */
    fill?: string;
    /**
     * The svg path(s) for the icon
     */
    /**
     * ViewBox of the icon
     */
    viewBox?: string;
}
/**
 * Icon container component
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg)
 * [SVG Accessibility](https://www.w3.org/TR/SVG11/coords.html)
 */
export declare const FpIcon: React.FC<FpIconProps>;
export default FpIcon;
