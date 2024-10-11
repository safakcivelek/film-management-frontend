import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useFilms } from '../../contextApi/HomePageFilmContext';

const BackgroundImage = () => {
    const { selectedFilm } = useFilms();
    const [currentImage, setCurrentImage] = useState(selectedFilm.image);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        setFading(true);
        const timeout = setTimeout(() => {
            setCurrentImage(selectedFilm.image);
            setFading(false);
        }, 600); // Solma süresi

        return () => clearTimeout(timeout);
    }, [selectedFilm]);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: { xs: '1080px', md: '1080px' },
                backgroundImage: `
                    radial-gradient(circle at center, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.85) 85%), 
                    url(${currentImage})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
                filter: 'brightness(70%)',
                transition: 'opacity 1s ease-in-out', // Yumuşak solma
                opacity: fading ? 0 : 1, // Solma efekti
            }}
        />
    );
};

export default BackgroundImage;//Kabul gören.1
