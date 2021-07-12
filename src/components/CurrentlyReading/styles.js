import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  CurrentlyReadingSession: {
    width: "100%",
    marginTop: 60,
    flexDirection: "column",
  },
  CurrentlyReadingTitle: {
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
  CurrentlyBook: {
    padding: "25px 64px",
    background: "#EEF5DB",
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    color: "inherit",
  },
  CurrentlyAnyBook: {
    padding: "0 64px",
    marginTop: 20,
    height: 218,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  CurrentlyBookDescription: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  CurrentlyBookTitle: {
    fontFamily: theme.titleBooks.fontFamily,
    fontSize: 40,
  },
  CurrentlyBookAuthor: {
    color: "#74776D",
  },
  CurrentlyBookChapter: {
    display: "flex",
    alignItems: "center",

    "& svg": {
      color: "#9013FE",
    },

    "& em": {
      fontStyle: "normal",
      color: theme.appColors.userLink,
      margin: "0 5px",
    },
  },
}));

export default useStyles;
