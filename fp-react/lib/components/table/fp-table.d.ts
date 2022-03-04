import * as React from "react";
import "./table.scss";
export interface CommonProps {
    /**
     * The table's children.
     */
    children?: React.ReactNode;
    /**
     * The table row type.
     */
    cell?: "td" | "th";
}
declare const FpTable: React.FC<CommonProps>;
export declare const FpTableHead: React.FC<CommonProps>;
export declare const FpTableBody: React.FC<CommonProps>;
export declare const FpTableRow: React.FC<CommonProps>;
export declare const FpTableCell: React.FC<CommonProps>;
export default FpTable;
