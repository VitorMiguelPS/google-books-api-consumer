import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  ReviewsDaySession: {
    width: "100%",
    margin: "60px 0",
    flexDirection: "column",
  },
  ReviewsDayTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    padding: "0 64px",
  },
  Title: {
    fontSize: "2.125rem",
  },
  MoreDetails: {
    fontSize: "0.875rem",
    textDecoration: "none",
    color: theme.appColors.link,
    padding: "8px 0",
    marginLeft: 10,
  },
  ReviewsDayVideos: {
    padding: "0 64px",
    marginTop: 20,
    height: 245,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ReviewVideo: {
    width: "33%",
    height: "100%",
  },
  ReviewVideoItem: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
