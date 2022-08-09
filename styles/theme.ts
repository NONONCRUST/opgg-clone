import { Theme } from "@emotion/react";
import palette from "./palette";

export const theme = {
  primary: palette.blue[500],
  primaryVariant: palette.blue[600],
  primaryDimmed: palette.blue[400],
  primarySemiLight: palette.blue[100],
  primaryLight: palette.blue[50],
  secondary: palette.purple[500],
  secondaryVariant: palette.purple[600],
  error: palette.red[500],
  errorVariant: palette.red[600],
  errorLight: palette.red[50],
  success: palette.green[500],
  successVariant: palette.green[600],
  text: {
    primary: palette.gray[900],
    secondary: palette.gray[500],
    tertiary: palette.gray[300],
  },

  elevation1:
    "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
  elevation2:
    "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",

  elevation3:
    "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",

  elevation4:
    "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
  elevation6:
    "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
  elevation8:
    "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px",
  elevation12:
    "rgb(0 0 0 / 20%) 0px 7px 8px -4px, rgb(0 0 0 / 14%) 0px 12px 17px 2px, rgb(0 0 0 / 12%) 0px 5px 22px 4px",
  elevation16:
    "rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px",
  elevation24:
    "rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px",

  media: {
    tablet: "48rem", // 768px
    desktop: "64rem", // 1024px
  },
};

export const lightTheme: Theme = {
  mode: "light",
};

export const darkTheme: Theme = {
  mode: "dark",
};
