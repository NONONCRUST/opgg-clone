import { useEffect, useState } from "react";

const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const addSearchHistory = (username: string) => {
    console.log("adding search history");
    const newSearchHistory = [...searchHistory, username];
    setSearchHistory(newSearchHistory);

    localStorage.setItem("search", JSON.stringify(newSearchHistory));
  };

  const removeSearchHistory = (username: string) => {
    const newSearchHistory = searchHistory.filter((item) => item === username);
    setSearchHistory(newSearchHistory);

    localStorage.setItem("search", JSON.stringify(newSearchHistory));
  };

  useEffect(() => {
    const localSearchHistory = localStorage.getItem("search");

    if (localSearchHistory) setSearchHistory(JSON.parse(localSearchHistory));
  }, []);

  return { searchHistory, addSearchHistory, removeSearchHistory };
};

export default useSearchHistory;
