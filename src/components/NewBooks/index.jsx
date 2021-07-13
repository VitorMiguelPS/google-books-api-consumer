import React, { useEffect, useState, useContext, memo } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WithoutImage from "../../assets/images/without-image.png";
import { ContextCommon } from "../../contexts/common";
import useStyles from "./styles";

function NewBooks() {
  const classes = useStyles();

  const [discoverBooks, setDiscoverBooks] = useState([]);

  const {
    setSelectedBook,
    setAllSelectedBooks,
    allSelectedBooks,
    setSearchTerm,
  } = useContext(ContextCommon);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: window.innerWidth >= 1920 ? 5 : 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const colorGenerator = () => {
    const opacity = 1;
    const r = Math.random() * (183 - 82) + 82;
    const g = Math.random() * (183 - 82) + 82;
    const b = Math.random() * (183 - 82) + 82;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

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
        const url = `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=15`;
        const res = await axios.get(url);

        setDiscoverBooks(res.data.items);
      } catch (e) {
        console.log(e);
      }
    };

    getBooksList();
  }, []);

  return (
    <Grid container className={classes.NewBookSession}>
      <Grid item className={classes.NewBookTitle}>
        <Typography variant="h5" className={classes.Title}>
          Discover new book
        </Typography>

        <Link
          to="/list"
          className={classes.MoreDetails}
          onClick={() => setSearchTerm("javascript")}
        >
          More
        </Link>
      </Grid>

      {discoverBooks && (
        <Grid item className={classes.NewBookList}>
          <Slider {...settings} className={classes.SlickClass}>
            {discoverBooks?.map((item, index) => (
              <Grid
                key={index}
                className={classes.SlickItem}
                component={Link}
                to="/details"
                onClick={() => {
                  setSelectedBook(item);
                  addReadingBook(item);
                }}
              >
                <Paper
                  elevation={0}
                  className={classes.BookItem}
                  style={{ background: colorGenerator() }}
                >
                  <Grid className={classes.BookDescription}>
                    <Grid className={classes.BookDescriptionUp}>
                      <Typography className={classes.BookName}>
                        {item?.volumeInfo.title}
                      </Typography>
                      <Typography className={classes.AuthorName}>
                        {item?.volumeInfo.authors.join(", ")}
                      </Typography>
                    </Grid>
                    <Grid className={classes.BookDescriptionDown}>
                      <Typography>120+ Read Now</Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <span className={classes.BookImgAssets}></span>
                    {item?.volumeInfo.imageLinks?.thumbnail ? (
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
                </Paper>
              </Grid>
            ))}
          </Slider>
        </Grid>
      )}
    </Grid>
  );
}

export default memo(NewBooks);
