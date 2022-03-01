import * as React from "react"
import "./grid.scss"

export interface GridProps {
  children?: React.ReactNode
}

const Grid: React.FC<GridProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <section role="grid" {...props}>
        <div role="row">{children}</div>
      </section>
    </>
  )
}

export const GridCell: React.FC<GridProps> = ({
  children,
  ...props
}) => {
  return (
    <div role="gridcell" {...props}>
      {children}
    </div>
  )
}

export default Grid
