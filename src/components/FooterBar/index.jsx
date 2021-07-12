import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MenuBook } from "@material-ui/icons";

import useStyles from "./styles";

function FooterBar() {
  const classes = useStyles();

  return (
    <footer className={classes.FooterSession}>
      <Grid className={classes.LeftSession} component={Link} to="/">
        <MenuBook className={classes.BookIcon} />
        <Typography variant="h4" className={classes.Title}>
          Books by Vitor
        </Typography>
      </Grid>
      <Grid className={classes.RightSession}>
        <Button
          href="https://github.com/VitorMiguelPS"
          target="_blank"
          color="inherit"
        >
          Github
        </Button>

        <Button
          href="https://www.linkedin.com/in/vitor-mp-silva/"
          target="_blank"
          color="inherit"
        >
          LinkedIn
        </Button>

        <Button
          href="mailto:vitortitom@gmail.com"
          target="_blank"
          color="inherit"
        >
          E-mail
        </Button>
      </Grid>
    </footer>
  );
}

export default FooterBar;
