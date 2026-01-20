import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Popover } from "@mui/material";
import keep_icon from "../../assets/keep_icon.png";
import PopUp from "./PopUp";
import { useLocation } from "react-router-dom";

/* ---------------- CONSTANTS ---------------- */

const NAVBAR_HEIGHT = 64;

const iconButtonSx = {
  width: 48,
  height: 48,
};

/* ---------------- SEARCH ---------------- */

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: 8,
  backgroundColor: alpha("#000", 0.08),
  height: 48,
  marginLeft: 24,
  flexGrow: 1,
  maxWidth: 650,
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px",
  },
}));

/* ---------------- COMPONENT ---------------- */

export default function PrimarySearchAppBar({ handleToggle, handleToggleView, view }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const color = "darkgreen";

  const renderMenu = (
    <Popover
      open={isMenuOpen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <PopUp color={color} w={80} h={80} />
    </Popover>
  );

  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/notes":
      case "/":
        return "Keep";
      case "/reminders":
        return "Reminders";
      case "/archive":
        return "Archive";
      case "/trash":
        return "Bin";
      default:
        return "Keep";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          color: "gray",
          height: NAVBAR_HEIGHT,
          justifyContent: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: NAVBAR_HEIGHT,
            px: 2,
          }}
        >
          {/* LEFT */}
          <Tooltip title="Main Menu">
            <IconButton
              onClick={()=>{
                console.log("llllll")
                handleToggle()
              }}
              color="inherit"
              sx={iconButtonSx}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Box 
            component="img"
            src={keep_icon}
            alt="Keep logo"
            sx={{ height: 32, ml: 1, mr: 2 , display:(getTitle()==='Keep')? 'block':'none'}}
          />

          <Typography variant="h6">{getTitle()}</Typography>

          {/* SEARCH (ALWAYS SAME SIZE) */}
          <Search>
            <IconButton sx={iconButtonSx}>
              <SearchIcon />
            </IconButton>
            <StyledInputBase placeholder="Search…" />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {/* RIGHT ICONS (ALWAYS SAME SIZE) */}
          <Tooltip title="Refresh">
            <IconButton sx={iconButtonSx} color="inherit">
              <RefreshIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={view === "grid" ? "List view" : "Grid view"}>
            <IconButton sx={iconButtonSx} 
            onClick={handleToggleView}>
               {view === "grid" ? (
                 <SplitscreenOutlinedIcon />
               ) : (
                 <GridViewOutlinedIcon />
               )}
             </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton sx={iconButtonSx} color="inherit">
              <SettingsSuggestOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Google apps">
            <IconButton sx={iconButtonSx} color="inherit">
              <AppsRoundedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Google account">
            <IconButton
              sx={iconButtonSx}
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: 14,
                  backgroundColor: color,
                }}
              >
                M
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}
