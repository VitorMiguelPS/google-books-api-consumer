import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  HeaderSearchedTerm: {
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    padding: "0 64px",
  },
  SearchedTerm: {
    marginLeft: 5,
    fontStyle: "normal",
    color: theme.appColors.userLink,
    textTransform: "uppercase",
  },
  BooksResult: {
    width: "100%",
    padding: "0 64px",
    marginTop: 50,
  },
  BodyBooksList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
  },
  BookItem: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  BookImg: {
    width: 200,
    height: 278,
    marginBottom: 10,
    boxShadow: "0 0 30px -20px black",
    borderRadius: 7,
  },
  BookInfos: {
    width: 250,
  },
  BookTitle: {
    fontSize: 20,
  },
  BookAuthor: {
    fontSize: 15,
  },
  FooterBooksList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 100,
    marginTop: 50,
  },
  BackButton: {
    margin: "0 10px",
  },
  NextButton: {
    margin: "0 10px",
  },
  submit: {
    "& span": {
      color: theme.appColors.whiteColor,
    },
  },
}));

export default useStyles;
