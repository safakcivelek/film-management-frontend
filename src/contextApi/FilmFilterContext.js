import { createContext, useContext, useEffect, useState } from "react";
import FilmService from '../services/filmService';

const FilmFilterContext = createContext();

export const FilmFilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        genre: '',
        yearRange: { start: '', end: '' },
        durationRange: { min: '', max: '' },
        score: '',
    });

    const [sortOptions, setSortOptions] = useState({
        field: '', // Sıralama yapılacak alan
        dir: '',   // 'asc' veya 'desc' sıralama yönü
    });

    const [filterFilms, setFilterFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }));
    };

    const updateSort = (newSortOptions) => {
        setSortOptions(prevSort => ({
            ...prevSort,
            ...newSortOptions
        }));
    };

    const fetchFilteredFilms = async () => {
        setLoading(true);
        setFilterFilms([]);

        try {
            let filter = {
                field: 'isactive',
                operator: 'eq',
                value: 'true',
                logic: 'and',
                filters: []
            };

            // Genre filtresi
            if (filters.genre) {
                filter.filters.push({
                    field: 'FilmGenres.Genre.Name',
                    operator: 'eq',
                    value: filters.genre,
                    logic: 'and'
                });
            }

            // Year (yıl) aralığı filtresi
            if (filters.yearRange.start && filters.yearRange.end) {
                filter.filters.push({
                    field: 'year',
                    operator: 'gte',
                    value: filters.yearRange.start,
                    logic: 'and',
                    filters: [
                        {
                            field: 'year',
                            operator:'lte',
                            value: filters.yearRange.end
                        }
                    ]
                });
            }

           // Duration (süre) aralığı filtresi
           if (filters.durationRange.min && filters.durationRange.max) {
            filter.filters.push({
                field: 'duration',  // Süre alanı
                operator: 'gte',  // Min süre
                value: filters.durationRange.min,
                logic: 'and',
                filters: [
                    {
                        field: 'duration',  // Süre alanı
                        operator: 'lte',  // Max süre
                        value: filters.durationRange.max
                    }
                ]
            });
        }

            if (filters.score) {
                filter.filters.push({
                    field: 'score',
                    operator: 'eq',
                    value: filters.score,
                    logic: 'and'
                });
            }

            const dynamicQuery = {};

            // Boş olmayan sort alanını ekliyoruz
            if (sortOptions.field) {
                dynamicQuery.sort = [{
                    field: sortOptions.field,
                    dir: sortOptions.dir || 'asc'
                }];
            }

            // Eğer filter.filters boş değilse, filter alanını ekliyoruz
            if (filter.filters.length > 0) {
                dynamicQuery.filter = filter;
            }

            const data = {
                start: 0,
                limit: 12,
                dynamicQuery
            };

            const responseData = await FilmService.getFilteredFilms(data);
            setFilterFilms(responseData.data || []);
        } catch (error) {
            setError(`İstek başarısız oldu (FilmFilterContext) (Durum Kodu: ${error.response?.status})`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFilteredFilms();
    }, [filters, sortOptions]);

    return (
        <FilmFilterContext.Provider value={{ filters, updateFilters, sortOptions, updateSort, filterFilms, loading, error }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
