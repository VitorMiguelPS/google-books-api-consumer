import React, { useState, useContext } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { ContextCommon } from "../../contexts/common";

import useStyles from "./styles";

function CreateAccount() {
  const classes = useStyles();
  const history = useHistory();

  const { usersList, setUsersList, setCurrentlyUser } =
    useContext(ContextCommon);

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function registerNewUser() {
    let existingAccount = false;

    for (let i in usersList) {
      if (usersList[i]?.user === user) {
        existingAccount = true;

        alert(
          "This account already exist. Please use other credentials or try login"
        );
        break;
      }
    }

    if (!existingAccount) {
      const newUser = {
        name: name,
        user: user,
        password: password,
        loged: true,
      };

      localStorage.setItem("loged-status", newUser.loged);
      localStorage.setItem("user-name", newUser.name);
      setUsersList([...usersList, newUser]);
      setCurrentlyUser([newUser]);
      history.push("/");
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.LoginSession}>
        <form noValidate autoComplete="off" className={classes.form}>
          <Typography className={classes.CreateTitle}>
            Create Account
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={() => registerNewUser()}
          >
            Let's go
          </Button>

          <Link to="/" className={classes.HomeLink}>
            Back to home
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}

export default CreateAccount;
