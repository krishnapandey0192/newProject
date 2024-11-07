// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./store";
import { CardList } from "./components/CardList";
import { Pagination } from "./components/Pagination";
import { ViewToggle } from "./components/ViewToggle";
import { FeedbackForm } from "./components/FeedbackForm";
import {
  CircularProgress,
  Grid,
  Box,
  Container,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const {
    data: posts,
    viewMode,
    currentPage,
  } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(setPosts(data));
      setLoading(false);
    }, 5000);
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box display="flex" flexDirection="column" gap={2}>
                <ViewToggle viewMode={viewMode} />

                {/* Feedback Card */}
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      We Are Listening
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setShowFeedbackForm(!showFeedbackForm)}
                      // fullWidth
                    >
                      {showFeedbackForm
                        ? "Hide Feedback Form"
                        : "Have Feedback?"}
                    </Button>
                    {showFeedbackForm && <FeedbackForm />}
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Main Content Area */}
            <Grid item xs={12} md={8}>
              <CardList
                posts={posts}
                viewMode={viewMode}
                currentPage={currentPage}
              />
              <Pagination />
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default App;
