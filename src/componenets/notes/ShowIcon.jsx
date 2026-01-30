import { Box, IconButton, Popover, Tooltip } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PaintPallette from "./PaintPallette";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { updateNoteColorApi } from "../../api/axios";
import React, { useState } from "react";

export default function ShowIcon({ note, onArchive,onTrash, refreshNotes,onArchiveDraft, onColorDraft,  }) {
  const [paint, setPaint] = useState(null);
  
  const handleOpen = (event) => {
    setPaint(event.currentTarget);
  };
  const changeColor = async (color) => {
    await updateNoteColorApi(note.id, color);
     refreshNotes()
    setPaint(null);
  };
  const handleClose = () => {
    setPaint(null);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* Color */}
      
      <IconButton size="small" onClick={handleOpen}>
        <ColorLensOutlinedIcon fontSize="small" />
      </IconButton>

      <Popover
        open={Boolean(paint)}
        anchorEl={paint}
        onClose={handleClose}
        sx={{ mt: 4.5, ml: 2.2 }}
      >
        <PaintPallette
          setColor={changeColor}
        />
      </Popover>

      <IconButton size="small">
        <AddAlertOutlinedIcon fontSize="small" />
      </IconButton>

      <IconButton size="small">
        <PersonAddAltIcon fontSize="small" />
      </IconButton>

      <IconButton size="small">
        <ImageOutlinedIcon fontSize="small" />
      </IconButton>
      
      <IconButton size="small" onClick={onArchive }>
        <ArchiveOutlinedIcon fontSize="small" />
      </IconButton>
      
        <Tooltip>
          <IconButton size="small" onClick={onTrash}>
            <DeleteOutlineIcon fontSize="small"/>
          </IconButton>
        </Tooltip>
      <IconButton size="small">
        <MoreVertOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
