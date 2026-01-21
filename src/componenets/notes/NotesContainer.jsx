import React, { useState, useEffect } from "react";
import NoteCard from "./NotesCard";
import { Box } from "@mui/material";
import Notes from "./Notes";
import Masonry from '@mui/lab/Masonry';
// import PrimarySearchAppBar from "../header/navbar";
import { useTheme, useMediaQuery } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { getNotes,archiveNoteApi } from "../../api/axios";
import Archive from "../archive/Archive";

export default function NotesContainer() {
  const [notes, setNotes] = useState([]);
  // const [view, setView] = useState("grid");
  const view=useOutletContext();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  const getColumns = () => {
    if (view.view === "grid") return 1;
    // if (view === "grid") return 3;

    if (isMobile) return 1; 
    if (isTablet) return 3;  
    if (isLaptop) return 4;   

    return 3;
  };

    const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

    useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    const { addNoteApi } = await import("../../api/axios");
    await addNoteApi(note);
    fetchNotes();
  };
  const archiveNote = async (note) => {
    await archiveNoteApi(note.id);
    fetchNotes();
  };
  return (
    <Box sx={{ width: "100%", px: 2, }}>
      
      
      <Notes addNote={addNote} />

      <Masonry
        columns={view.view === "grid" ? 1:getColumns()}
        spacing={2}
        sx={{ mt: 2 }}
      >
        {notes
          .filter((note) => !note.archived)
          .map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onArchive={() => archiveNote(note)}
            />
          ))}
      </Masonry>
    </Box>
  );
}
