import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import WithoutImage from "../../../assets/images/without-image.png";
import MenuBar from "../../../components/MenuBar";

import { ContextCommon } from "../../../contexts/common";
import useStyles from "./styles";

function ReadingBooksPage() {
  const classes = useStyles();

  const { allSelectedBooks, setSelectedBook } = useContext(ContextCommon);

  return (
    <Grid container className={classes.root}>
      <MenuBar actPage={"ReadingBooks"} />

      <Grid className={classes.HeaderBooksList}>
        {allSelectedBooks?.length > 0 ? (
          <Typography variant="h2">Your current books</Typography>
        ) : (
          <Typography variant="h2">
            Currently you're not reading any book
          </Typography>
        )}
      </Grid>

      {allSelectedBooks.length > 0 && (
        <Grid className={classes.BodyBooksList}>
          {allSelectedBooks.map((item, index) => (
            <Grid
              key={index}
              className={classes.BookItem}
              component={Link}
              to="/details"
              onClick={() => {
                setSelectedBook(item);
              }}
            >
              <Grid className={classes.BookImgSession}>
                {item?.volumeInfo?.imageLinks?.thumbnail ? (
                  <img
                    className={classes.BookImg}
                    src={item?.volumeInfo.imageLinks?.thumbnail}
                    alt={item?.volumeInfo.title}
                  />
                ) : (
                  <img
                    className={classes.BookImg}
                    src={WithoutImage}
                    alt={item?.volumeInfo.title}
                  />
                )}
              </Grid>
              <Grid className={classes.BookInfos}>
                <Typography className={classes.BookTitle}>
                  {item.volumeInfo.title}
                </Typography>
                <Typography className={classes.BookAuthor}>
                  {item.volumeInfo.authors}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

export default ReadingBooksPage;
