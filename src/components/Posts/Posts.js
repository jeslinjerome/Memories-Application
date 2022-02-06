import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setcurrentId }) => {
  const posts = useSelector((state) => state.posts); //in in reducers index.js we hav posts.
  const classes = useStyles();

  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="Stretch" spacing={3}>
          {posts.map((post)=> (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={ setcurrentId } />
              </Grid>
          ))}
      </Grid>
    )
  );      
};

export default Posts;
