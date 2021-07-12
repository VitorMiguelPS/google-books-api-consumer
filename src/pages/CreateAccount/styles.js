import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.appColors.backgroundColor,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  LoginSession: {
    display: "flex",
    flexDirection: "column",
    background: theme.appColors.whiteColor,
    zIndex: 1,
    height: 450,
    width: 350,
    padding: 35,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  CreateTitle: {
    textAlign: "center",
  },
  submit: {
    alignSelf: "flex-end",
    marginTop: 10,

    "& span": {
      color: theme.appColors.whiteColor,
    },
  },
  HomeLink: {
    float: "right",
    marginTop: 5,
  },
}));

export default useStyles;
