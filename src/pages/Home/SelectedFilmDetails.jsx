import React from 'react';
import { Box, Paper, Grid, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import { useFilms } from '../../contextApi/HomePageFilmContext';
import formatDuration from '../../utils/formatDuration';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SelectedFilmDetails = ({ handleWatchNow }) => {
    const { selectedFilm } = useFilms();

    const filmScore = selectedFilm.score && selectedFilm.score > 0 ? selectedFilm.score : "Puan Yok";

    return (
        <Box 
          sx={{ 
            flexGrow: 1, 
            ml: { xs: 0, md: 10 }, 
            mt: { xs: 4, md: 0 }, 
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'flex-start' }, // Mobilde ortalama
            alignItems: 'center', // İçeriği ortalamak için
            textAlign: { xs: 'center', md: 'left' }, // Mobilde metinleri ortalama
          }}
        >
            <Paper sx={{
                p: { xs: 2, md: 2 },
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                width: '100%',
                maxWidth: '600px',
                height: { xs: 'auto', md: '250px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' }, // Mobilde içerikleri ortala
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 1,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: { xs: '1.5rem', md: '2rem' }
                            }}
                        >
                            {selectedFilm.name}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            {selectedFilm.genres?.length > 0 ? (
                                selectedFilm.genres.map((genre, index) => (
                                    <Box
                                        key={index}
                                        sx={{ display: 'flex', alignItems: 'center', mr: 2, mb: 1 }}
                                    >
                                        <Box
                                            sx={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: '#D10024',
                                                borderRadius: '50%',
                                                mr: 1
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '0.875rem', md: '1rem' },
                                                fontWeight: 'normal',
                                                color: 'white',
                                                textTransform: 'none'
                                            }}
                                        >
                                            {genre.name}
                                        </Typography>
                                    </Box>
                                ))
                            ) : (
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                        fontWeight: 'normal',
                                        color: 'white',
                                        textTransform: 'none'
                                    }}
                                >
                                    Bilinmeyen Tür
                                </Typography>
                            )}
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: { xs: '0.875rem', md: '1rem' }
                            }}
                        >
                            {selectedFilm.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <StarIcon sx={{ color: '#FFD700',fontSize: 18, mr: 1 }} />
                            <Typography variant="body1" sx={{ mr: 3 }}>
                                {filmScore}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccessTimeIcon sx={{ color: '#FFD700', fontSize: 18, mr: 1 }} />
                                <Typography variant="body1">
                                    {formatDuration(selectedFilm.duration)}
                                </Typography>
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            startIcon={<PlayArrowIcon />}
                            sx={{
                                backgroundColor: '#D10024',
                                '&:hover': { backgroundColor: '#B0001B' },
                                width: { xs: '100%', md: 'auto' }
                            }}
                            onClick={handleWatchNow}
                        >
                            Şimdi İzle
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default SelectedFilmDetails;
