import React from 'react';
import { Grid } from '@mui/material';
import FilmCard from './FilmCard'; 

const FilmList = ({ films }) => {
  return (
    <Grid container spacing={2} rowSpacing={6}>
      {films.map((film, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <FilmCard
            id={film.id}
            name={film.name}
            description={film.description}
            image={film.image}
            year={film.year}
            score={film.score}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilmList;
