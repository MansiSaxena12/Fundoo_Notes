import * as React from "react";
import { Box, Paper, InputBase, IconButton, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

export default function NotesEmpty() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 4,
        paddingTop: 0
      }}
    >
      {/* Take a note bar */}
      <Paper
        elevation={5}
        sx={{
          width: "600px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          px: 2,
          borderRadius: "8px",
        }}
      >
        <InputBase
          placeholder="Take a note..."
          sx={{ flex: 1, fontSize: "18px" }}
        />

        <IconButton size="58px">
          <CheckBoxOutlinedIcon fontSize="58px" />
        </IconButton>

        <IconButton size="58px">
          <BrushOutlinedIcon fontSize="58px" />
        </IconButton>

        <IconButton size="58px">
          <ImageOutlinedIcon fontSize="58px" />
        </IconButton>
      </Paper>

      
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#9e9e9e",
        }}
      >
        <LightbulbOutlinedIcon sx={{ fontSize: 96, mb: 2 }} />

        <Typography variant="h5" sx={{ color: "#949393" }}>
          Notes that you add appear here
        </Typography>
      </Box>
    </Box>
  );
}
