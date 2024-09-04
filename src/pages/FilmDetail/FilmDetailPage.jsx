import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import FilmDetailsCard from './FilmDetailsCard';
import FilmVideoPlayer from './FilmVideoPlayer';
import PurchaseDialog from './PurchaseDialog';
import ConfirmPurchaseDialog from './ConfirmPurchaseDialog';
import SuccessPurchaseDialog from './SuccessPurchaseDialog';
import { useFilmDetail } from '../../contextApi/FilmDetailContext';
import PurchaseService from '../../services/purchaseService';

const FilmDetailPage = () => {
    const { film, loading, error,isPurchased, fetchFilmDetail } = useFilmDetail();
    const [alertMessage, setAlertMessage] = React.useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const handleBuyClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
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

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setOpenConfirmDialog(false);
        setOpenSuccessDialog(false);
    };

    const handleLogin = () => {
        setOpenDialog(false);
        navigate('/login');
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
            />

            <PurchaseDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                message={alertMessage}
                handleLogin={handleLogin}
            />

            <ConfirmPurchaseDialog
                open={openConfirmDialog}
                handleClose={handleCloseDialog}
                handleConfirm={handleConfirmPurchase}
            />

            <SuccessPurchaseDialog
                open={openSuccessDialog}
                handleClose={handleCloseDialog}
            />
        </Container>
    );
};

export default FilmDetailPage;
