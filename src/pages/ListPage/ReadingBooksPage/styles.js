import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  HeaderBooksList: {
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    padding: "0 64px",
  },
  BodyBooksList: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
    padding: "0 64px",
    marginTop: 50,
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
}));

export default useStyles;
