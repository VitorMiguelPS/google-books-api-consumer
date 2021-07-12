import { makeStyles } from "@material-ui/styles";
import FirstStructure from "../../assets/images/first-structure-HomeProduct.png";
import SecondStructure from "../../assets/images/second-structure-HomeProduct.png";

const useStyles = makeStyles((theme) => ({
  NewBookSession: {
    width: "100%",
    marginTop: 60,
    flexDirection: "column",
    padding: "0 64px",
  },
  NewBookTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
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
  NewBookList: {
    marginTop: 15,
    maxWidth: "100%",
  },
  SlickClass: {
    "& .slick-arrow": {
      zIndex: 1,

      "&.slick-prev": {
        left: -25,
        "&::before": {
          color: theme.palette.primary.main,
        },
      },
      "&.slick-next": {
        right: -25,
        "&::before": {
          color: theme.palette.primary.main,
        },
      },
    },
    "& .slick-list": {
      textAlign: "center",
    },
  },
  SlickItem: {
    width: "95% !important",
    textDecoration: "none",

    "&::after": {
      content: "''",
      backgroundImage: `url(${FirstStructure})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundPositionX: "initial",
      width: 115,
      height: 115,
      position: "absolute",
      display: "block",
      bottom: 0,
      borderRadius: 20,
    },
  },
  BookItem: {
    fontSize: "0.875rem",
    padding: "10px 20px",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& svg": {
      width: "1.0em",
      height: "1.0em",
    },
  },
  BookDescription: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    textAlign: "left",
    height: 198,
    justifyContent: "space-around",
    zIndex: 1,

    "& p": {
      color: theme.appColors.whiteColor,
    },
  },
  BookName: {
    fontFamily: theme.titleBooks.fontFamily,
    fontSize: "1.3rem",
    paddingRight: 15,
  },
  AuthorName: {
    fontSize: "0.875rem",
    fontStyle: "italic",
  },
  BookImgAssets: {
    position: "relative",
    left: -45,
    top: -15,

    "&::before": {
      content: '""',
      backgroundImage: `url(${SecondStructure})`,
      backgroundRepeat: "no-repeat",
      display: "block",
      position: "absolute",
      width: 128,
      height: 178,
    },
  },
  BookImg: {
    width: 128,
    height: 178,
    borderRadius: 7,
  },
}));

export default useStyles;
