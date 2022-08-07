import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setLightMode = () => {
    window.localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  };

  const setDarkMode = () => {
    window.localStorage.setItem("theme", "light");
    setIsDarkMode(true);
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
