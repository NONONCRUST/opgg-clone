import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeButton: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      {isDarkMode && (
        <MdDarkMode size="20px" cursor="pointer" onClick={toggleDarkMode} />
      )}
      {!isDarkMode && (
        <MdLightMode size="20px" cursor="pointer" onClick={toggleDarkMode} />
      )}
    </>
  );
};

export default DarkModeButton;
