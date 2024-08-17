import React, { useState } from 'react';
import { Grid, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilmCard from '../../components/films/FilmCard';

const FilmSlider = ({ films }) => {
  const [startIndex, setStartIndex] = useState(0);
  const filmsPerSlide = 6;

  // Sadece ilk 12 filmi alıyoruz
  const limitedFilms = films.slice(0, 12);
  const visibleFilms = limitedFilms.slice(startIndex, startIndex + filmsPerSlide);

  // Sol ok ile kaydırma işlemi
  const handleSlideLeft = () => {
    setStartIndex((prevIndex) => (prevIndex - filmsPerSlide + limitedFilms.length) % limitedFilms.length);
  };

  // Sağ ok ile kaydırma işlemi
  const handleSlideRight = () => {
    setStartIndex((prevIndex) => (prevIndex + filmsPerSlide) % limitedFilms.length);
  };
  
  return (
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
              name={film.name}
              image={film.image}
              year={film.year}
              score={film.score}
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
  );
};

export default FilmSlider;
