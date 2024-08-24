import * as React from 'react';
import { Grid } from '@mui/material';
import FilterSelect from './FilterSelect';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';

const FilmFilter = () => {
  const { filters, updateFilters } = useFilteredFilms();

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    updateFilters({ genre });
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    updateFilters({ year });
  };
  const handleDurationChange = (event) => {
    updateFilters({ duration: event.target.value });
  };

  const handleScoreChange = (event) => {
    updateFilters({ score: event.target.value });
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="Film Türü" value={filters.genre} handleChange={handleGenreChange} options={['Fantastik', 'Bilim Kurgu', 'Dram', 'Aksiyon']} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="Film Yılı" value={filters.year} handleChange={handleYearChange} options={['2025', '2024', '2023', '2022', '2021', '2020']} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="Film Süresi" value={filters.duration} handleChange={handleDurationChange} options={['150', '120', '100', '90']} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="IMDB Puanı" value={filters.score} handleChange={handleScoreChange} options={['7', '8', '9', '10']} />
      </Grid>
    </Grid>
  );
};

export default FilmFilter;
