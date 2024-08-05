import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#D10024', fontWeight: 'bold', fontSize: '0.9rem' }}>
        ELECTROFILM
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton
              onClick={() => console.log('Arama başlatıldı')}
              sx={{ bgcolor: '#D10024', color: 'white', borderRadius: 0, height: '43px', width: '43px', '&:hover': { bgcolor: 'darkred' } }}
            >
              <SearchIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
            <TextField
              variant="outlined"
              placeholder="Film Ara..."
              size="small"
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                width: '100%',
                ml: 0,
                height: '43px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                '& .MuiOutlinedInput-root': {
                  height: '100%',
                  '& fieldset': {
                    borderColor: 'transparent', // Çerçeveyi kaldır
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent', // Çerçeveyi kaldır
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', // Çerçeveyi kaldır
                  },
                },
                '& .MuiInputBase-input': {
                  padding: '9px 13px', // Padding ayarları
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            />
          </Box>
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Ana Sayfa" sx={{ fontSize: '0.9rem' }} />
        </ListItem>
        <ListItem button component={Link} to="/films">
          <ListItemText primary="Filmler" sx={{ fontSize: '0.9rem' }} />
        </ListItem>
        <ListItem button component={Link} to="/aboutus">
          <ListItemText primary="Hakkımızda" sx={{ fontSize: '0.9rem' }} />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Giriş Yap" sx={{ fontSize: '0.9rem' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#1E1F29 ' }}>
        <Toolbar sx={{ 
          mx: { xs: 2, sm: 3, md: 20 }, 
          height: '90px', 
          minHeight: '90px', 
          alignItems: 'center' 
        }}>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, p: 1.8, fontSize: '1.8rem' }}
            >
              <MenuIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            {!isMobile && (
              <Typography variant="h6" component="div" sx={{ mr: 5.4, color: '#D10024', fontWeight: 'bold', fontSize: '0.9rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ELECTROFILM</Link>
              </Typography>
            )}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', height: '43px' }}>
                <IconButton
                  onClick={() => console.log('Arama başlatıldı')}
                  sx={{ bgcolor: '#D10024', color: 'white', borderRadius: 0, height: '43px', width: '43px', '&:hover': { bgcolor: 'darkred' } }}
                >
                  <SearchIcon sx={{ fontSize: '1.8rem' }} />
                </IconButton>
                <TextField
                  variant="outlined"
                  placeholder="Film Ara..."
                  size="small"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    width: '486px',
                    mr: 3.6,
                    ml: 0,
                    height: '43px',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      '& fieldset': {
                        borderColor: 'transparent', // Çerçeveyi kaldır
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent', // Çerçeveyi kaldır
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent', // Çerçeveyi kaldır
                      },
                    },
                    '& .MuiInputBase-input': {
                      padding: '9px 13px', // Padding ayarları
                      display: 'flex',
                      alignItems: 'center',
                    },
                  }}
                />
              </Box>
            )}
            {!isMobile && (
              <>
                <Button color="inherit" sx={{ ml: 1.8, mr: 3.6, fontSize: '0.9rem' }}><Link to="/films" style={{ textDecoration: 'none', color: 'inherit' }}>Filmler</Link></Button>
                <Button color="inherit" sx={{ mr: 2.7, fontSize: '0.9rem' }}><Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>Hakkımızda</Link></Button>
              </>
            )}
          </Box>
          {!isMobile && (
            <Button color="inherit" sx={{ fontSize: '0.9rem' }}><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Giriş Yap</Link></Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
