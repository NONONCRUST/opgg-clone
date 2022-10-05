import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const HeadMeta: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Head>
      <title>
        {title ||
          "롤 전적 검색 OP.GG - 전적 검색, 관전, 리플레이, 챔피언 공략, 카운터, 랭킹"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "롤 전적, 모든 게임의 전적, 챔프 평점, KDA, 승률을 볼 수 있고 리플을 보거나 자신의 게임을 녹화를 할 수 있습니다. 지금 바로 당신의 소환사명을 검색해보세요!"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        property="og:title"
        content={
          title ||
          "롤 전적 검색 OP.GG - 전적 검색, 관전, 리플레이, 챔피언 공략, 카운터, 랭킹"
        }
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          image || "https://s-lol-web.op.gg/images/reverse.rectangle.png"
        }
      />
      <meta property="og:article:author" content="정리습관" />
    </Head>
  );
};

export default HeadMeta;
