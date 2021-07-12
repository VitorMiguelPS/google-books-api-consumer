import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

import MenuBar from "../../components/MenuBar";

import WithoutImage from "../../assets/images/without-image.png";
import { ContextCommon } from "../../contexts/common";
import useStyles from "./styles";

function ListPage() {
  const classes = useStyles();

  const [booksList, setBooksList] = useState([]);

  const { searchTerm, setSelectedBook, setAllSelectedBooks, allSelectedBooks } =
    useContext(ContextCommon);

  const addReadingBook = (book) => {
    let existingBook = false;

    if (allSelectedBooks.length > 0) {
      for (let i in allSelectedBooks) {
        if (book.volumeInfo.title === allSelectedBooks[i].volumeInfo.title) {
          existingBook = true;
          break;
        }
      }
    } else {
      setAllSelectedBooks([...allSelectedBooks, book]);
    }

    if (!existingBook) {
      setAllSelectedBooks([...allSelectedBooks, book]);
    }
  };

  useEffect(() => {
    const getBooksList = async () => {
      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        const res = await axios.get(url);

        setBooksList(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getBooksList();
  }, [searchTerm]);

  return (
    <Grid container className={classes.root}>
      <MenuBar actPage={"List"} />

      <Grid className={classes.HeaderSearchedTerm}>
        {booksList?.totalItems > 0 ? (
          <>
            <Typography variant="h4">{`There's ${booksList.totalItems} results for`}</Typography>
            <Typography variant="h2">
              <em className={classes.SearchedTerm}>{searchTerm}</em>
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4">{`There's any results for`}</Typography>
            <Typography variant="h2">
              <em className={classes.SearchedTerm}>{searchTerm}</em>
            </Typography>
          </>
        )}
      </Grid>

      {booksList?.totalItems > 0 && (
        <Grid className={classes.BodyBooksList}>
          {booksList.items.map((item, index) => (
            <Grid
              key={index}
              className={classes.BookItem}
              component={Link}
              to="/details"
              onClick={() => {
                setSelectedBook(item);
                addReadingBook(item);
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

export default ListPage;
