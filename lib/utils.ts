// Date를 0000년 00월 00일 00:00:00 의 형태로 파싱합니다 - nonon
export const parseDateAbsolute = (dateString?: Date) => {
  if (!dateString) return "0000년 00월 00일 00:00:00";

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${year}년 ${month + 1}월 ${day}일 ${hours}:${minutes}:${seconds}`;
};

// Date를 0 분전, 0 시간 전, 0 일 전, 0 년 전과 같은 형태로 파싱합니다 - nonon
export const parseDateRelative = (dateString: Date) => {
  const currentDate = new Date();
  const date = new Date(dateString);

  const betweenTime = Math.floor(
    (currentDate.getTime() - date.getTime()) / 1000 / 60
  );

  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) return `${betweenTime}분 전`;

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) return `${betweenTimeHour}시간 전`;

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) return `${betweenTimeDay}일 전`;

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

export const parseDateRelativeMinuteSecond = (dateString: Date) => {
  const currentDate = Date.now();
  const date = new Date(dateString);

  const betweenMinute = new Date(currentDate - date.getTime()).getMinutes();

  const betweenSecond = new Date(currentDate - date.getTime()).getSeconds();

  return `${betweenMinute}:${
    betweenSecond < 10 ? `0${betweenSecond}` : betweenSecond
  }`;
};

// 현재 시간과 특정 시간 사이의 분 간격을 구합니다 - nonon
export const getMinuteDiff = (dateString: Date) => {
  const date = new Date(dateString);

  const current = Date.now();
  const time = date.getTime();
  const diff = current - time;

  return new Date(diff).getTime() / 1000 / 60;
};

// document.cookie를 객체 형태로 바꿔줍니다 - nonon
export const parseCookie = (cookieString: string) => {
  const cookieArray = cookieString.split(";");

  const cookieObject: any = {};

  cookieArray.forEach((cookie) => {
    if (cookie.startsWith(" ")) {
      const slicedCookie = cookie.slice(1);

      const cookieNameValue = slicedCookie.split("=");
      cookieObject[cookieNameValue[0]] = cookieNameValue[1];
    } else {
      const cookieNameValue = cookie.split("=");
      cookieObject[cookieNameValue[0]] = cookieNameValue[1];
    }
  });

  return cookieObject;
};

// 쿠키를 설정합니다 - nonon
export const setCookie = (cookie: string, value: string, maxAge?: string) => {
  let cookieString = `${cookie}=${value}; path=/;`;
  if (maxAge) cookieString = cookieString + ` max-age=${maxAge}`;
  document.cookie = cookieString;
};

// 쿠키를 제거합니다 - nonon
export const removeCookie = (cookie: string) => {
  document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

// 맨 위로 이동합니다 - nonon
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// 함수에 디바운스를 적용합니다 - nonon
export const debounce = (callback: any, wait = 166) => {
  let timeout: NodeJS.Timeout | null;
  return (...args: any) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(context, args);
    }, wait);
  };
};

// 함수에 스로틀을 적용합니다 - nonon
export const throttle = (callback: any, limit = 166) => {
  let wait = false;
  return (...args: any) => {
    const context = this;
    if (!wait) {
      callback.apply(context, args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

// 텍스트의 길이가 length보다 길면 잘라내고 마지막에 ...을 붙입니다 - nonon
export const shortenText = (text: string, length: number) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }
  return text;
};

// 승률을 구합니다 - nonon
export const getWinRate = (wins?: number, losses?: number) => {
  if (!wins || !losses) return;

  return Math.round((wins / (wins + losses)) * 100);
};

// 첫 글자를 대문자로 만듭니다 - nonon
export const capitalize = (string?: string) => {
  if (!string) return;

  return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// 로마 숫자 표기법의 랭크를 아라비아 숫자 표기법으로 변환합니다 - nonon
export const mapRank = (rank?: string) => {
  if (rank === "I") return "1";
  if (rank === "II") return "2";
  if (rank === "III") return "3";
  if (rank === "IV") return "4";
  // ...
};

// 분당 CS를 구합니다
export const getCsPerMinute = (gameDuration?: Date, cs?: number) => {
  if (!gameDuration || !cs) return;

  const seconds = gameDuration.getTime();
  const csPerMinute = (cs / (seconds / 60)).toFixed(1);

  return csPerMinute;
};

// KDA를 구합니다
export const getKda = (kills: number, deaths: number, assists: number) => {
  if (deaths === 0) return "Perfect";

  const kda = ((kills + assists) / deaths).toFixed(2);

  return kda;
};

// 킬관여율을 구합니다
export const getKillParticipation = (
  totalKills: number,
  kills: number,
  assists: number
) => {
  const killParticipation = Math.round(((kills + assists) / totalKills) * 100);

  return killParticipation;
};
