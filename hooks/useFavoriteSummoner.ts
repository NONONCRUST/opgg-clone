import { useEffect, useState } from "react";

const useFavoriteSummoner = () => {
  const [favoriteSummoner, setFavoriteSummoner] = useState<string[]>([]);

  const addFavoriteSummoner = (username: string) => {
    const newFavoriteSummoner = [...favoriteSummoner, username];
    setFavoriteSummoner(newFavoriteSummoner);

    localStorage.setItem("favorite", JSON.stringify(newFavoriteSummoner));
  };

  const removeFavoriteSummoner = (username: string) => {
    const newFavoriteSummoner = favoriteSummoner.filter(
      (item) => item === username
    );
    setFavoriteSummoner(newFavoriteSummoner);

    localStorage.setItem("favorite", JSON.stringify(newFavoriteSummoner));
  };

  useEffect(() => {
    const localFavoriteSummoner = localStorage.getItem("favorite");

    if (localFavoriteSummoner)
      setFavoriteSummoner(JSON.parse(localFavoriteSummoner));
  }, []);

  return { favoriteSummoner, addFavoriteSummoner, removeFavoriteSummoner };
};

export default useFavoriteSummoner;
