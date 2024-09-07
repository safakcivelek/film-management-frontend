import * as React from 'react';
import { InputLabel, Select, MenuItem } from '@mui/material';
import FilterFormControl from './FilterSelectStyles';

const FilterSelect = ({ label, value, handleChange, options }) => {
  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value || ''} 
        onChange={handleChange}
        label={label}
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
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value || option}>{option.label || option}</MenuItem>
        ))}
      </Select>
    </FilterFormControl>
  );
};

export default FilterSelect;
