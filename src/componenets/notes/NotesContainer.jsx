import React, { useState } from "react";
import NoteCard from "./NotesCard";
import { Box } from "@mui/material";
import Notes from "./Notes";
import Masonry from '@mui/lab/Masonry';

export default function NotesContainer() {
  const [notes, setNotes] = useState([]);
  

  function addNote (note) {
    setNotes((prev) => [note,...prev]);
  };
const archiveNote = (noteToArchive) => {
  setNotes((prev) =>
    prev.filter((note) => note.id !== noteToArchive.id)
  );
   const stored = JSON.parse(localStorage.getItem("archiveNotes")) || [];
  localStorage.setItem(
    "archiveNotes",
    JSON.stringify([...stored, noteToArchive])
  );
  // for now just log or store it
  console.log("Archived:", noteToArchive);
};
  return (
    <Box sx={{width:"100%", maxWidth:"650px", px:2,}}>
      <Notes addNote={addNote} />

      <Masonry sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexDirection:"column",justifyContent: "flex-start",
    alignItems: "flex-start", maxWidth: "900px",mx: "auto",  mt: 2,px:3,ml:-30}}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} 
          onArchive={archiveNote} />
        ))}
      </Masonry>
    </Box>
  );
}
