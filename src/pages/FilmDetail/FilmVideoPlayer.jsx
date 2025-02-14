import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import StarRatingComponent from '../../components/StarRating';
import { useAuth } from '../../contextApi/AuthContext';

const FilmVideoPlayer = ({ videoUrl, videoRef, isPurchased, filmImage,handleRatingSubmit }) => {
  const { user } = useAuth();

  return (
    <Paper ref={videoRef} sx={{ p: 3, backgroundColor: '#1E1F29', color: 'white', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" component="div" sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          mb: { xs: 2, sm: 0 }, 
          textAlign: { xs: 'center', sm: 'left' },
          display: { xs: 'none', sm: 'block' }, // Mobilde gizlenir
        }}>
          Filmi İzle
        </Typography>
        <StarRatingComponent onRatingSelect={handleRatingSubmit} />
      </Box>
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
                filter: 'brightness(0.4) blur(3px)',
                zIndex: 1,
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
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))',
                zIndex: 2,
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
                zIndex: 3,
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
                zIndex: 3,
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
