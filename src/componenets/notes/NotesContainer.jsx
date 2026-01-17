import React, { useState } from "react";
// import NotesEmpty from "./Notes";
import NoteCard from "./NotesCard";
import { Box } from "@mui/material";
import Notes from "./Notes";

export default function NotesContainer() {
  const [notes, setNotes] = useState([]);
  

  function addNote (note) {
    console.log("fghjk", note)
    setNotes((prev) => [...prev, note]);
  };

  return (
    <Box >
      <Notes addNote={addNote} />

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </Box>
    </Box>
  );
}
