import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CardMedia, Typography, Box, Grid, Button, Paper, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import fakeFilms from '../../data/fakeFilms';

const FilmDetail = () => {
    const { id } = useParams();
    const film = fakeFilms.find(film => film.id === parseInt(id));
    const videoRef = useRef(null);

    if (!film) {
        return <Typography variant="h6" component="div" sx={{ color: 'white' }}>Film bulunamadı</Typography>;
    }

    const handleWatchClick = () => {
        if (videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ py: 4, mt: 4 }}>
                <Paper sx={{ p: 0, backgroundColor: '#1E1F29', color: 'white' }}>
                    <Grid container spacing={0} justifyContent="center"> 
                        <Grid item xs={12}>
                            <Grid container spacing={1} justifyContent="center"> 
                                <Grid item xs={12} md={5} sx={{ padding: 0,mt:0 }}>
                                    <CardMedia
                                        component="img"
                                        image={film.image}
                                        alt={film.title}
                                        sx={{ width: { xs: '100%', md: 410 }, height: { xs: 'auto', md: 560 }, objectFit: 'cover', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', pl: 4, pr: 4, pt: 4, pb: 4 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                        <Typography variant="h3" component="div" sx={{ mb: 6, fontWeight: 'bold' }}>
                                            {film.title}
                                        </Typography>
                                        <Grid container spacing={2} sx={{ mb: 3 }} alignItems="center">
                                            <Grid item sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{ backgroundColor: '#D10024', color: 'white', borderRadius: 0, border: '1px solid white', minWidth: 32, height: 24, padding: '0 8px', fontSize: '0.75rem', '&:hover': { backgroundColor: '#B0001B' } }}
                                                >
                                                    HD
                                                </Button>
                                            </Grid>
                                            <Grid item sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <EventAvailableIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ ml: 1 }}>{film.year}</Typography>
                                            </Grid>
                                            <Grid item sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <AccessTimeIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ ml: 1, whiteSpace: 'nowrap' }}>{film.duration}</Typography>
                                            </Grid>
                                            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                                <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ ml: 1 }}>{film.imdb}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                                                Tür:
                                            </Typography>
                                            <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                                                {film.genre}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                                                Yönetmen:
                                            </Typography>
                                            <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                                                {film.director}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: 1, mb: 2 }}>
                                            <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                                                Oyuncular:
                                            </Typography>
                                            <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                                                {film.actors.join(', ')}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" component="div" sx={{ my: 3 }}>
                                            {film.description}
                                        </Typography>
                                        <Grid container spacing={2} sx={{ mt: 2 }}>
                                            <Grid item xs={12} sm={6}>
                                                <Button
                                                    variant="contained"
                                                    startIcon={<PlayArrowIcon />}
                                                    sx={{ width: '100%', backgroundColor: '#D10024', '&:hover': { backgroundColor: '#B0001B' } }}
                                                    onClick={handleWatchClick}
                                                >
                                                    İzle
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Button
                                                    variant="outlined"
                                                    startIcon={<ShoppingCartIcon />}
                                                    sx={{ width: '100%', borderColor: '#D10024', color: '#D10024', '&:hover': { backgroundColor: '#D10024', color: 'white' } }}
                                                >
                                                    Satın Al
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper ref={videoRef} sx={{ p: 3, backgroundColor: '#1E1F29', color: 'white' }}>
                    <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                        Filmi İzle
                    </Typography>
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                        <iframe
                            src={film.videoUrl}
                            title={film.title}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: 2
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default FilmDetail;


