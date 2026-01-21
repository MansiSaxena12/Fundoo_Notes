import React, { useState } from "react";
import Box from "@mui/material/Box";
import { getNotes, archiveNoteApi, unarchiveNoteApi } from "../api/axios";
import { Outlet } from "react-router-dom";

import PrimarySearchAppBar from "../componenets/header/navbar";
import SideNav from "../componenets/sidenavbar/Sidenav";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const[view,setView]=useState("grid")

  
  const handleToggleView = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };

const handleToggle = () => {
  setDrawerOpen((prev) => {
    return !prev;
  });
};

  return (
    <>
      {/* HEADER */}
      <Box sx={{display:'flex',flexDirection:'column'}}>
      <PrimarySearchAppBar
      handleToggle={handleToggle}
      handleToggleView={handleToggleView}
      view={view}/>

      {/* BODY */}
      <Box sx={{ display: "flex", mt: "64px" }}>
        {/* SIDENAV */}
        <SideNav open={drawerOpen} />

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, p: 3,   display: "flex", flexDirection: "row", justifyContent:'center' }}>
          <Outlet context={{view}}/>
        </Box>
      </Box>
      </Box>
    </>
  );
}
