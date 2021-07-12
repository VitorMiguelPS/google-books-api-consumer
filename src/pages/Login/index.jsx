import React, { useState, useContext } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { ContextCommon } from "../../contexts/common";

import useStyles from "./styles";

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const { setCurrentlyUser, usersList } = useContext(ContextCommon);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function checkLoginCredentials() {
    let validUser = false;

    if (usersList.length) {
      for (let i in usersList) {
        if (user === usersList[i].user && password === usersList[i].password) {
          setCurrentlyUser([usersList[i]]);
          validUser = true;
          history.push("/");
          break;
        }
      }
      if (!validUser) {
        alert(
          "Something gone wrong with your credentials. Please review your User Name and Password"
        );
      }
    } else {
      alert(
        "Something gone wrong with your credentials. Please review your User Name and Password"
      );
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.LoginSession}>
        <form noValidate autoComplete="off" className={classes.form}>
          <Typography className={classes.LoginTitle}>Login</Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            id="user"
            label="User Name"
            name="user"
            autoFocus
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => checkLoginCredentials()}
          >
            Let's go
          </Button>

          <Typography component={Link} to="/" className={classes.HomeLink}>
            Back to home
          </Typography>
        </form>

        <Grid item className={classes.CreateAccount}>
          <Typography>Don't have an account?</Typography>
          <Typography component={Link} to="/create-account">
            Create an account
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
