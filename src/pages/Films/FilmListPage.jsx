import * as React from 'react';
import { Grid, Box, Typography, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
import '../../css/globalStyles.css';
import FilmFilter from '../../components/films/FilmFilter';
import FilmList from '../../components/films/FilmList';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';
import { useState } from 'react';

const FilmListPage = () => {
  const { filterFilms, loading, error,updateSort  } = useFilteredFilms();
  const [sortOrder, setSortOrder] = useState('');

  // Sıralama menüsü değişikliği
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    
    if (value === 'az') {
      updateSort({ field: 'name', dir: 'asc' });
    } else if (value === 'za') {
      updateSort({ field: 'name', dir: 'desc' });
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)' }}>
        <FilmFilter />
      </Box>

      <Box sx={{ mb: 4, mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Toplam <span style={{ color: '#D10024' }}>{filterFilms.length}</span> film bulundu
        </Typography>

       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', mr: 2 }}>Sırala:</Typography>
          <FormControl
            variant="outlined"
            sx={{
              minWidth: 120,
              height: 40, 
              backgroundColor: '#1E1F29',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                height: '40px', 
                padding: '0 14px', 
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover fieldset': {
                  borderColor: '#D10024', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D10024', 
                },
              },
            }}
          >
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              sx={{ color: 'white', borderColor: 'white' }}
            >
              <MenuItem value="az">A-Z</MenuItem>
              <MenuItem value="za">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <FilmList films={filterFilms} />
    </Box>
  );
};

export default FilmListPage;