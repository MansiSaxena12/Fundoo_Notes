import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import ShowIcon from "./ShowIcon";

export default function NoteCard({ note, onArchive }) {
   const [hover, setHover] = useState(false);
  return (
    <Paper
      elevation={4}
      sx={{
        width: 250,
        p: 2,
        pb:10,
        borderRadius: 2,
        backgroundColor: note.color,
        position:"relative"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography fontWeight={600} variant="h6">{note.title}</Typography>
      <Typography variant="body2">{note.content}</Typography>

      {hover && (
        <Box sx={{ position: "absolute", bottom: 4, left: 4, right: 4 }}>
          <ShowIcon
            setColor={() => {}}
            onArchive={() => onArchive(note)}
          />
        </Box>
      )}
    </Paper>
  );
}
