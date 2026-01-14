import React, {useState} from 'react'
import PrimarySearchAppBar from '../componenets/header/navbar';
import ResponsiveDrawer from '../componenets/sidenavbar/Sidenav';


export default function Dashboard() {
    const [drawerOpen, setDrawerOpen] = useState(true);

const handleToggle = () => {
    setDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <PrimarySearchAppBar handleToggle={handleToggle} />
      <ResponsiveDrawer open={drawerOpen}/>
      
    </>
  )
}
