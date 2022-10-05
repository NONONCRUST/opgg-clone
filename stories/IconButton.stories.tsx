import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "@components/common/IconButton";

export default {
  title: "Components/IconButton",
  componnet: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
