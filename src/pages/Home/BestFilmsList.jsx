import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import FilmSlider from './FilmSlider';
import useBestFilms from '../../hooks/useBestFilms';  

const BestFilmsList = () => {
 
  const { films, loading, error } = useBestFilms();

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, pt: 3,pb: 8 }}>
      <Typography variant="h6" component="div" sx={{ color: 'white',mb:3 }}>
        En İyi Filmler
      </Typography>
      <FilmSlider films={films} />
    </Box>
  );
};

export default BestFilmsList;
