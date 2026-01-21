import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import ShowIcon from "./ShowIcon";

export default function NoteCard({ note, onArchive, isGrid = true }) {
  const [bgColor, setColor] = useState(note.color || "#fff");
  const [hover, setHover] = useState(false);

  return (
    <Paper
      elevation={4}
      sx={{
        width: isGrid ? 250 : "60%", 
        p: 2,
        pb: 7,
        borderRadius: 2,
        backgroundColor: bgColor,
        position: "relative",
        top: 50,
        display: "flex",
        flexDirection: "column",

        
        wordBreak: "break-word",
        overflowWrap: "anywhere",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* TITLE */}
      <Typography
        fontWeight={600}
        variant="h6"
        sx={{
          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {note.title}
      </Typography>

      {/* CONTENT */}
      <Typography
        variant="body2"
        sx={{
          fontSize: 14,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "anywhere",

          display: isGrid ? "-webkit-box" : "block",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isGrid ? 5 : "none", // grid shows 5 lines
          overflow: isGrid ? "hidden" : "visible",
        }}
      >
        {note.content}
      </Typography>

      {hover && (
        <Box sx={{ position: "absolute", bottom: 4, left: 4, right: 4 }}>
          <ShowIcon
            setColor={(color) => setColor(color)}
            selectedColor={bgColor}
            onArchive={() => onArchive}
          />
        </Box>
      )}
    </Paper>
  );
}
