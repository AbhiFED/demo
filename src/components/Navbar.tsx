// import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmergencyIcon from '@mui/icons-material/Emergency';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'red'}}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" component="div" sx={{ fontSize: 16 }}>
            Your Emergency Partner
            <Typography sx={{ fontSize: 12, color: 'black' }}>We are here to help you</Typography>


          </Typography>
          <Box >
            <EmergencyIcon sx={{ border: '1px solid darkgrey', borderRadius: 2 }} />
            <NotificationsActiveIcon sx={{ border: '1px solid darkgrey', borderRadius: 2 }} />
            <HelpIcon sx={{ border: '1px solid darkgrey', borderRadius: 2 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}