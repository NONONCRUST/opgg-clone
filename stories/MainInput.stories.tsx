import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainInput from '@components/main-input/MainInput';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Decorator = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  background-color: ${theme.primary};
  height: 90vh;
`;

export default {
  title: 'Components/MainInput',
  componnet: MainInput,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof MainInput>;

export const Template: ComponentStory<typeof MainInput> = (args) => (
  <MainInput {...args} />
);
