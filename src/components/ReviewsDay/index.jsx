import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";

import useStyles from "./styles";

function ReviewsDay() {
  const classes = useStyles();

  const [videosResult, setVideosResult] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const apiKey = process.env.REACT_APP_API_YOUTUBE;
      const searchTerm = "review+book";
      const qtdResults = "3";

      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet
        &key=${apiKey}&type=video&q=${searchTerm}&maxResults=${qtdResults}`;
        const res = await axios.get(url);

        setVideosResult(res.data.items);
      } catch (e) {
        console.log(e);
      }
    };

    getVideos();
  }, []);

  return (
    <Grid container className={classes.ReviewsDaySession}>
      <Grid item className={classes.ReviewsDayTitle}>
        <Typography variant="h5" className={classes.Title}>
          Reviews of the Days
        </Typography>

        <a
          href="https://www.youtube.com/results?search_query=review+book"
          target="_blank"
          rel="noreferrer"
          className={classes.MoreDetails}
        >
          All Videos
        </a>
      </Grid>

      {videosResult && (
        <Grid item className={classes.ReviewsDayVideos}>
          {videosResult.map((item, index) => (
            <Grid item key={index} className={classes.ReviewVideo}>
              <iframe
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title={item.snippet.title}
                frameBorder={0}
                allowFullScreen
                className={classes.ReviewVideoItem}
              ></iframe>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

export default ReviewsDay;
