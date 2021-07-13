import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";

import { ContextCommon } from "../../contexts/common";
import useStyles from "./styles";

import FooterBar from "../../components/FooterBar";
import ReviewsDay from "../../components/ReviewsDay";
import CurrentlyReading from "../../components/CurrentlyReading";
import NewBooks from "../../components/NewBooks";
import MenuBar from "../../components/MenuBar";

import WavingHand from "../../assets/images/waving-hand.png";

function HomePage() {
  const classes = useStyles();

  const { currentlyUser, setCurrentlyUser } = useContext(ContextCommon);

  return (
    <Grid container className={classes.root}>
      <MenuBar actPage={"Home"} />

      <Grid item className={classes.ProfileSession}>
        {currentlyUser || localStorage.getItem("loged-status") ? (
          <>
            <Typography
              className={classes.Logout}
              onClick={() => {
                setCurrentlyUser(false);
                localStorage.removeItem("loged-status");
                localStorage.removeItem("user-name");
              }}
            >
              Logout
            </Typography>
            <img src={WavingHand} alt="Salutation" />
            <Typography>
              {"Hi, "}
              <em className={classes.NameUser}>
                {currentlyUser[0]?.name || localStorage.getItem("user-name")}
              </em>
            </Typography>
          </>
        ) : (
          <>
            <Grid component={Link} to="/login">
              <AccountCircle />
              <Typography>Hey, Sign in</Typography>
            </Grid>
          </>
        )}
      </Grid>

      <Grid container className={classes.BodySession}>
        <NewBooks />

        <CurrentlyReading />

        <ReviewsDay />
      </Grid>

      <FooterBar />
    </Grid>
  );
}

export default HomePage;
