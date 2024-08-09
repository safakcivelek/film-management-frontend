import React, { useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilmCard from '../film/filmCard';
import fakeFilms from '../../data/fakeFilms';

const BestFilmsList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const filmsPerSlide = 6;
  const visibleFilms = fakeFilms.slice(startIndex, startIndex + filmsPerSlide);

  const handleSlideLeft = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? fakeFilms.length - filmsPerSlide : prevIndex - filmsPerSlide));
  };

  const handleSlideRight = () => {
    setStartIndex((prevIndex) => (prevIndex === fakeFilms.length - filmsPerSlide ? 0 : prevIndex + filmsPerSlide));
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          En İyi Filmler
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={handleSlideLeft}
          sx={{
            position: 'absolute',
            left: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'red',
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '16px', color: 'black' }} />
        </IconButton>
        <Grid container spacing={2} sx={{ overflow: 'hidden', width: '100%' }}>
          {visibleFilms.map((film, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <FilmCard
                id={film.id}
                title={film.title}
                description={film.description}
                image={film.image}
                year={film.year}
                imdb={film.imdb}
              />
            </Grid>
          ))}
        </Grid>
        <IconButton
          onClick={handleSlideRight}
          sx={{
            position: 'absolute',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'red',
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '16px', color: 'black' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BestFilmsList;
