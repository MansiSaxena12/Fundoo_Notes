import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import ShowIcon from "./ShowIcon";

export default function NoteCard({ note, onArchive }) {
    const [bgColor, setColor] = useState(note.color||"#fff")
  
   const [hover, setHover] = useState(false);
  return (
    <Paper
      elevation={4}
      sx={{
        width: 250,
        p: 2,
        pb:7,
        pr:30,
        // marginTop:12,
        borderRadius: 2,
        backgroundColor: bgColor,
        position:"relative",
        top:50,
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography fontWeight={600}  variant="h6">{note.title}</Typography>
      <Typography variant="body2" sx={{whiteSpace:"pre-wrap", fontSize:14}}>{note.content}</Typography>

      {hover && (
        <Box sx={{ position: "absolute", bottom: 4, left: 4, right: 4 }}>
          <ShowIcon
            setColor={(color)=>setColor(color)} selectedColor={bgColor}
            onArchive={() => onArchive(note)}
          />
        </Box>
      )}
    </Paper>
  );
}
