import { createContext, useContext, useEffect, useState } from "react";
import FilmService from "../services/filmService";

const HomePageFilmContext = createContext();

export const HomePageFilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const responseData = await FilmService.getAll(0,6);
                setFilms(responseData.data || []);
                setSelectedFilm(responseData.data[0] || null);
            } catch (error) {
                setError(`İstek başarısız oldu(context Api) (Durum Kodu: ${error.response?.status})`);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, [])

    return (
        <HomePageFilmContext.Provider value={{ films, selectedFilm, setSelectedFilm, loading, error }}>
            {children}
        </HomePageFilmContext.Provider>
    );
};
export const useFilms = () => useContext(HomePageFilmContext);