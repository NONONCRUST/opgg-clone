import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";

export default {
  title: "Components/DropdownButton",
  componnet: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

const Template: ComponentStory<typeof DropdownButton> = (args) => (
  <DropdownButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <DropdownMenu>
      <DropdownMenuItem label="메뉴1" />
      <DropdownMenuItem label="메뉴2" />
      <DropdownMenuItem label="메뉴3" />
    </DropdownMenu>
  ),
  size: "medium",
  open: false,
};

export const Large = Template.bind({});
Large.args = {
  children: Default.args.children,
  size: "large",
  open: false,
};

export const Medium = Template.bind({});
Medium.args = {
  children: Default.args.children,
  size: "medium",
  open: false,
};

export const Small = Template.bind({});
Small.args = {
  children: Default.args.children,
  size: "small",
  open: false,
};
