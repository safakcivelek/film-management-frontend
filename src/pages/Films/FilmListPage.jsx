import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import '../../css/globalStyles.css';
import FilmFilter from '../../components/films/FilmFilter';
import FilmList from '../../components/films/FilmList';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';

const FilmListPage = () => {

  const { filterFilms, loading, error } = useFilteredFilms();

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)', }}>
        <FilmFilter />
      </Box>

      <Box sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Toplam <span style={{ color: '#D10024' }}>{filterFilms.length}</span> film bulundu
        </Typography>
      </Box>

      <FilmList films={filterFilms} />

    </Box>
  );
};

export default FilmListPage;
