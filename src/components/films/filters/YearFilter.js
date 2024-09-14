import React from 'react';
import FilterSelect from '../FilterSelect';

const YearFilter = ({ yearRange, handleYearRangeChange }) => {
  const yearOptions = [
    { label: '2010 ve öncesi', value: '1900-2010' },
    { label: '2010 ve 2015 arası', value: '2010-2015' },
    { label: '2015 ve 2020 arası', value: '2015-2020' },
    { label: '2020 ve 2025 arası', value: '2020-2025' },
    { label: '2025 ve sonrası', value: '2025-2099' }
  ];

  return (
    <FilterSelect
      label="Film Yılı"
      value={yearRange.start ? `${yearRange.start}-${yearRange.end}` : ''}
      handleChange={handleYearRangeChange}
      options={yearOptions}
    />
  );
};

export default YearFilter;
