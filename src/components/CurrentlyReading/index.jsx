import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Book } from "@material-ui/icons";

import { ContextCommon } from "../../contexts/common";
import useStyles from "./styles";

function CurrentlyReading() {
  const classes = useStyles();

  const { selectedBook } = useContext(ContextCommon);

  return (
    <Grid container className={classes.CurrentlyReadingSession}>
      <Grid item className={classes.CurrentlyReadingTitle}>
        <Typography variant="h5" className={classes.Title}>
          Currently Reading
        </Typography>

        <Link to="/list/reading-books" className={classes.MoreDetails}>
          All
        </Link>
      </Grid>

      <Grid item className={classes.CurrentlyReadingBook}>
        {selectedBook?.volumeInfo ? (
          <Grid
            item
            className={classes.CurrentlyBook}
            component={Link}
            to="/details"
          >
            <Grid className={classes.CurrentlyBookImg}>
              <img
                src={selectedBook?.volumeInfo.imageLinks.thumbnail}
                alt={selectedBook?.volumeInfo.title}
              />
            </Grid>
            <Grid className={classes.CurrentlyBookDescription}>
              <Grid className={classes.CurrentlyBookDescriptionUp}>
                <Typography className={classes.CurrentlyBookTitle}>
                  {selectedBook?.volumeInfo.title}
                </Typography>
                <Typography className={classes.CurrentlyBookAuthor}>
                  by {selectedBook?.volumeInfo.authors.join(", ")}
                </Typography>
              </Grid>
              <Grid className={classes.CurrentlyBookDescriptionDown}>
                <Typography className={classes.CurrentlyBookChapter}>
                  <Book />
                  Chapter <em>2</em> From 9
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item className={classes.CurrentlyAnyBook}>
            <Typography variant="h4">
              It looks like you're not reading any books
            </Typography>
            <Typography>Try a book to enable this session</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default CurrentlyReading;
