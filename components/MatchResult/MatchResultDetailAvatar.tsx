import styled from "@emotion/styled";
import React from "react";
import Avatar from "../common/Avatar";

const Container = styled.div`
  position: relative;

  .match-result-champion-level {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 15px;
    height: 15px;
    font-size: 10px;
    color: white;
    background-color: black;
    border-radius: 50%;
  }
`;

interface Props {
  championName: string;
  championLevel: number;
}

const MatchResultDetailAvatar: React.FC<Props> = ({
  championName,
  championLevel,
}) => {
  return (
    <Container>
      <Avatar src={`/champion/${championName}.png`} />
      <div className="match-result-champion-level">{championLevel}</div>
    </Container>
  );
};

export default MatchResultDetailAvatar;
