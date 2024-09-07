import { useCallback, useEffect } from "react";
import  FilmService  from "../services/filmService";
import { useState } from "react";

const usePopularFilms = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [films, setFilms] = useState([]);

    const fetchPopularFilms = useCallback (async () =>{
        const data ={
            start:0,
            limit:12,
            dynamicQuery:{
                sort:[{field: 'createdDate',dir:'desc'}]
            }
        };
        try{
            const response = await FilmService.getFilteredFilms(data);
            setFilms(response.data || []);
        } catch (err){
            setError(`İstek başarısız oldu (Popular Films) (Durum Kodu: ${err.response?.status})`);
        } finally {
            setLoading(false);
        }
    },[]);

    useEffect(() =>{
        fetchPopularFilms();
    },[fetchPopularFilms]);

    return { films,loading,error};
}
export default usePopularFilms;