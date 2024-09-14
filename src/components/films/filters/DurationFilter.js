import React from 'react';
import FilterSelect from '../FilterSelect';

const DurationFilter = ({ durationRange, handleDurationRangeChange }) => {
  const durationRanges = [
    { label: '60 dakika ve altı', value: '0-60' },
    { label: '60-90 dakika', value: '60-90' },
    { label: '90-120 dakika', value: '90-120' },
    { label: '120-180 dakika', value: '120-180' },
    { label: '180 dakika ve üstü', value: '180-9999' }
  ];

  return (
    <FilterSelect
      label="Film Süresi"
      value={durationRange.min ? `${durationRange.min}-${durationRange.max}` : ''}
      handleChange={handleDurationRangeChange}
      options={durationRanges}
    />
  );
};

export default DurationFilter;
