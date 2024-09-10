import { createContext, useContext, useEffect, useState } from "react";
import FilmService from '../services/filmService';

const FilmFilterContext = createContext();

export const FilmFilterProvider = ({ children }) => {
    const [filterFilms, setFilterFilms] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFilteredFilms = async (start, limit, dynamicQuery) => {
        setLoading(true);
        try {
            const data = { start, limit, dynamicQuery };
            const responseData = await FilmService.getFilteredFilms(data);
            setFilterFilms(responseData.data || []);
        } catch (error) {
            setError(`İstek başarısız oldu: ${error.response?.status}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FilmFilterContext.Provider value={{ filterFilms, fetchFilteredFilms, loading, error }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
