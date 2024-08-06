import * as React from 'react';
import { Grid } from '@mui/material';
import FilterSelect from './filterSelect';
import fakeGenres from '../../data/fakeGenres';
import fakeYears from '../../data/fakeYears';
import fakeDurations from '../../data/fakeDurations';
import fakeIMDBScores from '../../data/fakeIMDBScores';

const FilmFilter = ({ genre, year, duration, imdb, handleGenreChange, handleYearChange, handleDurationChange, handleIMDBChange }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={2.9} >
        <FilterSelect label="Film Türü" value={genre} handleChange={handleGenreChange} options={fakeGenres} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="Film Yılı" value={year} handleChange={handleYearChange} options={fakeYears} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9}>
        <FilterSelect label="Film Süresi" value={duration} handleChange={handleDurationChange} options={fakeDurations} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.9} >
        <FilterSelect label="IMDB Puanı" value={imdb} handleChange={handleIMDBChange} options={fakeIMDBScores} />
      </Grid>
    </Grid>
  );
};

export default FilmFilter;
