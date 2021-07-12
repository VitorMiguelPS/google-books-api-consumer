import { makeStyles } from "@material-ui/styles";
import { alpha } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  HeaderMenu: {
    boxShadow: "none",
  },
  ToolBar: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  Title: {
    marginLeft: 10,
  },
  Search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  SearchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  InputRoot: {
    color: "inherit",
  },
  InputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderRadius: 10,
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },

    "&:focus": {
      boxShadow: "0 0 15px -5px black",
    },
  },
}));

export default useStyles;
