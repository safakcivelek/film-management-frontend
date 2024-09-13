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

    const updateURL = (newFilters, newSortOrder) => {
        const query = queryString.stringify({
          genre: newFilters.genre || undefined, 
          yearRange: (newFilters.yearRange && newFilters.yearRange.start && newFilters.yearRange.end)
            ? JSON.stringify(newFilters.yearRange) 
            : undefined, 
          durationRange: (newFilters.durationRange && newFilters.durationRange.min && newFilters.durationRange.max)
            ? JSON.stringify(newFilters.durationRange) 
            : undefined, // Eğer durationRange dolu değilse ekleme
          score: newFilters.score || undefined, // Eğer score boşsa ekleme
          sort: newSortOrder || undefined, 
        }, { skipNull: true }); // Boş (null) değerleri atlar
      
        navigate(`/films?${query}`);
      };
      

    const getQueryParams = () => {
        return queryString.parse(location.search);
    };

    return (
        <FilmFilterContext.Provider value={{ filterFilms, fetchFilteredFilms, loading, error,hasMore, updateURL, getQueryParams  }}>
            {children}
        </FilmFilterContext.Provider>
    );
}

export const useFilteredFilms = () => useContext(FilmFilterContext);
