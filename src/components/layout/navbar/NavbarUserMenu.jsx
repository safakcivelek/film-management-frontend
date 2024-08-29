import React from 'react';
import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function NavbarUserMenu({ user, handleLogout, handleMenuClick, handleMenuClose, anchorEl }) {
  if (!user) {
    return null;  // Eğer user null veya undefined ise, bu bileşen hiçbir şey render etmez.
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          border: '1px solid transparent',
          borderRadius: 1,
          padding: '1px 6px',
          '&:hover': {
            backgroundColor: '#1E1F29',
            borderColor: '#D10024',
          },
        }}
        onClick={handleMenuClick}
      >
        <IconButton color="inherit">
          <AccountCircle sx={{ color: 'white' }} />
        </IconButton>
        <Typography color="white">{user.email}</Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 1 }}
      >
        <MenuItem onClick={handleLogout} sx={{ py: 0, width: 'fit-content' }}>Çıkış Yap</MenuItem>
      </Menu>
    </Box>
  );
}

export default NavbarUserMenu;
