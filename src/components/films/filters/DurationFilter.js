import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import FilterFormControl from '../FilterSelectStyles';

const DurationFilter = ({ durationRange, handleDurationRangeChange }) => {
  const durationRanges = [
    { label: '60 dakika ve altı', value: '0-60' },
    { label: '60-90 dakika', value: '60-90' },
    { label: '90-120 dakika', value: '90-120' },
    { label: '120-180 dakika', value: '120-180' },
    { label: '180 dakika ve üstü', value: '180-9999' }
  ];

  return (
    <FilterFormControl fullWidth variant="outlined">
      <InputLabel>Film Süresi</InputLabel>
      <Select
        value={durationRange.min ? `${durationRange.min}-${durationRange.max}` : ''}
        onChange={handleDurationRangeChange}
        label="Film Süresi"
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        {durationRanges.map((range, index) => (
          <MenuItem key={index} value={range.value}>{range.label}</MenuItem>
        ))}
      </Select>
    </FilterFormControl>
  );
};

export default DurationFilter;
