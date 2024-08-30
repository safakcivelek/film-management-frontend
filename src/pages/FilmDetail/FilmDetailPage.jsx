import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import FilmService from '../../services/filmService';
import FilmDetailsCard from './FilmDetailsCard';
import FilmVideoPlayer from './FilmVideoPlayer';
import PurchaseService from '../../services/purchaseService';

const FilmDetailPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPurchased, setIsPurchased] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchFilmDetail = async () => {
            try {
                const responseData = await FilmService.getById(id);
                setFilm(responseData.data); 

                // Filmin satın alınıp alınmadığını kontrol ediyoruz
                const purchaseResponse = await PurchaseService.checkIfPurchased(id);
                setIsPurchased(purchaseResponse.data);

            } catch (error) {
                setError('Film detayları alınırken bir hata oluştu.');
            } finally {
                setLoading(false);
            }
        };

        fetchFilmDetail();
    }, [id]);

    const handleBuyClick = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const responseData = await PurchaseService.purchaseFilm(film.id);
                setAlertMessage("Film başarıyla satın alındı!");
                setIsPurchased(true); // Satın alma sonrası durumu güncelle
            } catch (error) {
                console.error('Satın alma işlemi başarısız:', error);
                setAlertMessage('Satın alma işlemi başarısız. Lütfen tekrar deneyin.');
            }
        } else {
            setAlertMessage('Filmi satın almak için giriş yapmalısınız!');
           
        }
    };

    if (loading) {
        return <Typography variant="h6" component="div" sx={{ color: 'white' }}>Yükleniyor...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" component="div" sx={{ color: 'white' }}>{error}</Typography>;
    }

    if (!film) {
        return <Typography variant="h6" component="div" sx={{ color: 'white' }}>Film bulunamadı</Typography>;
    }

    const handleWatchClick = () => {
        if (videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 4 }}>
            <FilmDetailsCard
                film={film}
                onWatchClick={handleWatchClick}
                isPurchased={isPurchased} 
                onBuyClick={handleBuyClick} // Satın alma işlemi için prop geç
                alertMessage={alertMessage} // Uyarı mesajını geç
            />
            <FilmVideoPlayer videoUrl={film.video} videoRef={videoRef} isPurchased={isPurchased} filmImage={film.image}  />
        </Container>
    );
};

export default FilmDetailPage;
