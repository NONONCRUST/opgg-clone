import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { localActions } from "../store/localSlice";

const useFavoriteSummoner = () => {
  const favoriteSummoner = useSelector((state) => state.local.favoriteSummoner);
  const dispatch = useDispatch();

  const getFavoriteSummoner = useCallback(() => {
    const localFavoriteSummoner = localStorage.getItem("favorite");

    if (localFavoriteSummoner)
      dispatch(
        localActions.setFavoriteSummoner(JSON.parse(localFavoriteSummoner))
      );
  }, [dispatch]);

  const addFavoriteSummoner = (username: string) => {
    const newFavoriteSummoner = [username, ...favoriteSummoner];

    if (newFavoriteSummoner.length > 8) newFavoriteSummoner.pop();

    localStorage.setItem("favorite", JSON.stringify(newFavoriteSummoner));
    dispatch(localActions.setFavoriteSummoner(newFavoriteSummoner));
  };

  const removeFavoriteSummoner = (username: string) => {
    const newFavoriteSummoner = favoriteSummoner.filter(
      (item: string) => item !== username
    );

    localStorage.setItem("favorite", JSON.stringify(newFavoriteSummoner));
    dispatch(localActions.setFavoriteSummoner(newFavoriteSummoner));
  };

  useEffect(() => {
    getFavoriteSummoner();
  }, [getFavoriteSummoner]);

  return { favoriteSummoner, addFavoriteSummoner, removeFavoriteSummoner };
};

export default useFavoriteSummoner;
