import React from 'react';
import { Grid } from '@mui/material';
import GenreFilter from './filters/GenreFilter';
import YearFilter from './filters/YearFilter';
import DurationFilter from './filters/DurationFilter';
import ScoreFilter from './filters/ScoreFilter';

const FilmFilter = ({ filters, updateFilters }) => {
  const handleGenreChange = (event) => {
    updateFilters({ genre: event.target.value });
  };

  const handleYearRangeChange = (event) => {
    const [start, end] = event.target.value.split('-');
    updateFilters({ yearRange: { start, end } });
  };

  const handleDurationRangeChange = (event) => {
    const [min, max] = event.target.value.split('-');
    updateFilters({ durationRange: { min, max } });
  };

  const handleScoreChange = (event) => {
    updateFilters({ score: event.target.value });
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={3}>
        <GenreFilter genre={filters.genre} handleGenreChange={handleGenreChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <YearFilter yearRange={filters.yearRange} handleYearRangeChange={handleYearRangeChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <DurationFilter durationRange={filters.durationRange} handleDurationRangeChange={handleDurationRangeChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ScoreFilter score={filters.score} handleScoreChange={handleScoreChange} />
      </Grid>
    </Grid>
  );
};

export default FilmFilter;
