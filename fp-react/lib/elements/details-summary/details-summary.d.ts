import * as React from "react";
import "./details-summary.scss";
/**
 * `FpDetailsSummary` React Details Summary element
 *  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 */
declare const Details: React.FC<DetailsProps>;
export declare const Summary: React.FC<DetailsProps>;
interface DetailsProps {
    /**
     * Children elements
     */
    children: React.ReactNode;
    /**
     * Element classes
     */
    classes?: string;
    /**
     * Toggle event function
     */
    toggle?: (event: React.SyntheticEvent<HTMLDetailsElement>) => void;
    /**
     * Styles object
     */
    styles?: any | object;
}
export default Details;
