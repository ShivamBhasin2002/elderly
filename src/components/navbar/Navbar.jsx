import React, { useState } from 'react'
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='default'>
          <Toolbar >
            <Typography color="inherit" component="div" sx={{ ml: 26 }} id='nav-text'>
              Elderly
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Navbar;
