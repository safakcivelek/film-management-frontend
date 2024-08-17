import { createContext, useContext, useEffect, useState } from "react";
import FilmService from "../services/filmService";

const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const responseData = await FilmService.getAll();// Son 6 film olarak güncellenebilir.
                setFilms(responseData.data || []);
                setSelectedFilm(responseData.data[0] || null);
            } catch (error) {
                setError(`İstek başarısız oldu (Durum Kodu: ${error.response?.status})`);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, [])

    return (
        <FilmContext.Provider value={{ films, selectedFilm, setSelectedFilm, loading, error }}>
            {children}
        </FilmContext.Provider>
    );
};
export const useFilms = () => useContext(FilmContext);