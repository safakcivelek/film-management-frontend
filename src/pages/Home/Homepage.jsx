import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import PopularFilmsList from './PopularFilmsList';
import BestFilmsList from './BestFilmsList';
import MainFilmSlider from './MainFilmSlider';
import SelectedFilmDetails from './SelectedFilmDetails';
import BackgroundImage from './BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { useFilms } from '../../contextApi/FilmContext';

const HomePage = () => {
  const { films, selectedFilm, setSelectedFilm, loading, error } = useFilms();
  const navigate = useNavigate();

  const handleWatchNow = () => {
    if (selectedFilm) {
      navigate(`/film/${selectedFilm.id}`);
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <>
      <Box sx={{ mb: 4, position: 'relative', height: { xs: 'auto', md: '865px' }, overflow: 'hidden' }}>
        {selectedFilm && <BackgroundImage selectedFilm={selectedFilm} />}
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', height: '100%', ml: { xs: 0, md: 20 }, p: { xs: 2, md: 0 } }}>
          <MainFilmSlider films={films} setSelectedFilm={setSelectedFilm} />
          {selectedFilm && <SelectedFilmDetails selectedFilm={selectedFilm} handleWatchNow={handleWatchNow} />}
        </Container>
      </Box>

      <PopularFilmsList />
      <BestFilmsList />
    </>
  );
};

export default HomePage;
