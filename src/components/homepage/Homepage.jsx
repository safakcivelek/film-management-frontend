import React, { useState } from 'react';
import { Box, Container, Paper, Typography, Grid, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import fakeFilms from '../../data/fakeFilms';
import FilmSlider from './filmSlider';
import StarIcon from '@mui/icons-material/Star';
import PopularFilmsList from './populerFilmList';
import { useNavigate } from 'react-router-dom'; 
import BestFilmsList from './bestFilmList';

const HomePage = () => {
  const [selectedFilm, setSelectedFilm] = useState(fakeFilms[0]);
  const navigate = useNavigate(); 

  const handleWatchNow = () => {
    navigate(`/film/${selectedFilm.id}`);
  };

  return (
    <>
      <Box sx={{ position: 'relative', height: { xs: 'auto', md: '865px' }, overflow: 'hidden' }}>
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: { xs: 'auto', md: '1080px' },
    backgroundImage: `url(${selectedFilm.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
    filter: 'brightness(40%)',  // Karartma efekti
  }} />
  <Container 
    maxWidth="lg" 
    sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center', 
      height: '100%', 
      ml: { xs: 0, md: 20 }, 
      p: { xs: 2, md: 0 } 
    }}>
    <FilmSlider setSelectedFilm={setSelectedFilm} />
    <Box sx={{ flexGrow: 1, ml: { xs: 0, md: 10 }, mt: { xs: 4, md: 0 } }}>
      <Paper sx={{
        p: { xs: 2, md: 2 },
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        width: '100%',
        maxWidth: '600px',
        height: { xs: 'auto', md: '250px' }
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4" 
              sx={{
                mb: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: { xs: '1.5rem', md: '2rem' } 
              }}
            >
              {selectedFilm.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#D10024',
                  borderRadius: '50%',
                  mr: 1
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' }, 
                  fontWeight: 'normal',
                  color: 'white',
                  textTransform: 'none'
                }}
              >
                {selectedFilm.genre}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: { xs: '0.875rem', md: '1rem' } 
              }}
            >
              {selectedFilm.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <StarIcon sx={{ color: '#FFD700', mr: 1 }} />
              <Typography variant="body1" sx={{ mr: 2 }}>
                {selectedFilm.imdb}
              </Typography>
              <Typography variant="body1">
                {selectedFilm.duration}
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              sx={{ 
                backgroundColor: '#D10024', 
                '&:hover': { backgroundColor: '#B0001B' },
                width: { xs: '100%', md: 'auto' }
              }}
              onClick={handleWatchNow}
            >
              Şimdi İzle
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </Container>
</Box>

      <Box sx={{ height: '30px' }}></Box>
      <PopularFilmsList />
      <BestFilmsList />
    </>
  );
};

export default HomePage;
