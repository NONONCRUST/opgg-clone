import React from "react";
import styled from "@emotion/styled";
import { gray } from "@styles/palette";
import Avatar from "@components/common/Avatar";

const Container = styled.div`
  position: relative;
  cursor: pointer;

  .skill-type {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 0.75rem;
    font-weight: 600;
    width: 1rem;
    height: 1rem;
    background-color: ${gray[700]};
    color: white;
    border-top-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

interface Props {
  type: string;
  src: string;
}

const SkillAvatar: React.FC<Props> = ({ type, src }) => {
  return (
    <Container>
      <Avatar shape="boxier" src={src} alt="champion skill" />
      {type !== "passive" && <div className="skill-type">{type}</div>}
    </Container>
  );
};

export default SkillAvatar;
