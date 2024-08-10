import * as React from 'react';
import { InputLabel, Select, MenuItem } from '@mui/material';
import FilterFormControl from './FilterSelectStyles';

const FilterSelect = ({ label, value, handleChange, options }) => {
  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '200px', // Dropdown menüsünün maksimum yüksekliği
              overflowY: 'auto', // Dikey scroll bar
            },
          },
        }}
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FilterFormControl>
  );
};

export default FilterSelect;
