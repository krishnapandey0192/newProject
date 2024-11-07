// src/components/FeedbackForm.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", feedback: "" });
  };

  return (
    <Box mt={2}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        // fullWidth
        margin="normal"
      />
      <TextField
        label="Feedback"
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {submitted && (
        <Typography color="success.main" mt={2}>
          Feedback submitted!
        </Typography>
      )}
    </Box>
  );
};
