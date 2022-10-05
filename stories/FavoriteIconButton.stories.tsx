import { ComponentStory, ComponentMeta } from "@storybook/react";

import FavoriteIconButton from "@components/FavoriteIconButton";

export default {
  title: "Components/FavoriteIconButton",
  componnet: FavoriteIconButton,
} as ComponentMeta<typeof FavoriteIconButton>;

const Template: ComponentStory<typeof FavoriteIconButton> = (args) => (
  <FavoriteIconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isFavorite: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
};
