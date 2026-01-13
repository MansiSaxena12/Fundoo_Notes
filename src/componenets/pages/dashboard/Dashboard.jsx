import React, {useState} from 'react'
import PrimarySearchAppBar from '../../navbar';
import ResponsiveDrawer from '../dashboard/Sidenav';


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
