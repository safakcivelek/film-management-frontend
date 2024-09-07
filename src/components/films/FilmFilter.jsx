import * as React from 'react';
import { Grid } from '@mui/material';
import FilterSelect from './FilterSelect';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';

const FilmFilter = () => {
  const { filters, updateFilters } = useFilteredFilms();

  // Yıl aralıkları - string olarak set ediliyor
  const yearRanges = [
    { label: '2010 ve öncesi', value: '1900-2010' },
    { label: '2010 ve 2015 arası', value: '2010-2015' },
    { label: '2015 ve 2020 arası', value: '2015-2020' },
    { label: '2020 ve 2025 arası', value: '2020-2025' },
    { label: '2025 ve sonrası', value: '2025-2099' },
  ];

  // Süre aralıkları - string olarak set ediliyor
  const durationRanges = [
    { label: '60 dakika ve altı', value: '0-60' },
    { label: '60-90 dakika', value: '60-90' },
    { label: '90-120 dakika', value: '90-120' },
    { label: '120-180 dakika', value: '120-180' },
    { label: '180 dakika ve üstü', value: '180-9999' },
  ];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    updateFilters({ genre });
  };

  const handleYearRangeChange = (event) => {
    const yearRange = event.target.value;
    const [start, end] = yearRange.split('-');
    updateFilters({ yearRange: { start, end } });
  };

  const handleDurationRangeChange = (event) => {
    const durationRange = event.target.value;
    const [min, max] = durationRange.split('-');
    updateFilters({ durationRange: { min, max } });
  };

  const handleScoreChange = (event) => {
    const score = event.target.value;
    updateFilters({ score });
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Türü"
          value={filters.genre || ''}
          handleChange={handleGenreChange}
          options={['Fantastik', 'Bilim Kurgu', 'Dram', 'Aksiyon']}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Yılı"
          value={filters.yearRange.start ? `${filters.yearRange.start}-${filters.yearRange.end}` : ''}
          handleChange={handleYearRangeChange}
          options={yearRanges.map(range => ({ label: range.label, value: range.value }))}
          placeholder="Film Yılı"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Süresi"
          value={filters.durationRange.min ? `${filters.durationRange.min}-${filters.durationRange.max}` : ''}
          handleChange={handleDurationRangeChange}
          options={durationRanges.map(range => ({ label: range.label, value: range.value }))}
          placeholder="Film Süresi"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Puanı"
          value={filters.score || ''}
          handleChange={handleScoreChange}
          options={['1', '2', '3', '4', '5']}
        />
      </Grid>
    </Grid>
  );
};

export default FilmFilter;
