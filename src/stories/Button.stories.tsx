import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button as ButtonComponent, Img } from "components";

export default {
  title: "test_create_react_app/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<any> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  shape: "RoundedBorder12",
  color: "white_A700",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  shape: "RoundedBorder12",
  color: "white_A700",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  leftIcon: (
    <Img
      src="images/img_google.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  shape: "RoundedBorder12",
  color: "white_A700",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  rightIcon: (
    <Img
      src="images/img_google.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
