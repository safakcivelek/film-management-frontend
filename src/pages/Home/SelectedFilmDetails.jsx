import React from 'react';
import { Box, Paper, Grid, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import { useFilms } from '../../contextApi/HomePageFilmContext';

const SelectedFilmDetails = ({ handleWatchNow }) => {
    const { selectedFilm } = useFilms();
    const genreName = selectedFilm.genres?.length > 0 ? selectedFilm.genres[0].name : "Bilinmeyen Tür";
    return (
        <Box sx={{ flexGrow: 1, ml: { xs: 0, md: 10 }, mt: { xs: 4, md: 0 } }}>
            <Paper sx={{
                p: { xs: 2, md: 2 },
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                width: '100%',
                maxWidth: '600px',
                height: { xs: 'auto', md: '250px' }
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
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                                {genreName}
                            </Typography>
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
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <StarIcon sx={{ color: '#FFD700', mr: 1 }} />
                            <Typography variant="body1" sx={{ mr: 2 }}>
                                {selectedFilm.score}
                            </Typography>
                            <Typography variant="body1">
                                {selectedFilm.duration}
                            </Typography>
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
