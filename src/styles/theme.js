import { createTheme } from "@material-ui/core";

export const primaryColor = "#00173D";
export const secondaryColor = "#FFF6E5";
export const link = "#4ABDF1";
export const userLink = "#ff6978";
export const whiteColor = "#fff";
export const backgroundColor = "#f2f2f2";
export const headerBookBackground = "#FFF6E5";
export const textColor = "#313131";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  appColors: {
    link,
    userLink,
    whiteColor,
    backgroundColor,
    headerBookBackground,
  },
  typography: {
    fontFamily: [
      "SFProDisplay-Regular",
      "SFProDisplay-Bold",
      "SFProDisplay-Light",
      "SFProDisplay-Medium",
    ].join(","),
    color: textColor,
  },
  titleBooks: {
    fontFamily: "PlayfairDisplay-Regular",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
