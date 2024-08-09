import React, { useState } from 'react';
import { Box, CardMedia, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import fakeFilms from '../../data/fakeFilms';

const FilmSlider = ({ setSelectedFilm }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleFilms = fakeFilms.slice(startIndex, startIndex + 3);

  const handleSlideUp = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? fakeFilms.length - 3 : prevIndex - 1));
  };

  const handleSlideDown = () => {
    setStartIndex((prevIndex) => (prevIndex === fakeFilms.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: 'relative', width: '350px' }}>
      <IconButton
        onClick={handleSlideUp}
        sx={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'transparent',
          border: '2px solid white',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#D10024',
            borderColor: '#D10024',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        }}
      >
        <ArrowUpwardIcon sx={{ color: 'white', fontSize: '16px' }} />
      </IconButton>
      {visibleFilms.map((film, index) => (
        <CardMedia
          key={film.id}
          component="img"
          image={film.image}
          alt={film.title}
          sx={{ 
            width: '350px', 
            height: '200px', 
            cursor: 'pointer', 
            marginBottom: '20px', 
            marginTop: '20px',
            border: '3px solid #D10024', 
            borderRadius: '1px' 
          }}
          onClick={() => setSelectedFilm(film)} // Bu kısmın doğru çalıştığından emin olun
        />
      ))}
      <IconButton
        onClick={handleSlideDown}
        sx={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'transparent',
          border: '2px solid white',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#D10024',
            borderColor: '#D10024',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        }}
      >
        <ArrowDownwardIcon sx={{ color: 'white', fontSize: '16px' }} />
      </IconButton>
    </Box>
  );
};

export default FilmSlider;
