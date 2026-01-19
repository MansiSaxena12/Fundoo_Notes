import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

import PrimarySearchAppBar from "../componenets/header/navbar";
import SideNav from "../componenets/sidenavbar/Sidenav";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      {/* HEADER */}
      <PrimarySearchAppBar handleToggle={handleToggle} />

      {/* BODY */}
      <Box sx={{ display: "flex", mt: "64px" }}>
        {/* SIDENAV */}
        <SideNav open={drawerOpen} />

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, p: 3,   display: "flex", flexDirection: "row", justifyContent:'center' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
