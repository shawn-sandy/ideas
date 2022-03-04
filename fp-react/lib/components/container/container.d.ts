import * as React from "react";
import "./Container.scss";
export interface LayoutProps {
    /**
     * The tag to use for the layout
     */
    tag?: "section" | "div" | "main" | "header" | "footer" | "aside" | "article" | "nav";
    /**
     * The content to render
     */
    children: React.ReactNode;
    /**
     * The styles to apply to the layout/container
     */
    styles?: object;
    /**
     * The classes to apply to the layout/container
     */
    classes?: string;
}
/**
 * The layout component is used to wrap content in a container
 * - Dynamic add tag name
 */
export declare const Container: React.FC<LayoutProps>;
export interface CardProps extends LayoutProps {
    /**
     * The tag to use for the card elements
     */
    elements?: "div" | "aside" | "figure" | "blockquote" | "details";
}
export declare const Card: React.FC<CardProps>;
export default Container;
