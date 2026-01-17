import * as React from "react";
import { Box, Paper, InputBase, IconButton, Typography, ClickAwayListener, TextField } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
// import NotesContainer from "./NotesContainer";
import { useState } from "react";
import ShowIcon from "./ShowIcon";

export default function Notes({ addNote }) {
  // console.log("addNote prop:", typeof addNote);
  const [isExpanded, setExpanded] = useState(false);
  const [bgColor, setColor] = useState("#fff")
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => {
    if (!title && !content) {
      setExpanded(false)
      return alert("Title and content is required");
    }

    addNote({
      id: Date.now(),
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
      <Box sx={{ flexGrow: 1 }}>
        <Paper
          elevation={5}
          sx={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 1,
            borderRadius: 2,
            mt: -30,
            ml: -20,
            backgroundColor: bgColor
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
              InputProps={{ disableUnderline: true }}
              sx={{ mb: 1 }}
            />
          )}

          {/* ───── INPUT ROW ───── */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputBase
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={() => setExpanded(true)}
              placeholder="Take a note..."
              sx={{ flex: 1, fontSize: 18 }}
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

              <Typography
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
