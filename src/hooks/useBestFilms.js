import { useState, useEffect, useCallback } from 'react';
import FilmService from '../services/filmService';

const useBestFilms = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  // Veri çekme 
  const fetchBestFilms = useCallback(async () => {
    const data = {
      start: 0,
      limit: 12,
      dynamicQuery: {
        sort: [{ field: 'score', dir: 'desc' }]
      }
    };
    try {
      const response = await FilmService.getFilteredFilms(data);
      setFilms(response.data || []);
    } catch (err) {
      setError(`İstek başarısız oldu (Best Films) (Durum Kodu: ${err.response?.status})`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Hook'un başlangıçta çalışması için 
  useEffect(() => {
    fetchBestFilms();
  }, [fetchBestFilms]);

  return { films, loading, error };
};

export default useBestFilms;
