import { Box, Typography } from '@mui/material';
import '../../css/globalStyles.css';
import FilmFilter from '../../components/films/FilmFilter';
import FilmList from '../../components/films/FilmList';
import SortSelect from '../../components/films/SortSelect';
import useFilmFilter from '../../hooks/useFilmFilter';
import useSort from '../../hooks/useSort';
import { useFilteredFilms } from '../../contextApi/FilmFilterContext';
import { useEffect, useState } from 'react';
import LoadMoreButton from '../../components/films/LoadMoreButton';
import { Info } from '@mui/icons-material';


const FilmListPage = () => {
  const { filterFilms, fetchFilteredFilms, loading, error, hasMore, updateURL, getQueryParams, totalCount } = useFilteredFilms();
  const { filters, updateFilters, getDynamicFilterQuery } = useFilmFilter();
  const { sortOptions, updateSort, getDynamicSortQuery } = useSort();
  const [sortOrder, setSortOrder] = useState('');
  const [start, setStart] = useState(0);
  const limit = 6;

  const queryParams = getQueryParams();

  // URL parametrelerini alıp filtreleri ve sıralamayı uygula
  useEffect(() => {
    if (queryParams.sort) {
      setSortOrder(queryParams.sort);
      updateSort({ field: 'name', dir: queryParams.sort === 'az' ? 'asc' : 'desc' });
    }

    if (queryParams.genre || queryParams.yearRange || queryParams.durationRange || queryParams.score) {
      updateFilters({
        genre: queryParams.genre || '',
        yearRange: queryParams.yearRange || { start: '', end: '' },
        durationRange: queryParams.durationRange || { min: '', max: '' },
        score: queryParams.score || '',
      });
    }
  }, []); // queryParams'ı bağımlılığa eklemelimiyim ??


  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);

    updateSort({ field: 'name', dir: value === 'az' ? 'asc' : 'desc' });
    updateURL(filters, value);  // URL güncelleniyor
  };

  // Filtreleme işlemi için URL'yi günceller
  const handleFilterChange = (newFilters) => {
    updateFilters(newFilters);
    updateURL(newFilters, sortOrder); // URL'yi filtreler ile günceller
  };

  useEffect(() => {
    const dynamicFilter = getDynamicFilterQuery();
    const dynamicSort = getDynamicSortQuery();
    const dynamicQuery = { filter: dynamicFilter, sort: dynamicSort };

    setStart(0);
    fetchFilteredFilms(0, limit, dynamicQuery);
  }, [filters, sortOptions]);

  // Load more butonuna tıklandığında çağrılacak fonksiyon
  const loadMoreFilms = () => {
    const dynamicFilter = getDynamicFilterQuery();
    const dynamicSort = getDynamicSortQuery();
    const dynamicQuery = { filter: dynamicFilter, sort: dynamicSort };

    fetchFilteredFilms(start + limit, limit, dynamicQuery);
    setStart(prevStart => prevStart + limit);
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)' }}>
        <FilmFilter filters={filters} updateFilters={handleFilterChange} />
      </Box>

      <Box sx={{ mb: 3, mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Toplam <span style={{ color: '#D10024' }}>{filterFilms.length}</span> film bulundu
        </Typography>

        <SortSelect sortOrder={sortOrder} handleSortChange={handleSortChange} />
      </Box>

      <FilmList films={filterFilms} />

      {filterFilms.length < totalCount && hasMore ? (
        <LoadMoreButton
          onLoadMore={loadMoreFilms}
          isVisible={filterFilms.length > 0 && filterFilms.length < totalCount && !loading && hasMore}
        />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
          <Info sx={{ color: '#2196F3', mr: 1 }} />
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'gray' }}>
            Tüm filmler listelendi
          </Typography>
        </Box>
      )}

    </Box>
  );
};

export default FilmListPage;
