import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/common/Button";

export default {
  title: "Components/Button",
  componnet: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  size: "medium",
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  size: "medium",
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  size: "medium",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  size: "medium",
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  size: "large",
  disabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "contained",
  size: "medium",
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  size: "small",
  disabled: false,
};
