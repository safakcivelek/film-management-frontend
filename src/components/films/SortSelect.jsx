import React from 'react';
import { Box, Typography, MenuItem, Select, FormControl } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const SortSelect = ({ sortOrder, handleSortChange }) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 120,
        width: 120,
        height: 40,
        backgroundColor: '#1E1F29',
        borderRadius: 1,
        '& .MuiOutlinedInput-root': {
          height: '40px',
          padding: '0 14px',
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&:hover fieldset': {
            borderColor: '#D10024',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#D10024',
          },
        },
      }}
    >
      <Select
        displayEmpty
        value={sortOrder}
        onChange={handleSortChange}
        sx={{ color: 'white', borderColor: 'white' }}
        IconComponent={null}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: 'white', fontSize: '1rem', mr: 1 }}>
              Sırala:
            </Typography>
            <SwapVertIcon sx={{ color: 'white' }} />
          </Box>
        )}
      >
        <MenuItem value="az">A-Z</MenuItem>
        <MenuItem value="za">Z-A</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
