import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  FooterSession: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "50px 64px",
    justifyContent: "space-around",
    borderTop: "1px solid darkgrey",
  },
  LeftSession: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
  },
  RightSession: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  BookIcon: {
    width: 50,
    height: 50,
  },
}));

export default useStyles;
