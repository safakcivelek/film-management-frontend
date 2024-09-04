// src/contextApi/FilmDetailContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import FilmRatingService from '../services/filmRatingService';
import { useParams } from 'react-router-dom';
import FilmService from '../services/filmService';
import PurchaseService from '../services/purchaseService';

const FilmDetailContext = createContext();

export const FilmDetailProvider = ({ children }) => {
    const { id } = useParams(); // Film ID'sini URL'den al
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPurchased, setIsPurchased] = useState(false);

    // Film detayını getiren fonksiyon
    const fetchFilmDetail = async () => {
        try {
            const response = await FilmService.getById(id);
            setFilm(response.data);

            // Kullanıcının token'i var mı kontrol et
            const token = localStorage.getItem('token');
            if(token){
                 // Film satın alındı mı kontrol et
                 const purchaseResponse = await PurchaseService.checkIfPurchased(id);
                 setIsPurchased(purchaseResponse.data); // Satın alınma durumunu güncelle
            } else {
                setIsPurchased(false); 
            }
        } catch (error) {
            console.error("Film detayları alınırken bir hata oluştu:", error);
            setError("Film detayları alınırken bir hata oluştu.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFilmDetail(); 
    }, [id]);

    return (
        <FilmDetailContext.Provider value={{ film, loading, error,isPurchased, fetchFilmDetail }}>
            {children}
        </FilmDetailContext.Provider>
    );
};

export const useFilmDetail = () => {
    return useContext(FilmDetailContext);
};
