import { Box, Typography } from '@mui/material';
import '../../css/globalStyles.css';
import FilmFilter from '../../components/films/FilmFilter';
import FilmList from '../../components/films/FilmList';
import SortSelect from '../../components/films/SortSelect'; 
import useFilmFilter from '../../hooks/useFilmFilter';
import useSort from '../../hooks/useSort';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';
import { useEffect, useState } from 'react';

const FilmListPage = () => {
  const { filterFilms, fetchFilteredFilms, loading, error } = useFilteredFilms();
  const { filters, updateFilters, getDynamicFilterQuery } = useFilmFilter();
  const { sortOptions, updateSort, getDynamicSortQuery } = useSort();
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);

    if (value === 'az') {
      updateSort({ field: 'name', dir: 'asc' });
    } else if (value === 'za') {
      updateSort({ field: 'name', dir: 'desc' });
    }
  };

  useEffect(() => {
    const dynamicFilter = getDynamicFilterQuery();
    const dynamicSort = getDynamicSortQuery();
    const dynamicQuery = { filter: dynamicFilter, sort: dynamicSort };
    
    fetchFilteredFilms(0, 15, dynamicQuery);
  }, [filters, sortOptions]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)' }}>
        <FilmFilter filters={filters} updateFilters={updateFilters} />
      </Box>

      <Box sx={{ mb: 3, mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Toplam <span style={{ color: '#D10024' }}>{filterFilms.length}</span> film bulundu
        </Typography>
      
        <SortSelect sortOrder={sortOrder} handleSortChange={handleSortChange} />
      </Box>

      <FilmList films={filterFilms} />
    </Box>
  );
};

export default FilmListPage;
