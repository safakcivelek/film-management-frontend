import React, { useState } from 'react';
import { Box, CardMedia, IconButton } from '@mui/material';
import { KeyboardArrowUpTwoTone, KeyboardArrowDownTwoTone } from '@mui/icons-material';
import { useFilms } from '../../contextApi/HomePageFilmContext';

const MainFilmSlider = () => {
  const { films, setSelectedFilm, selectedFilm } = useFilms();
  const filmsToDisplay = films.slice(0, 6) || []; 
  const [startIndex, setStartIndex] = useState(0);

  if (!films || films.length === 0) {
    return null; // Eğer filmler boşsa, sliderı render etme.
  }

  const visibleFilms = [
    filmsToDisplay[(startIndex) % filmsToDisplay.length],
    filmsToDisplay[(startIndex + 1) % filmsToDisplay.length],
    filmsToDisplay[(startIndex + 2) % filmsToDisplay.length],
  ];

  const handleSlideUp = () => {
    setStartIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + filmsToDisplay.length) % filmsToDisplay.length;
      setSelectedFilm(filmsToDisplay[newIndex]); // Ana resmi güncelle
      return newIndex;
    });
  };

  const handleSlideDown = () => {
    setStartIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % filmsToDisplay.length;
      setSelectedFilm(filmsToDisplay[newIndex]); // Ana resmi güncelle
      return newIndex;
    });
  };

  return (
    <Box sx={{
      position: 'relative',
      width: { xs: '100%', sm: '350px' },
      margin: { xs: '0 auto', sm: 'initial' }, // Mobilde ortala
      display: 'flex',
      flexDirection: 'column', // Mobilde yukarıdan aşağıya hizala
      alignItems: 'center' 
    }}>
      <IconButton
        onClick={handleSlideUp}
        sx={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1E1F29',
          borderRadius: '4px',
          width: '50px',
          height: '25px',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#B0001B',
          },
        }}
      >
        <KeyboardArrowUpTwoTone sx={{ color: 'white', fontSize: '24px' }} />
      </IconButton>

      {visibleFilms.map((film) => (
        <Box
          key={film.id}
          sx={{
            position: 'relative',
            width: '90%', 
            height: '170px',
            marginBottom: '20px',
            marginTop: '20px',
            cursor: 'pointer',
            borderRadius: '8px',
            boxShadow: film.id === selectedFilm?.id ? `0px 0px 10px 2px #FFD700` : 'none',
            transform: film.id === selectedFilm?.id ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
            opacity: film.id === selectedFilm?.id ? 1 : 0.7,
          }}
          onClick={() => setSelectedFilm(film)}
        >
          <CardMedia
            component="img"
            image={film.image}
            alt={film.title}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              zIndex: 0,
            }}
          />
        </Box>
      ))}

      <IconButton
        onClick={handleSlideDown}
        sx={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1E1F29',
          borderRadius: '4px',
          width: '50px',
          height: '25px',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#B0001B',
          },
        }}
      >
        <KeyboardArrowDownTwoTone sx={{ color: 'white', fontSize: '24px' }} />
      </IconButton>
    </Box>
  );
};

export default MainFilmSlider;
