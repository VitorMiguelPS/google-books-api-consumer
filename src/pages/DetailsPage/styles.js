import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  HeaderDetailsSession: {
    background: theme.appColors.headerBookBackground,
    width: "100%",
    padding: "0 64px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "0 0 6rem 0",
  },
  BackIconSession: {
    background: theme.appColors.headerBookBackground,
    padding: "0 64px",
    width: "100%",
  },
  BodyDetailsSession: {
    width: "100%",
    padding: "0 64px",
  },
  BookTitle: {
    fontSize: "2.5rem",
    marginBottom: 7,
  },
  CurrentlyBookAuthor: {
    fontSize: "1.5rem",
    color: theme.appColors.userLink,
  },
  DescriptionSession: {
    marginTop: 90,
    marginBottom: 50,
    fontSize: "1.2rem",
    color: "#31313199",
  },
  ImgBook: {
    position: "relative",
    top: 45,
    width: 200,
    boxShadow: "0 0 15px -5px black",
  },
  HeaderBookDetails: {
    marginLeft: 50,
  },
  HeaderDetailsOptions: {
    background: theme.appColors.whiteColor,
    height: 42,
    minWidth: 280,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0 0 15px -5px black",
    alignSelf: "flex-end",
    position: "absolute",
    right: 64,

    "& svg": {
      color: "#CFCBD2",
      marginRight: 5,
    },
  },
  ListenButton: {
    borderLeft: "1px solid rgba(151, 151, 151, 0.2)",
    borderRight: "1px solid rgba(151, 151, 151, 0.2)",
  },
}));

export default useStyles;
