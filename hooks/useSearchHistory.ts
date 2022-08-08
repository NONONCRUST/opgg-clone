import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { localActions } from "../store/localSlice";

const useSearchHistory = () => {
  const searchHistory = useSelector((state) => state.local.searchHistory);
  const dispatch = useDispatch();

  const getSearchHistory = () => {
    const localSearchHistory = localStorage.getItem("search");

    if (localSearchHistory)
      dispatch(localActions.setSearchHistory(JSON.parse(localSearchHistory)));
  };

  const addSearchHistory = (username: string) => {
    const newSearchHistory = searchHistory.includes(username)
      ? [username, ...searchHistory.filter((item) => item !== username)]
      : [username, ...searchHistory];

    localStorage.setItem("search", JSON.stringify(newSearchHistory));
    dispatch(localActions.setSearchHistory(newSearchHistory));
  };

  const removeSearchHistory = (username: string) => {
    const newSearchHistory = searchHistory.filter((item) => item !== username);

    localStorage.setItem("search", JSON.stringify(newSearchHistory));
    dispatch(localActions.setSearchHistory(newSearchHistory));
  };

  useEffect(() => {
    getSearchHistory();
  }, []);

  return { searchHistory, addSearchHistory, removeSearchHistory };
};

export default useSearchHistory;
