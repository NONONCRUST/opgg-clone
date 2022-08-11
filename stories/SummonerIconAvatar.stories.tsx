import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SummonerIconAvatar from "../components/SummonerIconAvatar";

export default {
  title: "Components/SummonerIconAvatar",
  componnet: SummonerIconAvatar,
} as ComponentMeta<typeof SummonerIconAvatar>;

const Template: ComponentStory<typeof SummonerIconAvatar> = (args) => (
  <SummonerIconAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconNumber: 4644,
};
