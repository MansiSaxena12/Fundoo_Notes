import * as React from "react";
import { Box, Paper, InputBase, IconButton, Typography, ClickAwayListener, TextField } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
// import NotesContainer from "./NotesContainer";
import { useState } from "react";
import ShowIcon from "./ShowIcon";
import { ResetTv } from "@mui/icons-material";
import Masonry from '@mui/lab/Masonry';

export default function Notes({ addNote }) {
  const [isExpanded, setExpanded] = useState(false);
  const [bgColor, setColor] = useState("#fff")
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => {
    if (!title && !content) {
      setTitle("");
    setContent("");
    setColor("#fff");
    setExpanded(false);
      return
    }

    addNote({
      // id: Date.now(),
      title,
      content,
      color: bgColor,
    });

    setTitle("");
    setContent("");
    setColor("#fff");
    setExpanded(false);
  }
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box sx={{ flexGrow: 1,
        display: "flex",
        justifyContent: "flex-start",
        pl: "120px",
       }}>
        <Paper
          elevation={5}
          sx={{
            width: 600,
            maxWidth: 900,    
            display: "flex",
            flexDirection: "column",
            px: 2,
            top: 20,
            left:20,
            bottom:1,
            borderRadius: 2,
            backgroundColor: bgColor,
            position:"relative"
          }}
        >
          {/* ───── TITLE (only when expanded) ───── */}
          {isExpanded && (
            <TextField
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true,
                sx:{backgroundColor:"inherit"}
               }}
              sx={{ mb: 1 }}
            />
          )}

          {/* ───── INPUT ROW ───── */}
          <Box sx={{ display: "flex", alignItems: "flex-sart" }}>
            <InputBase
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={() => setExpanded(true)}
              multiline
              placeholder="Take a note..."
              sx={{ flex: 1, fontSize: 18, backgroundColor:"inherit" }}
            />

            {/* Icons visible ONLY when collapsed */}
            {!isExpanded && (
              <>
                <IconButton>
                  <CheckBoxOutlinedIcon />
                </IconButton>
                <IconButton>
                  <BrushOutlinedIcon />
                </IconButton>
                <IconButton>
                  <ImageOutlinedIcon />
                </IconButton>
              </>
            )}
          </Box>


          {isExpanded && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <ShowIcon setColor={setColor} />

              <Typography component="span"
                onClick={handleClose}

                sx={{ cursor: "pointer", fontSize: 14, fontWeight: 500 }}
              >
                Close
              </Typography>
            </Box>
          )}
          {/* <PaintPallette setColor={(color)=>setColor(color)} selectedColor={bgColor} /> */}
        </Paper>
      </Box>
    </ClickAwayListener>
  );
}
