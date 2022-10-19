import React, { useState } from 'react';
import styled from '@emotion/styled';
import { gray, yellow } from '@styles/palette';

const Container = styled.div`
  display: flex;

  position: relative;

  .tooltip {
    position: absolute;
    top: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);

    background-color: black;
    color: white;
    padding: 0.5rem;
    font-size: 0.75rem;
    z-index: 1;
    width: 16rem;
    line-height: 1rem;
  }

  .arrow {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 33%;
    transform: translateX(-50%);
    transform: rotate(45deg);

    width: 1rem;
    height: 1rem;
    background-color: black;
  }

  .skill-name,
  .skill-reference {
    color: ${yellow[400]};
  }

  .skill-cooldown,
  .skill-cost,
  .skill-range {
    color: ${gray[400]};
  }
`;

interface Props {
  children: React.ReactNode;
  name: string;
  cooldown?: string;
  cost?: string;
  range?: string;
  tooltip?: string;
  reference?: boolean;
  description?: string;
}

const Tooltip: React.FC<Props> = ({
  children,
  name,
  cooldown,
  range,
  cost,
  tooltip,
  reference,
  description,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>();

  const handleMouseOver = () => {
    if (isHovering) return;

    setTooltipTimeout(
      setTimeout(() => {
        setIsHovering(true);
      }, 300),
    );
  };

  const handleMouseOut = () => {
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    setIsHovering(false);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      {isHovering && (
        <>
          <div className="tooltip">
            {name && <p className="skill-name">{name}</p>}
            {cooldown && (
              <p className="skill-cooldown">재사용대기시간(초): {cooldown}</p>
            )}
            {cost && <p className="skill-cost">소모: {cost}</p>}
            {range && <p className="skill-range">범위: {range}</p>}
            {(cooldown || cost || range) && <br />}
            {tooltip && (
              <>
                <p className="skill-tooltip">{tooltip}</p>
                <br />
              </>
            )}
            {reference && (
              <>
                <p className="skill-reference">
                  [?]로 표시된 값은 Riot API 에서 제공하지 않는 데이터입니다.
                  정확한 값은 LoL 클라이언트에서 확인 하실 수 있습니다.
                </p>
                <br />
              </>
            )}
            {description && <p className="skill-description">{description}</p>}
          </div>
          <div className="arrow" />
        </>
      )}
    </Container>
  );
};

export default React.memo(Tooltip);
