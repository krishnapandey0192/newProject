// src/components/CardList.js
import React from "react";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removePost } from "../store";

export const CardList = ({ posts, viewMode, currentPage }) => {
  const dispatch = useDispatch();
  const postsPerPage = 6;
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  return (
    <Grid container spacing={2}>
      {currentPosts.map((post) => (
        <Grid item xs={viewMode === "grid" ? 4 : 12} key={post.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                variant="h6"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // Limit to 1 line
                  WebkitBoxOrient: "vertical",
                }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // Limit to 1 line
                  WebkitBoxOrient: "vertical",
                }}
              >
                {post.body}
              </Typography>
              <IconButton
                onClick={() => dispatch(removePost(post.id))}
                color="error"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
