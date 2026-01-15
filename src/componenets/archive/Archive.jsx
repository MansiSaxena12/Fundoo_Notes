import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Reminders() {
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
      <ArchiveIcon sx={{ fontSize: 96, mb: 2 }} />

      {/* Text */}
      <Typography variant="h6">
        Your archived notes appear here
      </Typography>
    </Box>
  );
}
