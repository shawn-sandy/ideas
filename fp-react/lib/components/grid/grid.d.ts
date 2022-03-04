import * as React from "react";
import "./grid.scss";
export interface GridProps {
    children?: React.ReactNode;
}
declare const Grid: React.FC<GridProps>;
export declare const GridCell: React.FC<GridProps>;
export default Grid;
