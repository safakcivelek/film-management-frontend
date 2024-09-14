import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useFilteredFilms } from "../../contextApi/FilmFilterContext";
import FilmList from '../../components/films/FilmList';
import FilmFilter from '../../components/films/FilmFilter';
import SortSelect from '../../components/films/SortSelect';
import LoadMoreButton from '../../components/films/LoadMoreButton';
import useFilmFilter from '../../hooks/useFilmFilter';
import useSort from '../../hooks/useSort';
import { useLocation } from 'react-router-dom';
import { Info } from '@mui/icons-material';


const SearchPage = () => {
    const { filterFilms, fetchFilteredFilms, loading, error, hasMore, totalCount } = useFilteredFilms();
    const { filters, updateFilters, getDynamicFilterQuery } = useFilmFilter();
    const { sortOptions, updateSort, getDynamicSortQuery } = useSort();
    const [sortOrder, setSortOrder] = useState('');
    const [start, setStart] = useState(0);
    const limit = 6;
    const location = useLocation(); // URL'den parametreleri almak için

    // URL'den arama terimini al
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q'); // URL'deki 'q' parametresini alıyoruz

    // URL parametrelerini alıp filtreleri ve sıralamayı uygula
    useEffect(() => {
        if (searchTerm) {
            // Dinamik sorgu oluştur ve arama terimini filtreye ekle
            const dynamicFilter = getDynamicFilterQuery();
            const dynamicSort = getDynamicSortQuery();
            const dynamicQuery = {
                filter: { ...dynamicFilter, field: 'Name', operator: 'contains', value: searchTerm },
                sort: dynamicSort,
            };

            fetchFilteredFilms(0, limit, dynamicQuery);
            setStart(0); // Yükleme başlangıcını sıfırla
        }
    }, [searchTerm, filters, sortOptions]); // searchTerm ve filtreler değiştiğinde tetiklenir

    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
        updateSort({ field: 'name', dir: newSortOrder === 'az' ? 'asc' : 'desc' });
    };

    const handleFilterChange = (newFilters) => {
        updateFilters(newFilters);
    };

    // Load more butonuna tıklandığında çağrılacak fonksiyon
    const loadMoreFilms = () => {
        const dynamicFilter = getDynamicFilterQuery();
        const dynamicSort = getDynamicSortQuery();
        // Arama terimini de filtreye dahil ediyorum
        const dynamicQuery = {
            filter: { ...dynamicFilter, field: 'Name', operator: 'contains', value: searchTerm },
            sort: dynamicSort,
        };

        fetchFilteredFilms(start + limit, limit, dynamicQuery);
        setStart(prevStart => prevStart + limit);
    };

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>Hata: {error}</p>;

    return (
        <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
            {/* Filtreleme barları */}
            <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)' }}>
                <FilmFilter filters={filters} updateFilters={handleFilterChange} />
            </Box>

            <Box sx={{ mb: 3, mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography component="div" sx={{ color: 'white', fontSize: '1.1rem' }}>
                    "<span style={{ color: '#D10024' }}>{searchTerm}</span>" için arama sonuçları... ({totalCount})
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
                    <Typography  sx={{ textAlign: 'center', color: 'gray',fontSize:'1.1rem' }}>
                        Tüm arama sonuçları listelendi
                    </Typography>
                </Box>
            )}

        </Box>
    );
};

export default SearchPage;
