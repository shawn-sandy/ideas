/** @format */

import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import FpTable from "./fp-table"

export default {
  title: "Components/FpTable",
  component: FpTable,
  layout: "centered",
  status: {
    type: "canary"
  }
} as ComponentMeta<typeof FpTable>

export const BasicTable: ComponentStory<
  typeof FpTable
> = () => (
  <section style={{ width: "100%", minWidth: "85vw" }}>
    <FpTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dom</td>
          <td>6000</td>
          <td>Dom</td>
          <td>6000</td>
        </tr>
        <tr>
          <td>Melissa</td>
          <td>5150</td>
          <td>Melissa</td>
          <td>5150</td>
        </tr>
        <tr>
          <td>Melissa</td>
          <td>5150</td>
          <td>Melissa</td>
          <td>5150</td>
        </tr>
        <tr>
          <td>Melissa</td>
          <td>5150</td>
          <td>Melissa</td>
          <td>5150</td>
        </tr>
      </tbody>
    </FpTable>
  </section>
)
