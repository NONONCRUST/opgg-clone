import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  componnet: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: "large",
  open: false,
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  open: false,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  open: false,
};
