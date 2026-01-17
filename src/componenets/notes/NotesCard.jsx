import React from "react";
import { Paper, Typography } from "@mui/material";

export default function NoteCard({ note }) {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 250,
        p: 2,
        borderRadius: 2,
        backgroundColor: note.color,
      }}
    >
      <Typography fontWeight={600}>{note.title}</Typography>
      <Typography variant="body2">{note.content}</Typography>
    </Paper>
  );
}
