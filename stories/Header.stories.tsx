import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '@components/layouts/Header';

export default {
  title: 'Components/Header',
  componnet: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
