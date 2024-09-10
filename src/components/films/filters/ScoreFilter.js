import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import FilterFormControl from '../FilterSelectStyles';

const ScoreFilter = ({ score, handleScoreChange }) => {
  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>Film Puanı</InputLabel>
      <Select
        value={score || ''}
        onChange={handleScoreChange}
        label="Film Puanı"
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        {[1, 2, 3, 4, 5].map((scoreValue) => (
          <MenuItem key={scoreValue} value={scoreValue.toString()}>{scoreValue}</MenuItem>
        ))}
      </Select>
    </FilterFormControl>
  );
};

export default ScoreFilter;
