import * as React from "react"
import "./grid.scss"

export interface GridProps {
  primary?: boolean
}

const Grid: React.FC<GridProps> = () => {
  return (
    <>
      <section role="grid">
        <div role="row">
          <span role="gridcell">
            <h3>Grid col</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod nulla totam dolorem
              nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus
              ipsum maxime dignissimos id.
            </p>
            <a href="http://www.w3.org/TR/wai-aria-1.1/">
              ARIA 1.1 Specification
            </a>
          </span>
          <span role="gridcell">
            <h3>Grid col</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod nulla totam dolorem
              nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus
              ipsum maxime dignissimos id.
            </p>
            <a href="https://www.w3.org/TR/core-aam-1.1/">
              Core Accessibility API Mappings 1.1
            </a>
          </span>
          <span role="gridcell">
            <h3>Grid col</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod nulla totam dolorem
              nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus
              ipsum maxime dignissimos id.
            </p>
            <a href="https://www.w3.org/WAI/intro/aria.php">
              WAI-ARIA Overview
            </a>
          </span>
          <span role="gridcell">
            <h3>Grid col</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod nulla totam dolorem
              nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus
              ipsum maxime dignissimos id.
            </p>
            <a href="https://www.w3.org/WAI/intro/wcag">
              WCAG Overview
            </a>
          </span>
        </div>
      </section>
    </>
  )
}

export const GridCell = () => {
  return (
    <span role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
      <a href="http://www.w3.org/TR/wai-aria-1.1/">
        ARIA 1.1 Specification
      </a>
    </span>
  )
}

export default Grid
