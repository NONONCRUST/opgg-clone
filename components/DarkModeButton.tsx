import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useDarkMode from "@hooks/useDarkMode";
import { blue } from "@styles/palette";

const DarkModeButton: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      {isDarkMode && (
        <MdDarkMode
          size="20px"
          color={blue[200]}
          cursor="pointer"
          onClick={toggleDarkMode}
        />
      )}
      {!isDarkMode && (
        <MdLightMode
          size="20px"
          color={blue[200]}
          cursor="pointer"
          onClick={toggleDarkMode}
        />
      )}
    </>
  );
};

export default DarkModeButton;
