import { createContext, useContext, useEffect, useState } from "react";
import FilmService from "../services/filmService";
import { toast } from "react-toastify";


const FilmContext = createContext();
export const useFilms = () => useContext(FilmContext);

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFilms = async () => {
            setLoading(true);
            setError(null); //önceki hataları temizle
            try {
                const data = await FilmService.getAll();
                setFilms(data);
            } catch (error) {
                console.error("Filmler yüklenirken bir hata oluştu");
                setError("Filmleri yüklerken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz."); // Genel bir hata mesajı
                toast.error("Filmler yüklenirken bir hata oluştu: " + (error.response ? error.response.data.message : error.message));
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, [])

    return (
        <FilmContext.Provider value={{ films, loading, error }}>
            {children}
        </FilmContext.Provider>
    );
};