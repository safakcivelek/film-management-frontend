import { Box, Typography } from '@mui/material';
import FilmSlider from './FilmSlider';
import usePopularFilms from '../../hooks/usePopularFilms';

const PopularFilmsList = () => {
 const {films,error,loading}= usePopularFilms();

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, pt: 3,pb: 3 }}>
      <Typography variant="h6" component="div" sx={{ color: 'white', mb: 3 }}>
        Popüler Filmler
      </Typography>
      <FilmSlider films={films} />
    </Box>
  );
};

export default PopularFilmsList;
