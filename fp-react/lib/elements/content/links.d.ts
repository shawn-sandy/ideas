import * as React from "react";
/**
 * Link Element.
 * Provides the heavy lifting for creating links
 * * Adds a click event to the link
 * * [Link `a` Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 */
declare const FpLinks: React.FC<LinkProps>;
interface LinkProps {
    /**
     * The link destination
     */
    to: string;
    classes?: string;
    styles?: any;
    title?: string;
    target?: string;
    rel?: string;
    download?: string;
    children?: React.ReactNode;
}
export declare const OpenTab: React.FC<LinkProps>;
export default FpLinks;
