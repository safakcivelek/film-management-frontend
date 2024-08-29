import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, useMediaQuery, Typography, ListItemText, ListItem, List, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../../contextApi/AuthContext';
import NavbarSearchBar from './NavbarSearchBar';
import NavbarMenuItems from './NavbarMenuItems';
import NavbarUserMenu from './NavbarUserMenu';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
  { text: "FİLMLER", to: "/films" },
  { text: "HAKKIMIZDA", to: "/about" },
  { text: "İLETİŞİM", to: "/contact" },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/login');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#D10024', fontWeight: 'bold', fontSize: '0.9rem' }}>ELECTROFILM</Typography>
      <List>
        <NavbarSearchBar isMobile={true} />
        <ListItem button component={Link} to="/">
          <ListItemText primary="ANASAYFA" sx={{ fontSize: '0.9rem', textTransform: 'uppercase' }} />
        </ListItem>
        <NavbarMenuItems menuItems={menuItems} />
        {user ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Çıkış Yap" sx={{ fontSize: '0.9rem', color: 'black' }} />
          </ListItem>
        ) : (
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Giriş Yap" sx={{ fontSize: '0.9rem', color: 'black' }} />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#1E1F29' }}>
        <Toolbar sx={{ mx: { xs: 2, sm: 3, md: 20 }, height: '90px', minHeight: '90px', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: isMobile ? 'inline-flex' : 'none' }}>
            <MenuIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 5.4, color: '#D10024', fontWeight: 'bold', fontSize: '1.3rem', display: isMobile ? 'none' : 'block' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ELECTROFILM</Link>
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            {!isMobile && <NavbarSearchBar isMobile={false} />}
            {!isMobile && <NavbarMenuItems menuItems={menuItems} />}
          </Box>
          {!isMobile && (
            user ? (
              <NavbarUserMenu user={user} handleLogout={handleLogout} handleMenuClick={handleMenuClick} handleMenuClose={handleMenuClose} anchorEl={anchorEl} />
            ) : (
              <Button color="inherit" sx={{ fontSize: '0.9rem', textTransform: 'uppercase' }} component={Link} to="/login">
                Giriş Yap
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
