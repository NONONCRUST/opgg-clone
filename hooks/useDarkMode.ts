import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../store";
import { themeActions } from "../store/themeSlice";

const useDarkMode = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const setLightMode = () => {
    window.localStorage.setItem("theme", "light");
    dispatch(themeActions.setDarkMode(false));
  };

  const setDarkMode = () => {
    window.localStorage.setItem("theme", "light");
    dispatch(themeActions.setDarkMode(true));
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setLightMode();
    }

    if (!isDarkMode) {
      setDarkMode();
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
