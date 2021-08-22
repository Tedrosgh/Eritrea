import React from "react";
import Post from "./Post/Post";
import useStyles from "./stylesAllPosts";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";

const AllPosts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllPosts;
