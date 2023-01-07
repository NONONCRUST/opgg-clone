import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { gray } from '@lib/styles/palette';
import { useChampionQuery, useCommentsQuery } from '@lib/queries';
import { theme } from '@lib/styles/theme';
import ChampionProfileAvatar from '@components/ChampionProfileAvatar';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';
import Layout from '@components/layouts/Layout';
import Card from '@components/common/Card';
import Divider from '@components/common/Divider';
import DropdownButton from '@components/common/dropdown/DropdownButton';
import DropdownMenu from '@components/common/dropdown/DropdownMenu';
import DropdownMenuItem from '@components/common/dropdown/DropdownMenuItem';
import Textarea from '@components/common/Textarea';
import TabButton from '@components/common/TabButton';
import ToggleButton from '@components/common/ToggleButton';
import Button from '@components/common/Button';
import CommentCard from '@components/comment/CommentCard';
import { postComment } from '@lib/api/comment';
import CommentNotFound from '@components/comment/CommentNotFound';
import HeadMeta from '@components/HeadMeta';
import SkillAvatar from '@components/SkillAvatar';
import Tooltip from '@components/common/Tooltip';
import { SPELL, VERSION } from '@lib/constants';

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
  initialChampionData: ChampionDetailType;
}

const ChampionDetailPage: React.FC<Props> = ({ initialChampionData }) => {
  const [version, setVersion] = useState<VersionType>(VERSION);
  const [isVersionFiltered, setIsVersionFiltered] = useState(false);
  const [comment, setComment] = useState('');
  const [currentTab, setCurrentTab] = useState<'newest' | 'oldest'>('newest');

  const searchParams = useSearchParams();

  const championName = searchParams.get('championName') as string;

  const { data: championData } = useChampionQuery(
    version,
    championName,
    initialChampionData,
  );

  const { data: commentsData, refetch: refetchComments } =
    useCommentsQuery(championName);

  const reversedCommentsData =
    commentsData &&
    (currentTab === 'newest' ? [...commentsData].reverse() : commentsData);

  const parsedCommentsData = isVersionFiltered
    ? reversedCommentsData?.filter((data) => data.version === VERSION)
    : reversedCommentsData;

  const { mutate, isLoading: isMutating, isError } = useMutation(postComment);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setComment(event.target.value);
  };

  const submitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axios.get('https://geolocation-db.com/json/');
    const clientIp = response.data.IPv4.split('.').slice(0, 2).join('.');
    const body = {
      name: clientIp,
      champion: championName,
      version,
      contents: comment,
    };

    mutate(body, {
      onSuccess: () => {
        setComment('');
        refetchComments();
      },
    });
  };

  return (
    <Base>
      <HeadMeta
        title={`${championData.name} - OP.GG - League of Legends`}
        description={`${championData.name}의 정보와 사용자 팁`}
      />
      <Layout>
        <div className="champion-detail-content-tab">
          <DropdownButton label={version}>
            <DropdownMenu>
              <DropdownMenuItem
                label="12.15"
                onClick={() => setVersion('12.15')}
              />
              <DropdownMenuItem
                label="12.14"
                onClick={() => setVersion('12.14')}
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
            <Flexbox flex="col" gap="0.8rem" items="start">
              <Typography size={theme.fontSize.subtitle2} weight={600}>
                {championData.name}
              </Typography>
              <Flexbox gap="0.2rem">
                <Tooltip
                  name={championData.passive.name}
                  description={championData.passive.description}
                >
                  <SkillAvatar
                    type="passive"
                    src={`/passive/${championData.passive.image.full}`}
                  />
                </Tooltip>
                {championData.spells.map((spell, index) => (
                  <Tooltip
                    key={index}
                    name={spell.name}
                    cooldown={spell.cooldownBurn}
                    cost={spell.costBurn}
                    range={spell.rangeBurn}
                    description={spell.description}
                    reference
                  >
                    <SkillAvatar
                      type={SPELL[index]}
                      src={`/spell/${spell.image.full}`}
                    />
                  </Tooltip>
                ))}
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </div>
      </Layout>
      <div className="champion-detail-content">
        <Layout>
          <Card className="ad" height="6rem" />
          <Card style={{ overflow: 'hidden' }}>
            <Flexbox flex="col" padding="0.75rem" items="start" gap="1rem">
              <Typography size={theme.fontSize.caption1} weight={600}>
                {championData.name}{' '}
                <span style={{ fontWeight: 400 }}>운영 팁</span>
              </Typography>
              <form className="comment-form" onSubmit={submitComment}>
                <Textarea
                  height="6rem"
                  placeholder={`나만의 ${championData.name} 플레이 팁을 알려주세요.`}
                  value={comment}
                  onChange={handleTextareaChange}
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
                    active={currentTab === 'newest'}
                    onClick={() => setCurrentTab('newest')}
                  >
                    최신순
                  </TabButton>
                  <TabButton
                    height="2rem"
                    width="4rem"
                    active={currentTab === 'oldest'}
                    onClick={() => setCurrentTab('oldest')}
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
              parsedCommentsData.map((data) => (
                <>
                  <Divider />
                  <CommentCard commentData={data} />
                </>
              ))}
            {parsedCommentsData?.length === 0 && <CommentNotFound />}
          </Card>
        </Layout>
      </div>
    </Base>
  );
};

export default ChampionDetailPage;
