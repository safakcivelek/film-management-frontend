import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import FilmService from '../../services/filmService';
import FilmDetailsCard from './FilmDetailsCard';
import FilmVideoPlayer from './FilmVideoPlayer';

const FilmDetailPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchFilmDetail = async () => {
            try {
                const responseData = await FilmService.getById(id);
                setFilm(responseData.data); 
            } catch (error) {
                setError('Film detayları alınırken bir hata oluştu.');
            } finally {
                setLoading(false);
            }
        };

        fetchFilmDetail();
    }, [id]);

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
            <FilmDetailsCard film={film} onWatchClick={handleWatchClick} />
            <FilmVideoPlayer videoUrl={film.video} videoRef={videoRef} />
        </Container>
    );
};

export default FilmDetailPage;
