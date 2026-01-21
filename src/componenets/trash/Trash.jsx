import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useTheme, useMediaQuery } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import NoteCard from "../notes/NotesCard";
import { getNotes, restoreNoteApi, archiveNoteApi } from "../../api/axios";

export default function Trash() {
  const [notes, setNotes] = useState([]);
  const view = useOutletContext();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

  const getColumns = () => {
    if (view.view === "grid") return 1;
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

  const restoreNote = async (note) => {
    await restoreNoteApi(note.id);
    fetchNotes();
  };
    const archiveNote = async (note) => {
    await archiveNoteApi(note.id);
    fetchNotes();
  };

  return (
    
    <Box sx={{ width: "100%", px: 2 }}>
      <Masonry
        columns={view.view === "grid" ? 1 : getColumns()}
        spacing={2}
        sx={{ mt: 2 }}
      >
        {notes 
          .filter(note => note.trash === true && !note.archive)
          .map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onArchive={() => archiveNote(note)}
              onTrash={() => restoreNote(note)} 
              refreshNotes={fetchNotes}
            />
          ))}
      </Masonry>
    </Box>
  );
}
