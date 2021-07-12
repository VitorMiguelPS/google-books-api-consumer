import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  ProfileSession: {
    display: "inline",
    width: "100%",
    padding: "0 16px",

    [theme.breakpoints.up("sm")]: {
      padding: "0 24px",
    },

    "& img": {
      width: 24,
      float: "right",
    },
    "& p": {
      float: "right",
      marginRight: 10,
    },
    "& a": {
      float: "right",
      textDecoration: "none",
      color: "inherit",
      "& svg": {
        float: "right",
      },
    },
  },
  NameUser: {
    color: theme.appColors.userLink,
    fontStyle: "inherit",
  },
  Logout: {
    fontSize: "0.875rem",
    color: theme.appColors.link,
    marginLeft: 10,
    cursor: "pointer",
  },
}));

export default useStyles;
