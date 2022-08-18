import styled from "@emotion/styled";
import React from "react";
import Button from "../common/Button";
import Tooltip from "../common/Tooltip";
import Flexbox from "../layouts/Flexbox";

const Base = styled.main``;

const TestPage: React.FC = () => {
  return (
    <Base>
      <Flexbox justify="start" padding="8rem">
        <Tooltip
          name="싹둑싹둑!"
          cooldown="6/5/5/4/3"
          cost="40"
          range="450"
          tooltip="아트록스가 사슬을 발사하여 처음 적중한 적을 ?초 동안 ?%만큼 둔화시키고 ?의 물리 피해를 입힙니다. 챔피언과 대형 정글 몬스터는 ?초 안에 해당 지역을 벗어나지 않으면 중심으로 끌려가 다시 같은 양의 피해를 입습니다.?"
          description="아트록스가 악마의 힘을 해방하여 근처 적 미니언에게 공포를 주고 자신의 공격력과 체력 회복량, 이동 속도가 증가합니다. 아트록스가 챔피언 처치에 관여하면 이 효과의 지속시간이 연장됩니다."
        >
          <Button>버튼</Button>
        </Tooltip>
      </Flexbox>
    </Base>
  );
};

export default TestPage;
