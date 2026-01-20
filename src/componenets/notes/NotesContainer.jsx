import React, { useState } from "react";
import NoteCard from "./NotesCard";
import { Box } from "@mui/material";
import Notes from "./Notes";
import Masonry from '@mui/lab/Masonry';
// import PrimarySearchAppBar from "../header/navbar";
import { useTheme, useMediaQuery } from "@mui/material";
import { useOutletContext } from "react-router-dom";


export default function NotesContainer() {
  const [notes, setNotes] = useState([]);
  // const [view, setView] = useState("grid");
  const view=useOutletContext();
  console.log(view.view);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  const getColumns = () => {
    if (view.view === "list") return 1;
    // if (view === "grid") return 3;

    if (isMobile) return 1; 
    if (isTablet) return 3;  
    if (isLaptop) return 4;   

    return 3;
  };

  function addNote(note) {
    setNotes((prev) => [note, ...prev]);
  };
  const archiveNote = async (noteToArchive) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== noteToArchive.id)
    );
    const stored = JSON.parse(localStorage.getItem("archiveNotes")) || [];
    localStorage.setItem(
      "archiveNotes",
      JSON.stringify([...stored, noteToArchive])
    );
    console.log("Archived:", noteToArchive);
  };
  return (
    <Box sx={{ width: "100%", px: 2, }}>
      {/* <PrimarySearchAppBar
        // handleToggle={() => {
        //   console.log("In notes container")
        
        // }}
        handleToggleView={() =>
          setView((prev) => (prev === "grid" ? "list" : "grid"))
        }
        view={view}
      /> */}
      
      <Notes addNote={addNote} />

      <Masonry columns={view.view === "grid" ? 1 : 3 }
        spacing={2}
        sx={{
          mt: 2,
          width: "100%",
          alignItems: "flex-start"
        }}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note}
            onArchive={archiveNote}  />
        ))}
      </Masonry>
    </Box>
  );
}
