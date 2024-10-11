import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavbarSearchBar({ isMobile }) {
  const theme = useTheme();
  const isBelow1300 = useMediaQuery('(max-width:1300px)'); 
  const isBelow1050 = useMediaQuery('(max-width:1050px)'); 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Eğer sayfa değişirse arama terimi temizlenir
  useEffect(() => {
    if (location.pathname !== currentPath) {
      setSearchTerm(''); // Yalnızca sayfa değiştiğinde temizler
      setCurrentPath(location.pathname); // Yeni sayfayı currentPath olarak ayarlar
    }
  }, [location.pathname, currentPath]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '43px', width: isMobile ? '100%' : 'auto' }}>
      <IconButton
        onClick={handleSearch}
        sx={{ bgcolor: '#D10024', color: 'white', borderRadius: '4px 0 0 4px', height: '43px', width: '43px', '&:hover': { bgcolor: 'darkred' } }}
      >
        <SearchIcon sx={{ fontSize: '1.8rem' }} />
      </IconButton>
      <TextField
        variant="outlined"
        placeholder="Film Ara..."
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        sx={{
          bgcolor: 'white',
          borderRadius: '4px',
          width: isMobile ? '100%' : isBelow1050 ? '100px' : isBelow1300 ? '250px' : '486px', 
          ml: 0,
          height: '43px',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          '& .MuiOutlinedInput-root': {
            height: '100%',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
          '& .MuiInputBase-input': {
            padding: '9px 13px',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      />
    </Box>
  );
}

export default NavbarSearchBar;
