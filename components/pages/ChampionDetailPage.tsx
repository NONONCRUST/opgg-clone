import React, { useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { useChampionQuery } from "../../lib/queries";
import { gray } from "../../styles/palette";
import { theme } from "../../styles/theme";
import ChampionProfileAvatar from "../ChampionProfileAvatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import Layout from "../layouts/Layout";
import Card from "../common/Card";
import Divider from "../common/Divider";
import DropdownButton from "../common/dropdown/DropdownButton";
import DropdownMenu from "../common/dropdown/DropdownMenu";
import DropdownMenuItem from "../common/dropdown/DropdownMenuItem";
import Textarea from "../common/Textarea";
import TabButton from "../common/TabButton";
import ToggleButton from "../common/ToggleButton";

const Base = styled.main`
  .champion-detail-content-tab {
    display: flex;
    padding: 1rem;
  }

  .champion-detail-content-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
  }

  .champion-detail-content {
    background-color: ${gray[50]};
    min-height: 80vh;
    padding: 0.5rem;
  }

  .ad {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .champion-detail-content-tab {
      padding: 1rem 0;
    }

    .champion-detail-content-header {
      padding: 2rem 0;
    }

    .champion-detail-content {
      padding: 0.5rem 0;
    }
  }
`;

interface Props {
  champion: ChampionType;
}

const ChampionDetailPage: React.FC<Props> = ({ champion }) => {
  const [version, setVersion] = useState<VersionType>("12.15");
  const [isVersionFiltered, setIsVersionFiltered] = useState(false);

  const router = useRouter();

  const championName = router.query.championName as string;

  const { data: championData } = useChampionQuery(
    version,
    championName,
    champion
  );

  console.log(championData);

  return (
    <Base>
      <Head>
        <title>{champion.name} - OP.GG</title>
      </Head>
      <Layout>
        <div className="champion-detail-content-tab">
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
        </div>
      </Layout>
      <Divider />
      <Layout>
        <div className="champion-detail-content-header">
          <Flexbox justify="start" gap="1rem">
            <ChampionProfileAvatar championName={championName} />
            <Flexbox flex="col" gap="0.5rem" items="start">
              <Typography size={theme.fontSize.subtitle2} weight={600}>
                {champion.name}
              </Typography>
              <Typography color={gray[500]}>{champion.title}</Typography>
            </Flexbox>
          </Flexbox>
        </div>
      </Layout>
      <div className="champion-detail-content">
        <Layout>
          <Card className="ad" height="6rem" />
          <Card>
            <Flexbox flex="col" padding="0.75rem" items="start" gap="1rem">
              <Typography size={theme.fontSize.caption1} weight={600}>
                {champion.name} <span style={{ fontWeight: 400 }}>운영 팁</span>
              </Typography>
              <Textarea
                height="6rem"
                placeholder={`나만의 ${champion.name} 플레이 팁을 알려주세요.`}
              />
              <Flexbox justify="between" width="100%">
                <Flexbox gap="0.5rem">
                  <TabButton height="2rem" width="4rem" active>
                    최신순
                  </TabButton>
                  <TabButton height="2rem" width="4rem" active={false}>
                    등록순
                  </TabButton>
                </Flexbox>
                <Flexbox gap="0.5rem">
                  <Typography size={theme.fontSize.caption3}>
                    12.15 버전만 보기
                  </Typography>
                  <ToggleButton
                    active={isVersionFiltered}
                    onClick={() => setIsVersionFiltered((prev) => !prev)}
                  />
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Card>
        </Layout>
      </div>
    </Base>
  );
};

export default ChampionDetailPage;
