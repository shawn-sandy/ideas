import * as React from "react"
import "./table.scss"

export interface FpTableProps {
  /**
   * The table's children.
   */
  children?: React.ReactNode
}

const FpTable: React.FC<FpTableProps> = ({
  children,
  ...props
}) => {
  return <table {...props}>{children}</table>
}

export default FpTable
