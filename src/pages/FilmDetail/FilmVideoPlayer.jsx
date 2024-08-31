import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded'; 

const FilmVideoPlayer = ({ videoUrl, videoRef, isPurchased, filmImage }) => {
    return (
        <Paper ref={videoRef} sx={{ p: 3, backgroundColor: '#1E1F29', color: 'white', position: 'relative' }}>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Filmi İzle
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                {!isPurchased && (
                    <>
                        <img
                            src={filmImage}
                            alt="Film Kapak"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: 2,
                                objectFit: 'cover',
                                filter: 'brightness(0.4) blur(3px)', // Hafif bulanıklık ve karartma
                                zIndex: 1, // Kilit ikonunun altında kalması için z-index ayarlandı
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: 2,
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))', // Karanlık geçiş eklendi
                                zIndex: 2, // Bu katman kilit ikonunun altında kalır
                            }}
                        />
                        <LockRoundedIcon
                            sx={{
                                position: 'absolute',
                                top: '40%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: 120, 
                                color: '#FFFFFF', 
                                zIndex: 3, // Kilit simgesi en üstte yer alır
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                position: 'absolute',
                                top: '58%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#FF3D00', 
                                fontWeight: 'bold',
                                fontFamily: 'Arial, sans-serif', 
                                textAlign: 'center',
                                zIndex: 3, // Yazı en üstte yer alır
                            }}
                        >
                            Filmi oynatmak için satın almalısınız
                        </Typography>
                    </>
                )}
                {isPurchased && (
                    <iframe
                        src={videoUrl || ''}
                        title="Film Video"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: 2,
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </Box>
        </Paper>
    );
};

export default FilmVideoPlayer;
