import * as React from "react";
import "./img.scss";
/**
 * `FpImage` React Image element
 * `FpCaption` : Adds a caption to an image
 * `FpFig` : Adds a figure to an image
 *
 */
declare const FpImg: React.VFC<FpImgProps>;
export default FpImg;
export interface FpImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * set the object-fit style on the image
     */
    fit?: string;
    /**
     * Image styles object
     */
    styles?: any;
    /**
     * Image class names
     */
    classes?: string;
    /**
     * Handles the image error event for the image
     */
    imgError?: () => void;
    /**
     * Handles the image loaded event for the image
     */
    imgLoaded?: () => void;
    /**
     * Sets the image aspect ratio property
     */
    ratio?: string;
    /**
     * Sets the image placeholder for image errors
     */
    imgPlaceholder?: string;
    /**
     * Aria label for the image
     */
    ariaLabel?: string;
}
declare type FpFigProps = {
    children: React.ReactNode;
    classes?: string;
    styles?: any;
    width?: string;
    height?: string;
};
/**
 * Images are displayed in blocks by default
 * The image box wrapper allows you to wrap the image
 * in a the picture and change the display without removing
 * the block display.
 */
export declare const FpFig: React.FC<FpFigProps>;
declare type FpCaptionProps = {
    children: React.ReactNode;
    classes?: string;
    styles?: any;
};
export declare const FpCaption: React.FC<FpCaptionProps>;
