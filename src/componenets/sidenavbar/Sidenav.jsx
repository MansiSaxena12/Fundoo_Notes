import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from "react-router-dom";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


export default function MiniDrawer({open}) {
   const navigate = useNavigate();      // ✅ hook inside component
  const location = useLocation(); 
  
// const [selectedItem, setSelectedItem] = React.useState('Notes');
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const items=[
    {text:'Notes',icon:<LightbulbOutlinedIcon/>, path: "notes"},
    {text:'Reminders',icon:<NotificationsOutlinedIcon/>,path: "reminders"},
    {text:'Edit-labels',icon:<CreateOutlinedIcon/>},
    {text:'Archive',icon:<ArchiveOutlinedIcon/>,path: "archive"},
    {text:'Bin',icon:<DeleteOutlineOutlinedIcon/>,path: "trash"}
]

  return (
  <Box sx={{ display: "flex", mt: 4 }}>
    <CssBaseline />

    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          borderRight: "none",
          top: "64px",
          width: open ? 240 : 65,
          transition: "width 0.3s",
        },
      }}
    >
      <Divider />

      <List>
        {items.map((item) => {
          // ✅ THIS LINE replaces selectedItem logic
         const isActive =
  item.path === "notes"
    ? location.pathname === "/" || location.pathname === "/notes"
    : location.pathname === `/${item.path}`;
    
          return (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() =>  item.path && navigate(item.path)}
                sx={{
                  minHeight: 48,
                  minWidth: 38,
                  justifyContent: "flex-start",
                  px: 1.2,
                  borderRadius: "0 25px 25px 0",

                  backgroundColor: isActive
                    ? "rgb(254, 239, 195)"
                    : "transparent",

                  "&:hover": {
                        backgroundColor: isActive
        ? "rgb(254, 239, 195)"
        : "#f1f3f4",
    },
                }}
              >
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} sx={{ opacity: 1 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  </Box>
);

}