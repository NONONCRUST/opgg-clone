import { ComponentStory, ComponentMeta } from '@storybook/react';

import FavoriteIconButton from '@components/FavoriteIconButton';

export default {
  title: 'Components/FavoriteIconButton',
  componnet: FavoriteIconButton,
} as ComponentMeta<typeof FavoriteIconButton>;

const Template: ComponentStory<typeof FavoriteIconButton> = (args) => (
  <FavoriteIconButton {...args} />
);

export const Default = Template.bind({});

export const Favorite = Template.bind({});
