import React, { useState } from 'react';
import { Box, Menu, MenuItem, IconButton, Avatar, Typography, Divider, ListItemIcon, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';

function NavbarUserMenu({ user, handleLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Button
          variant="outlined"
          onClick={handleMenuClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            textTransform: 'none',
            ml: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderColor: '#FFFFFF'
            },
            '&:focus': {
              outline: 'none',
            }
          }}
        >
          <AccountCircle sx={{ fontSize: 26, mr: 1 }} />
          <Typography>
            {user.fullName}
          </Typography>
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 230,
            '& .MuiAvatar-root': {
              width: 28,
              height: 28,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar sx={{ width: 28, height: 28 }} /> {user.fullName}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Çıkış Yap
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserMenu;
