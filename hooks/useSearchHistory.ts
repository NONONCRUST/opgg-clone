import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from '@store/index';
import { localActions } from '@store/localSlice';

const useSearchHistory = () => {
  const searchHistory = useSelector((state) => state.local.searchHistory);
  const dispatch = useDispatch();

  const getSearchHistory = useCallback(() => {
    const localSearchHistory = localStorage.getItem('search');

    if (localSearchHistory) {
      dispatch(localActions.setSearchHistory(JSON.parse(localSearchHistory)));
    }
  }, [dispatch]);

  const addSearchHistory = useCallback(
    (username: string) => {
      if (searchHistory.length !== 0 && searchHistory[0] === username) return;

      const newSearchHistory = searchHistory.includes(username)
        ? [username, ...searchHistory.filter((item) => item !== username)]
        : [username, ...searchHistory];

      if (newSearchHistory.length > 8) newSearchHistory.pop();

      localStorage.setItem('search', JSON.stringify(newSearchHistory));
      dispatch(localActions.setSearchHistory(newSearchHistory));
    },
    [dispatch, searchHistory],
  );

  const removeSearchHistory = (username: string) => {
    const newSearchHistory = searchHistory.filter((item) => item !== username);

    localStorage.setItem('search', JSON.stringify(newSearchHistory));
    dispatch(localActions.setSearchHistory(newSearchHistory));
  };

  useEffect(() => {
    getSearchHistory();
  }, [getSearchHistory]);

  return { searchHistory, addSearchHistory, removeSearchHistory };
};

export default useSearchHistory;
