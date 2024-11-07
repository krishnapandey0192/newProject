// src/components/ViewToggle.js
import React from "react";
import { Button, Box, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleViewMode } from "../store";

export const ViewToggle = ({ viewMode }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="start" my={2}>
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
            view Toggle
          </Typography>

          <Button
            variant="contained"
            onClick={() => dispatch(toggleViewMode())}
          >
            Switch to {viewMode === "grid" ? "List" : "Grid"} View
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
