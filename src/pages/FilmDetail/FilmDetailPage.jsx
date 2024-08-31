import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import FilmService from '../../services/filmService';
import FilmDetailsCard from './FilmDetailsCard';
import FilmVideoPlayer from './FilmVideoPlayer';
import PurchaseService from '../../services/purchaseService';
import PurchaseDialog from './PurchaseDialog';
import ConfirmPurchaseDialog from './ConfirmPurchaseDialog';
import SuccessPurchaseDialog from './SuccessPurchaseDialog ';


const FilmDetailPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPurchased, setIsPurchased] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false); 
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFilmDetail = async () => {
            try {
                const responseData = await FilmService.getById(id);
                setFilm(responseData.data);

                const token = localStorage.getItem('token');
                if (token) {
                    const purchaseResponse = await PurchaseService.checkIfPurchased(id);
                    setIsPurchased(purchaseResponse.data);
                } else {
                    setIsPurchased(false);
                }
            } catch (error) {
                setError('Film detayları alınırken bir hata oluştu.');
            } finally {
                setLoading(false);
            }
        };

        fetchFilmDetail();
    }, [id]);

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
            const responseData = await PurchaseService.purchaseFilm(film.id);
            
            setIsPurchased(true);
            setOpenConfirmDialog(false); 
            setOpenSuccessDialog(true); 
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
            <FilmVideoPlayer videoUrl={film.video} videoRef={videoRef} isPurchased={isPurchased} filmImage={film.image} />

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
