import * as React from "react"
import "./table.scss"

export interface CommonProps {
  /**
   * The table's children.
   */
  children?: React.ReactNode
  /**
   * The table row type.
   */
  cell?: "td" | "th"
}

const FpTable: React.FC<CommonProps> = ({
  children,
  ...props
}) => {
  return <table {...props}>{children}</table>
}

export const FpTableHead: React.FC<CommonProps> = ({
  children,
  ...props
}) => {
  return <thead>{children}</thead>
}

export const FpTableBody: React.FC<CommonProps> = ({
  children,
  ...props
}) => {
  return <tbody>{children}</tbody>
}

export const FpTableRow: React.FC<CommonProps> = ({
  children
}) => {
  return <tr>{children}</tr>
}

export const FpTableCell: React.FC<CommonProps> = ({
  cell = "td",
  children,
  ...props
}) => {
  const Type: any = cell
  return <Type>{children}</Type>
}

export default FpTable
