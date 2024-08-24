import React, { useEffect,useState } from 'react';
import { Box, Typography } from '@mui/material';
import FilmSlider from './FilmSlider';
import FilmService from '../../services/filmService';

const PopularFilmsList = () => {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const responseData = await FilmService.getAll(); //getPopularFilmsList olarak güncellenecek.
        setFilms(responseData.data || []);         
      } catch (error) {       
        setError(`İstek başarısız oldu(populer) (Durum Kodu: ${error.response.status})`);
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Typography variant="h6" component="div" sx={{ color: 'white', mb: 4 }}>
        Popüler Filmler
      </Typography>
      <FilmSlider films={films} />
    </Box>
  );
};

export default PopularFilmsList;
