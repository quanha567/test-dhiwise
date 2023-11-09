import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "test_create_react_app/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "indigo_50",
  size: "xs",
  variant: "outline",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
