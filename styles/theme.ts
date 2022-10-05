import { Theme } from "@emotion/react";
import { rem } from "polished";
import { green, purple, red } from "@styles/palette";

type ThemeType = {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  error: string;
  errorVariant: string;
  success: string;
  successVariant: string;
  fontSize: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    subtitle4: string;
    body1: string;
    body2: string;
    body3: string;
    caption1: string;
    caption2: string;
    caption3: string;
  };
  lineHeight: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    subtitle4: string;
    body1: string;
    body2: string;
    body3: string;
    caption1: string;
    caption2: string;
    caption3: string;
  };
  elevation1: string;
  elevation2: string;
  elevation3: string;
  elevation4: string;
  elevation6: string;
  elevation8: string;
  elevation12: string;
  elevation16: string;
  elevation24: string;
  media: {
    tablet: string;
    desktop: string;
  };
};

export const theme: ThemeType = Object.freeze({
  primary: "#5383E8",
  primaryVariant: "#4271D6",
  secondary: purple[500],
  secondaryVariant: purple[600],
  error: red[500],
  errorVariant: red[600],
  success: green[500],
  successVariant: green[600],
  fontSize: {
    heading1: rem(72),
    heading2: rem(60),
    heading3: rem(54),
    heading4: rem(42),
    subtitle1: rem(32),
    subtitle2: rem(26),
    subtitle3: rem(20),
    subtitle4: rem(18),
    body1: rem(18),
    body2: rem(16),
    body3: rem(15),
    caption1: rem(14),
    caption2: rem(13),
    caption3: rem(12),
  },
  lineHeight: {
    heading1: rem(90),
    heading2: rem(80),
    heading3: rem(73),
    heading4: rem(57),
    subtitle1: rem(48),
    subtitle2: rem(39),
    subtitle3: rem(31),
    subtitle4: rem(28),
    body1: rem(30),
    body2: rem(28),
    body3: rem(26),
    caption1: rem(24),
    caption2: rem(22),
    caption3: "auto",
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
    tablet: rem(768),
    desktop: rem(1024),
  },
});

export const lightTheme: Theme = {
  mode: "light",
};

export const darkTheme: Theme = {
  mode: "dark",
};
