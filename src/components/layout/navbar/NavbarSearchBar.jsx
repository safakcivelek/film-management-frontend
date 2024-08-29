import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function NavbarSearchBar({ isMobile }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '43px', width: isMobile ? '100%' : 'auto' }}>
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
