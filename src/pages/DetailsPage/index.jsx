import React, { useContext } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { ImportContacts, Headset, Share, ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import MenuBar from "../../components/MenuBar";
import FooterBar from "../../components/FooterBar";

import useStyles from "./styles";
import { ContextCommon } from "../../contexts/common";

function DetailsPage() {
  const classes = useStyles();
  const history = useHistory();

  const { selectedBook } = useContext(ContextCommon);

  return (
    <Grid container className={classes.root}>
      <MenuBar actPage={"Details"} />

      <Grid className={classes.BackIconSession}>
        <Button onClick={() => history.goBack()}>
          <ArrowBack />
        </Button>
      </Grid>

      <Grid item className={classes.HeaderDetailsSession}>
        <img
          src={selectedBook?.volumeInfo.imageLinks.thumbnail}
          alt={selectedBook.volumeInfo.title}
          className={classes.ImgBook}
        />

        <Grid className={classes.HeaderBookDetails}>
          <Typography className={classes.BookTitle}>
            {selectedBook.volumeInfo.title}
          </Typography>

          {selectedBook?.volumeInfo.authors.length <= 1 ? (
            <Typography className={classes.CurrentlyBookAuthor}>
              {selectedBook?.volumeInfo.authors}
            </Typography>
          ) : (
            selectedBook?.volumeInfo.authors.map((item, index) => (
              <Typography className={classes.CurrentlyBookAuthor} key={index}>
                {item}
              </Typography>
            ))
          )}
        </Grid>

        <Grid className={classes.HeaderDetailsOptions}>
          <Button className={classes.ReadButton}>
            <ImportContacts />
            Read
          </Button>

          <Button className={classes.ListenButton}>
            <Headset />
            Listen
          </Button>

          <Button className={classes.ShareButton}>
            <Share />
            Share
          </Button>
        </Grid>
      </Grid>

      <Grid item className={classes.BodyDetailsSession}>
        <Typography className={classes.DescriptionSession}>
          {selectedBook.volumeInfo.description}
        </Typography>
      </Grid>

      <FooterBar />
    </Grid>
  );
}

export default DetailsPage;
