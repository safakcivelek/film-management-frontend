import React from 'react';
import { CardMedia, Typography, Box, Grid, Button, Paper, Alert, AlertTitle } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const FilmDetailsCard = ({ film, onWatchClick, isPurchased, onBuyClick, alertMessage }) => {
    const directorName = film.director ? `${film.director.firstName} ${film.director.lastName}` : 'Bilinmiyor';
    const actorNames = film.actors ? film.actors.map(actor => `${actor.firstName} ${actor.lastName}`).join(', ') : 'Bilinmiyor';
    const genreNames = film.genres ? film.genres.map(genre => genre.name).join(', ') : 'Bilinmiyor';

    const navigate = useNavigate();

    return (
        <Paper sx={{ p: 0, backgroundColor: '#1E1F29', color: 'white', mb: 4 }}>
            <Grid container spacing={0} justifyContent="center">
                <Grid item xs={12} md={4} sx={{ padding: 0, mt: 0, width: '100%' }}>
                    <CardMedia
                        component="img"
                        image={film.image}
                        alt={film.name}
                        sx={{ width: '100%', height: '560px', objectFit: 'cover', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                    />
                </Grid>
                <Grid item xs={2} md={0.5}></Grid>
                <Grid item xs={12} md={7.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 3 }}>
                    <Typography variant="h3" component="div" sx={{ mb: 4, fontWeight: 'bold' }}>
                        {film.name}
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
                            <Typography variant="body2" sx={{ ml: 1, whiteSpace: 'nowrap' }}>{film.duration} dk</Typography>
                        </Grid>
                        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                            <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ ml: 1 }}>{film.score || 'N/A'}</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                            Tür:
                        </Typography>
                        <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                            {genreNames}
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                            Yönetmen:
                        </Typography>
                        <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                            {directorName}
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 1, mb: 2 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: '#E0E0E0' }}>
                            Oyuncular:
                        </Typography>
                        <Typography variant="body2" component="span" sx={{ color: '#FFD700', ml: 1 }}>
                            {actorNames}
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            my: 3,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            textOverflow: 'ellipsis',
                            height: '4.5em'
                        }}
                    >
                        {film.description}
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 6 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                startIcon={<PlayArrowIcon />}
                                sx={{ width: '100%', maxWidth: '280px', backgroundColor: '#D10024', '&:hover': { backgroundColor: '#B0001B' } }}
                                onClick={onWatchClick}
                            >
                                İzle
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="outlined"
                                startIcon={isPurchased ? <EventAvailableIcon /> : <ShoppingCartIcon />} 
                                sx={{ 
                                    width: '100%', 
                                    maxWidth: '280px', 
                                    borderColor: isPurchased ? '#4CAF50' : '#D10024',  
                                    color: isPurchased ? '#FFFFFF !important' : '#D10024',  
                                    backgroundColor: isPurchased ? '#4CAF50' : 'transparent', 
                                    '&:hover': { 
                                        backgroundColor: isPurchased ? '#4CAF50' : '#D10024', 
                                        color: 'white' 
                                    } 
                                }}
                                onClick={onBuyClick} 
                                disabled={isPurchased}  
                            >
                                {isPurchased ? 'Satın Alındı' : 'Satın Al'}  
                            </Button>
                        </Grid>
                    </Grid>
                    {alertMessage && (
                        <Alert severity={alertMessage.includes('başarısız') ? 'warning' : 'success'} sx={{ mt: 2 }}>
                            <AlertTitle>{alertMessage}</AlertTitle>
                            {alertMessage === 'Filmi satın almak için giriş yapmalısınız!' && (
                                <Button variant='outlined' onClick={() => navigate('/login')}>
                                    Giriş Yap
                                </Button>
                            )}
                        </Alert>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FilmDetailsCard;
