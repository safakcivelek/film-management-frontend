import React from 'react';
import { Box } from '@mui/material';
import { useFilms } from '../../contextApi/FilmContext';

const BackgroundImage = () => {
    const {selectedFilm}=useFilms();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: { xs: 'auto', md: '1080px' },
        backgroundImage: `url(${selectedFilm.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
        filter: 'brightness(40%)',
      }}
    />
  );
};

export default BackgroundImage;
