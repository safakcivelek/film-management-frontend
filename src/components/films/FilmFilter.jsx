import * as React from 'react';
import { Grid } from '@mui/material';
import FilterSelect from './FilterSelect';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';

const FilmFilter = () => {
  const { filters, updateFilters } = useFilteredFilms();

  // Yıl aralıkları
const yearRanges = [
  { label: '2010 ve öncesi', value: { start: '1900', end: '2010' } },
  { label: '2010 ve 2015 arası', value: { start: '2010', end: '2015' } },
  { label: '2015 ve 2020 arası', value: { start: '2015', end: '2020' } },
  { label: '2020 ve 2025 arası', value: { start: '2020', end: '2025' } },
  { label: '2025 ve sonrası', value: { start: '2025', end: '2099' } },
];

  // Süre aralıkları
  const durationRanges = [
    { label: '60 dakika ve altı', value: { min: '0', max: '60' } },
    { label: '60-90 dakika', value: { min: '60', max: '90' } },
    { label: '90-120 dakika', value: { min: '90', max: '120' } },
    { label: '120-180 dakika', value: { min: '120', max: '180' } },
    { label: '180 dakika ve üstü', value: { min: '180', max: '9999' } },
  ];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    updateFilters({ genre });
  };

  const handleYearRangeChange = (event) => {
    const yearRange = event.target.value;
    updateFilters({ yearRange });
  };

  const handleDurationRangeChange = (event) => {
    const durationRange = event.target.value;
    updateFilters({ durationRange });
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
          value={filters.genre || ''}  // Eğer değer boşsa boş string gösterelim
          handleChange={handleGenreChange}
          options={['Fantastik', 'Bilim Kurgu', 'Dram', 'Aksiyon']}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Yılı"
          value={filters.yearRange.start || ''}  // Eğer değer boşsa boş string gösterelim
          handleChange={handleYearRangeChange}
          options={yearRanges.map(range => ({ label: range.label, value: range.value }))}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Süresi"
          value={filters.durationRange.min || ''}  // Eğer değer boşsa boş string gösterelim
          handleChange={handleDurationRangeChange}
          options={durationRanges.map(range => ({ label: range.label, value: range.value }))}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect
          label="Film Puanı"
          value={filters.score || ''}  // Eğer değer boşsa boş string gösterelim
          handleChange={handleScoreChange}
          options={['1', '2', '3', '4', '5']}
        />
      </Grid>
    </Grid>
  );
};

export default FilmFilter;
