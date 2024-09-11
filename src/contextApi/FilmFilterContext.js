import { createContext, useContext, useState } from "react";
import FilmService from '../services/filmService';

const FilmFilterContext = createContext();

export const FilmFilterProvider = ({ children }) => {
    const [filterFilms, setFilterFilms] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true); 

    const fetchFilteredFilms = async (start, limit, dynamicQuery) => {
        setLoading(true);
        try {
            const data = { start, limit, dynamicQuery };
            const responseData = await FilmService.getFilteredFilms(data);

        setFilterFilms(prevFilms => start === 0 ? responseData.data || [] : [...prevFilms, ...(responseData.data || [])]);
                
         const totalCount = responseData.totalCount;
         const currentTotal = start + responseData.data.length;
        
         if (currentTotal >= totalCount) {
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

    return (
        <FilmFilterContext.Provider value={{ filterFilms, fetchFilteredFilms, loading, error,hasMore }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
