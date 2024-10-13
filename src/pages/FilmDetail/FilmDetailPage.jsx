import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import FilmDetailsCard from './FilmDetailsCard';
import FilmVideoPlayer from './FilmVideoPlayer';
import { useFilmDetail } from '../../contextApi/FilmDetailContext';
import PurchaseService from '../../services/purchaseService';
import ConfirmationDialog from './ConfirmationDialog';
import LoginDialog from './LoginDialog';
import SuccessDialog from './SuccessDialog';
import { useAuth } from '../../contextApi/AuthContext';
import FilmRatingService from '../../services/filmRatingService';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner';

const FilmDetailPage = () => {
    const { film, loading, error, isPurchased, fetchFilmDetail } = useFilmDetail();
    const { user } = useAuth();
    const [alertMessage, setAlertMessage] = React.useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const handleBuyClick = () => {
        if (user) {
            setOpenConfirmDialog(true);
        } else {
            setOpenDialog(true);
        }
    };

    const handleConfirmPurchase = async () => {
        try {
            const response = await PurchaseService.purchaseFilm(film.id)
            setOpenConfirmDialog(false);
            setOpenSuccessDialog(true);
            // Satın alındı durumunu günceller
            await fetchFilmDetail();
        } catch (error) {
            console.error('Satın alma işlemi başarısız:', error);
            setAlertMessage('Satın alma işlemi başarısız. Lütfen tekrar deneyin.');
            setOpenConfirmDialog(false);
            setOpenDialog(true);
        }
    };

    const handleRatingSubmit = async (rating) => {
        try {
            if (!user) {
                alert("Puanlama yapabilmek için giriş yapmalısınız.");
                return;
            }
            const requestData = {
                userId: user.id,
                filmId: film.id,
                rating,
            };

            // Puanı API'ye gönder
            await FilmRatingService.submitRating(requestData);
            toast.success("Puanınız kaydedildi!");

        } catch (error) {
            console.error("Puanlama hatası:", error);
            alert("Puanlama sırasında bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setOpenConfirmDialog(false);
        setOpenSuccessDialog(false);
    };
    
    if (loading) { return <LoadingSpinner />;} 

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
                onBuyClick={handleBuyClick}
                alertMessage={alertMessage}
            />
            <FilmVideoPlayer
                videoUrl={film.video}
                videoRef={videoRef}
                isPurchased={isPurchased}
                filmImage={film.image}
                filmId={film.id}
                averageRating={film.score}
                handleRatingSubmit={handleRatingSubmit}
            />

            <LoginDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                action="purchase"
            />

            <ConfirmationDialog
                open={openConfirmDialog}
                handleClose={handleCloseDialog}
                handleConfirm={handleConfirmPurchase}
                action="purchase"
            />

            <SuccessDialog
                open={openSuccessDialog}
                handleClose={handleCloseDialog}
                action="purchase"
            />
        </Container>
    );
};

export default FilmDetailPage;
