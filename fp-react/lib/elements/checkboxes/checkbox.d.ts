import React from "react";
import "./checkbox.scss";
declare type LabelProps = {
    children: React.ReactNode;
    classes?: string;
    name?: string;
    styles?: React.CSSProperties;
};
/**
 * Label Component provides a wrapper for custom styled checkbox
 * using just CSS.
 * * Customs styles the default input checkbox
 * * Wraps a label around the checkbox
 * * Adds a click event to the checkbox
 * * Ensured that the label is accessible
 * * Full keyboard accessibility
 * * [Checkbox Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox)
 */
export declare const Label: React.FC<LabelProps>;
declare type CheckboxProps = {
    classes?: string;
    name: string;
    styles?: React.CSSProperties;
    click?: () => void;
    value?: string;
};
declare const Checkbox: React.VFC<CheckboxProps>;
export default Checkbox;
