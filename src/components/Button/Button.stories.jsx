import React from "react"
import Button from "./Button"

export default {
  title: "Calculator/Button",
  component: Button,
}

function Template(args) {
  return <Button {...args} />
}

export const Number = Template.bind({})
Number.args = {
  value: "1",
  type: "number",
}

export const Operator = Template.bind({})
Operator.args = {
  value: "+",
  type: "operator",
}
