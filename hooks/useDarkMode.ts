import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { themeActions } from "../store/themeSlice";

const useDarkMode = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const setLightMode = useCallback(() => {
    window.localStorage.setItem("theme", "light");
    dispatch(themeActions.setDarkMode(false));
  }, [dispatch]);

  const setDarkMode = useCallback(() => {
    window.localStorage.setItem("theme", "light");
    dispatch(themeActions.setDarkMode(true));
  }, [dispatch]);

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
  }, [setDarkMode, setLightMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
