import React from "react"
import Display from "./Display"

export default {
  title: "Calculator/Display",
  component: Display,
}

function Template(args) {
  return <Display {...args} />
}

export const Empty = Template.bind({})
Empty.args = {
  value: "",
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: "123",
}
