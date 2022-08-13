import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { useChampionsQuery } from "../../lib/queries";
import { shortenText } from "../../lib/utils";
import { gray } from "../../styles/palette";
import { theme } from "../../styles/theme";
import ChampionFilterInput from "../ChampionFilterInput";
import Avatar from "../common/Avatar";
import Card from "../common/Card";
import DropdownButton from "../common/dropdown/DropdownButton";
import DropdownMenu from "../common/dropdown/DropdownMenu";
import DropdownMenuItem from "../common/dropdown/DropdownMenuItem";
import Typography from "../common/Typography";
import FilteredChampionNotFound from "../FilteredChampionNotFound";
import Flexbox from "../layouts/Flexbox";
import Layout from "../layouts/Layout";
import { rem } from "polished";

const Base = styled.main`
  .contents {
    background-color: ${gray[50]};
    min-height: 80vh;
    padding: 0.5rem;
  }

  .champion-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .champion-avatar {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: ${gray[500]};
    font-size: 0.75rem;

    cursor: pointer;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .contents {
      padding: 0.5rem 0;
    }
  }
`;

interface Props {
  championList: ChampionType[];
}

const ChampionPage: React.FC<Props> = ({ championList }) => {
  const [inputValue, setInputValue] = useState("");
  const [version, setVersion] = useState<VersionType>("12.15");

  const { data: championsData } = useChampionsQuery(version, championList);

  const filteredChampionsData = championsData?.filter((champion) => {
    return champion.name.includes(inputValue);
  });

  const parseChampionName = (championName: string) =>
    championName.length > 4 ? shortenText(championName, 3) : championName;

  return (
    <Base>
      <Layout>
        <Flexbox
          padding="2rem 1rem 6rem 1rem"
          items="start"
          flex="col"
          gap="1rem"
        >
          <Typography size="2rem" weight={600}>
            챔피언 분석
          </Typography>
          <Typography color={gray[400]}>
            챔피언에 대한 정보를 확인할 수 있습니다.
          </Typography>
        </Flexbox>
      </Layout>
      <div className="contents">
        <Layout>
          <Flexbox flex="col" gap="0.5rem" items="start">
            <Card>
              <Flexbox padding="0.5rem" justify="start">
                <DropdownButton label={version}>
                  <DropdownMenu>
                    <DropdownMenuItem
                      label="12.15"
                      onClick={() => setVersion("12.15")}
                    />
                    <DropdownMenuItem
                      label="12.14"
                      onClick={() => setVersion("12.14")}
                    />
                  </DropdownMenu>
                </DropdownButton>
              </Flexbox>
            </Card>
            <Flexbox items="start" gap="0.5rem">
              <Card width={rem(332)}>
                <Flexbox padding="0.5rem">
                  <ChampionFilterInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                  />
                </Flexbox>
                <div className="champion-list">
                  {filteredChampionsData &&
                    filteredChampionsData.map((champion, index) => (
                      <Link href={`/champions/${champion.id}`} key={index}>
                        <a className="champion-avatar">
                          <Avatar
                            size="46px"
                            shape="boxier"
                            src={`/champion/${champion.id}.png`}
                          />
                          <Typography>
                            {parseChampionName(champion.name)}
                          </Typography>
                        </a>
                      </Link>
                    ))}
                  {filteredChampionsData &&
                    filteredChampionsData.length === 0 && (
                      <FilteredChampionNotFound />
                    )}
                </div>
              </Card>
            </Flexbox>
          </Flexbox>
        </Layout>
      </div>
    </Base>
  );
};

export default ChampionPage;
