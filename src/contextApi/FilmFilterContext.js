import { createContext, useContext, useState } from "react";
import FilmService from '../services/filmService';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';


const FilmFilterContext = createContext();

export const FilmFilterProvider = ({ children }) => {
    const [filterFilms, setFilterFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [totalCount, setTotalCount] = useState(0);


    const fetchFilteredFilms = async (start, limit, dynamicQuery) => {
        setLoading(true);
        try {
            const data = { start, limit, dynamicQuery };
            const responseData = await FilmService.getFilteredFilms(data);

            setFilterFilms(prevFilms => start === 0 ? responseData.data || [] : [...prevFilms, ...(responseData.data || [])]);
            setTotalCount(responseData.totalCount);

            const totalCount = responseData.totalCount;
            const currentTotal = start + responseData.data.length;

            if (currentTotal >= totalCount || responseData.data.length < limit) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        } catch (error) {
            setError(`İstek başarısız oldu: ${error.response?.status}`);
        } finally {
            setLoading(false);
        }
    };

    // Filtreler ve sıralama için URL'yi günceller
    const updateURL = (newFilters, newSortOrder) => {
        const query = queryString.stringify({
            genre: newFilters.genre || undefined,
            yearRange: (newFilters.yearRange && newFilters.yearRange.start && newFilters.yearRange.end)
                ? `${newFilters.yearRange.start}-${newFilters.yearRange.end}`
                : undefined,
            durationRange: (newFilters.durationRange && newFilters.durationRange.min && newFilters.durationRange.max)
                ? `${newFilters.durationRange.min}-${newFilters.durationRange.max}`
                : undefined,
            score: newFilters.score || undefined,
            sort: newSortOrder || undefined,
        }, { skipNull: true }); // Boş değerleri atla

        navigate(`/films?${query}`);
    };

    const getQueryParams = () => {
        const query = queryString.parse(location.search);

        return {
            ...query,
            yearRange: query.yearRange ? (() => {
                const [start, end] = query.yearRange.split('-'); // "-" ile ayır ve yıl aralığını nesneye dönüştür
                return { start, end };
            })() : undefined,
            durationRange: query.durationRange ? (() => {
                const [min, max] = query.durationRange.split('-'); // "-" ile ayır ve süre aralığını nesneye dönüştür
                return { min, max };
            })() : undefined,
        };
    };

    return (
        <FilmFilterContext.Provider value={{
            filterFilms,
            fetchFilteredFilms,
            loading, error,
            hasMore,
            updateURL, getQueryParams,
            totalCount
        }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
