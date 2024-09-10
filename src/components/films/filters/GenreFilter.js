import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import FilterFormControl from '../FilterSelectStyles';

const GenreFilter = ({ genre, handleGenreChange }) => {
  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>Film Türü</InputLabel>
      <Select
        value={genre || ''}
        onChange={handleGenreChange}
        label="Film Türü"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '200px', 
              overflowY: 'auto', 
            },
          },
        }}
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        <MenuItem value="Fantastik">Fantastik</MenuItem>
        <MenuItem value="Bilim Kurgu">Bilim Kurgu</MenuItem>
        <MenuItem value="Dram">Dram</MenuItem>
        <MenuItem value="Aksiyon">Aksiyon</MenuItem>
      </Select>
    </FilterFormControl>
  );
};

export default GenreFilter;
