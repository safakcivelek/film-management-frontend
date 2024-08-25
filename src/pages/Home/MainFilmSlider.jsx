import React, { useState } from 'react';
import { Box, CardMedia, IconButton } from '@mui/material';
import { KeyboardArrowUpTwoTone, KeyboardArrowDownTwoTone } from '@mui/icons-material';
import { useFilms } from '../../contextApi/FilmContext';

const MainFilmSlider = () => {
  const { films, setSelectedFilm, selectedFilm } = useFilms();
  const filmsToDisplay = films.slice(0, 6); // İlk 6 filmi alıyoruz
  const [startIndex, setStartIndex] = useState(0);

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
    <Box sx={{ position: 'relative', width: '350px' }}>
      <IconButton
        onClick={handleSlideUp}
        sx={{
          position: 'absolute',
          top: '-20px', // Okları biraz daha yaklaştırdık
          left: '50%',
          transform: 'translateX(-75%)',
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
            width: '305px',
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
          bottom: '-20px', // Okları biraz daha yaklaştırdık
          left: '50%',
          transform: 'translateX(-75%)',
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
