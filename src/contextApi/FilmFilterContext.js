import { createContext, useContext, useEffect, useState } from "react";
import FilmService from '../services/filmService';

const FilmFilterContext = createContext();

export const FilmFilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        genre: '',
        year: '',
        duration: '',
        score: '',
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

            if (filters.genre) {
                filter.filters.push({
                    field: 'FilmGenres.Genre.Name',
                    operator: 'eq',
                    value: filters.genre,
                    logic: 'and'
                });
            }

            if (filters.year) {
                filter.filters.push({
                    field: 'year',
                    operator: 'eq',
                    value: filters.year,
                    logic: 'and'
                });
            }

            if (filters.duration) {
                filter.filters.push({
                    field: 'duration',
                    operator: 'eq',
                    value: filters.duration,
                    logic: 'and'
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

            const data = {
                start: 0,
                limit: 13,
                dynamicQuery: { filter }
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
    }, [filters]);

    return (
        <FilmFilterContext.Provider value={{ filters, updateFilters, filterFilms, loading, error }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
