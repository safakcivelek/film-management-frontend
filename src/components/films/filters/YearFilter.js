import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import FilterFormControl from '../FilterSelectStyles';

const YearFilter = ({ yearRange, handleYearRangeChange }) => {
  const yearRanges = [
    { label: '2010 ve öncesi', value: '1900-2010' },
    { label: '2010 ve 2015 arası', value: '2010-2015' },
    { label: '2015 ve 2020 arası', value: '2015-2020' },
    { label: '2020 ve 2025 arası', value: '2020-2025' },
    { label: '2025 ve sonrası', value: '2025-2099' }
  ];

  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>Film Yılı</InputLabel>
      <Select
        value={yearRange.start ? `${yearRange.start}-${yearRange.end}` : ''}
        onChange={handleYearRangeChange}
        label="Film Yılı"
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        {yearRanges.map((range, index) => (
          <MenuItem key={index} value={range.value}>{range.label}</MenuItem>
        ))}
      </Select>
    </FilterFormControl>
  );
};

export default YearFilter;
