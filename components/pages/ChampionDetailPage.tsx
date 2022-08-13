import React, { useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { useChampionQuery, useCommentsQuery } from "../../lib/queries";
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
import Button from "../common/Button";
import CommentCard from "../comment/CommentCard";
import { useMutation } from "@tanstack/react-query";
import { postComment } from "../../lib/api/comment";
import axios from "axios";

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

  .comment-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
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
  const [comment, setComment] = useState("");
  const [currentTab, setCurrentTab] = useState<"newest" | "oldest">("newest");

  const router = useRouter();

  const championName = router.query.championName as string;

  const { data: championData } = useChampionQuery(
    version,
    championName,
    champion
  );

  const { data: commentsData, refetch: refetchComments } =
    useCommentsQuery(championName);

  const reversedCommentsData =
    commentsData &&
    (currentTab === "newest" ? [...commentsData].reverse() : commentsData);

  const parsedCommentsData = isVersionFiltered
    ? reversedCommentsData?.filter((comment) => comment.version === "12.15")
    : reversedCommentsData;

  const { mutate, isLoading: isMutating, isError } = useMutation(postComment);

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const submitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axios.get("https://geolocation-db.com/json/");
    const clientIp = response.data.IPv4;
    const body = {
      name: clientIp,
      champion: championName,
      version: version,
      contents: comment,
    };

    mutate(body, {
      onSuccess: () => {
        setComment("");
        refetchComments();
      },
    });
  };

  return (
    <Base>
      <Head>
        <title>{championData.name} - OP.GG</title>
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
                {championData.name}
              </Typography>
              <Typography color={gray[500]}>{championData.title}</Typography>
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
                {championData.name}{" "}
                <span style={{ fontWeight: 400 }}>운영 팁</span>
              </Typography>
              <form className="comment-form" onSubmit={submitComment}>
                <Textarea
                  height="6rem"
                  placeholder={`나만의 ${championData.name} 플레이 팁을 알려주세요.`}
                  value={comment}
                  onChange={onChangeTextarea}
                />
                <Flexbox justify="between" width="100%">
                  <Flexbox>
                    {isError && (
                      <Typography
                        size={theme.fontSize.caption1}
                        color={theme.error}
                      >
                        무언가 잘못되었습니다. 다시 시도해 주세요!
                      </Typography>
                    )}
                  </Flexbox>
                  <Button
                    disabled={!comment || isMutating || comment.length > 300}
                  >
                    등록
                  </Button>
                </Flexbox>
              </form>
              <Flexbox justify="between" width="100%">
                <Flexbox gap="0.5rem">
                  <TabButton
                    height="2rem"
                    width="4rem"
                    active={currentTab === "newest"}
                    onClick={() => setCurrentTab("newest")}
                  >
                    최신순
                  </TabButton>
                  <TabButton
                    height="2rem"
                    width="4rem"
                    active={currentTab === "oldest"}
                    onClick={() => setCurrentTab("oldest")}
                  >
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
            {parsedCommentsData &&
              parsedCommentsData.map((comment, index) => (
                <CommentCard key={index} commentData={comment} />
              ))}
          </Card>
        </Layout>
      </div>
    </Base>
  );
};

export default ChampionDetailPage;
