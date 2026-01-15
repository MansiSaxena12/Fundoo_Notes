import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

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
      <NotificationsOutlinedIcon sx={{ fontSize: 96, mb: 2 }} />

      {/* Text */}
      <Typography variant="h6">
        Reminders that you add appear here
      </Typography>
    </Box>
  );
}
