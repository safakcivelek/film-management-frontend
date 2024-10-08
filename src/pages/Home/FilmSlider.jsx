import React, { useState } from 'react';
import { Grid, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilmCard from '../../components/films/FilmCard';

const FilmSlider = ({ films }) => {
  const [startIndex, setStartIndex] = useState(0);
  const filmsPerSlide = 6;
  const totalFilms = films?.length || 0;

  if (!films || films.length === 0) {
    return null;  // Eğer films boşsa, slider'ı render etme
  }

  const visibleFilms = films.slice(startIndex, startIndex + filmsPerSlide);

  const handleSlideLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - filmsPerSlide, 0)); // Sol sınırlama
  };

  const handleSlideRight = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + filmsPerSlide, totalFilms - filmsPerSlide) // Sağ sınırlama
    );
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {startIndex > 0 && (
        <IconButton
          onClick={handleSlideLeft}
          sx={{
            position: { xs: 'absolute', md: 'absolute' },
            left: { xs: '50%', md: '-35px' },
            top: { xs: 'calc(100% + 10px)', md: '50%' },
            transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
            backgroundColor: '#1E1F29',
            borderRadius: '4px',
            width: { xs: '40px', md: '25px' }, 
            height: { xs: '25px', md: '80px' }, 
            zIndex: 2,
            '&:hover': {
              backgroundColor: '#B0001B',
            },
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: { xs: '18px', md: '24px' }, color: 'white' }} />
        </IconButton>
      )}
      <Grid container spacing={2} sx={{ overflow: 'hidden', width: '100%' }}>
        {visibleFilms.map((film, index) => (
          <Grid item xs={6} sm={6} md={2} key={index}>
            <FilmCard
              id={film.id}
              name={film.name}
              image={film.image}
              year={film.year}
              score={film.score}
            />
          </Grid>
        ))}
      </Grid>
      {startIndex + filmsPerSlide < totalFilms && (
        <IconButton
          onClick={handleSlideRight}
          sx={{
            position: { xs: 'absolute', md: 'absolute' },
            right: { xs: '50%', md: '-20px' },
            top: { xs: 'calc(100% + 10px)', md: '50%' }, 
            transform: { xs: 'translateX(50%)', md: 'translateY(-50%)' },
            backgroundColor: '#1E1F29',
            borderRadius: '4px',
            width: { xs: '40px', md: '25px' }, 
            height: { xs: '25px', md: '80px' }, 
            zIndex: 2,
            '&:hover': {
              backgroundColor: '#B0001B',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: '18px', md: '24px' }, color: 'white' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default FilmSlider;
