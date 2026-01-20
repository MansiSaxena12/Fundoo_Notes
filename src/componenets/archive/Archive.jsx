import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import NoteCard from "../notes/NotesCard";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export default function Archive() {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/archive")
    .then((res) => res.json())
    .then((data) => setArchivedNotes(data));
}, []);

  if (archivedNotes.length === 0) {
    return (
      <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#9e9e9e",
      }}
    >
      {/* Icon */}
      <ArchiveOutlinedIcon sx={{ fontSize: 96, mb: 2 }} />

      {/* Text */}
      <Typography variant="h5">
        Your archived notes appear here
      </Typography>
    </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {archivedNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </Box>
  );
}
