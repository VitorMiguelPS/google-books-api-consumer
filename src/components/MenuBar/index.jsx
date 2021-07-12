import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  InputBase,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { MenuBook, Search } from "@material-ui/icons";

import { ContextCommon } from "../../contexts/common";
import useStyles from "./styles";

function MenuBar(props) {
  const classes = useStyles();
  const history = useHistory();

  const { setSearchTerm } = useContext(ContextCommon);

  const verifyEnter = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
      history.push("/list");
    }
  };

  return (
    <AppBar
      position="static"
      color={props.actPage === "Details" ? "secondary" : "transparent"}
      className={classes.HeaderMenu}
    >
      <Toolbar className={classes.ToolBar}>
        <Grid container alignItems="center" component={Link} to="/">
          <MenuBook />
          <Typography variant="h6" className={classes.Title}>
            Books by Vitor
          </Typography>
        </Grid>

        <Grid container alignItems="center" justifyContent="flex-end">
          <div className={classes.Search}>
            <div className={classes.SearchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search book…"
              classes={{
                root: classes.InputRoot,
                input: classes.InputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onKeyPress={(e) => verifyEnter(e)}
            />
          </div>

          <Button color="inherit">Librares</Button>

          <Button color="inherit">Profile</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
