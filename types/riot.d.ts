type GetSummonerByNameResponseType = {
  name: string;
  profileIconId: number;
  summonerLevel: number;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  updatedAt: Date;
};

type MatchType = {
  gameId: number;
  gameDuration: number;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  gameMode: string;
  teams: TeamDto[];
  participants: {
    summonerName: string;
    kills: number;
    assists: number;
    deaths: number;
    champLevel: number;
    championName: string;
    detectorWardsPlaced: number;
    wardsPlaced: number;
    wardsKilled: number;
    doubleKills: number;
    tripleKills: number;
    quadraKills: number;
    pentaKills: number;
    goldEarned: number;
    individualPosition: string;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    totalDamageDealt: number;
    summoner1Id: number;
    summoner2Id: number;
    perks: PerksDto;
    totalMinionsKilled: number;
    win: boolean;
  }[];
};

type GetMatchesBySummonerNameResponeType = {
  summonerName: string;
  matches: MatchType[];
  updatedAt: Date;
};

type CurrentGameParticipantType = {
  championId: number;
  perks: {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
  };
  profileIconId: number;
  bot: boolean;
  teamId: number;
  summonerName: string;
  summonerId: string;
  spell1Id: number;
  spell2Id: number;
  gameCustomizationObjects: {
    category: string;
    content: string;
  }[];
};
