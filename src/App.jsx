// import React, { useState } from 'react';
// import PrimarySearchAppBar from './componenets/navbar';
// import ResponsiveDrawer from './componenets/pages/dashboard/Sidenav';
// import { drawerClasses } from '@mui/material/Drawer';
// import Signup from './componenets/pages/signup/Signup'
// import Signin from './componenets/pages/signIn/SignIn'

// function App() {
// // const [drawerOpen, setDrawerOpen] = React.useState(true);

// // const handleToggle = () => {
// //     setDrawerOpen((prev) => !prev);
// //   };


//   return (
//     <>
//       {/* <PrimarySearchAppBar handleToggle={handleToggle} />
//       <ResponsiveDrawer open={drawerOpen}/> */}
      
//       <Signin />
//     </>
//   );
// }

// export default App;
import React from 'react'
import '../src/App.css'
import ReactRouting from './ReactRouting'

export default function App() {
  return (
    <div>
      <ReactRouting/>
    </div>
  )
}
