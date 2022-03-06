import * as React from "react"

export interface GridProps {
  /**
   * The grid's children elements.
   */
  children?: React.ReactNode
  /**
   * Grid styles object
   */
  styles?: object
  /**
   * Class names
   */
  classes?: string
}

const Grid: React.FC<GridProps> = ({
  children,
  styles,
  classes,
  ...props
}) => {
  return (
    <>
      <section role="grid" style={styles} {...props}>
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
