import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import keep_icon from '../assets/keep_icon.png'
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: alpha('#000', 0.08),
  '&:hover': {
    backgroundColor: alpha('#000', 0.11),
  },

  height:`49.7px`,

  marginLeft: theme.spacing(9),
  marginRight: theme.spacing(-3),
  
  flexGrow: 1,
  maxWidth: '650px' ,
  display:'flex',
  alignItems:'center'
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80vh',
    },
  },
}));

export default function PrimarySearchAppBar({handleToggle}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    
      <MenuItem>
       <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AppsRoundedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>      
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,display:'flex' }}>
      <AppBar position="fixed"
      sx={{backgroundColor: "#ffffff",
        color:"gray",zIndex:(theme)=>theme.zIndex.drawer+1
      }}>
        <Toolbar>
          <Tooltip title="Main Menu">
          <IconButton onClick={handleToggle}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Keep">
           <Box
            component="img"
            src={keep_icon}
            alt="Keep logo"
            sx={{
            height: 32,
            width: 'auto',
            ml: -2,
            mr: 2,
            cursor: 'pointer',
          }}
  />
  </Tooltip>
           <Tooltip title="Keep">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft:-1 }}
          >
            Keep
          </Typography>
          </Tooltip>
          <Search>
            <Tooltip title="Search">
            <IconButton>
              <SearchIcon />
            </IconButton>
            </Tooltip>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              size='25vh'
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
  
  {/* Grouped icons */}
  <Box
    className="right-icons"
    sx={{
      display: 'flex',
      alignItems: 'center',
      mr: 3.2,  
    }}
  >
    <Tooltip title="Refresh">
    <IconButton size="large" color="inherit">
      <RefreshIcon />
    </IconButton>
    </Tooltip>

    <Tooltip title="List">
    <IconButton size="large" color="inherit">
      <ChecklistRtlIcon />
    </IconButton>
    </Tooltip>


    <Tooltip title="Settings">
    <IconButton size="large" color="inherit">
      <SettingsSuggestOutlinedIcon />
    </IconButton>
    </Tooltip>

    
  </Box>

  {/* Account icon */}
  <Tooltip title="Google app">
  <IconButton size="large" color="inherit">
      <AppsRoundedIcon />
    </IconButton>
    </Tooltip>

    <Tooltip title="Google account">
  <IconButton size="large" color="inherit">
    <AccountCircle />
  </IconButton>
  </Tooltip>


</Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
  );
}
