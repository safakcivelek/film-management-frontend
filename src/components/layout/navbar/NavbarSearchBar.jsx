import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function NavbarSearchBar({ isMobile }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

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
          width: isMobile ? '100%' : '486px',
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
