import * as React from 'react';
import { Grid, Box, Button, Typography } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import CustomSelect from './CustomSelect';
import '../../css/globalStyles.css';
import fakeFilms from '../../data/fakeFilms';
import fakeGenres from '../../data/fakeGenres';
import fakeYears from '../../data/fakeYears';
import fakeDurations from '../../data/fakeDurations';
import fakeIMDBScores from '../../data/fakeIMDBScores';

const FilmListPage = () => {
  const [genre, setGenre] = React.useState('');
  const [year, setYear] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [imdb, setIMDB] = React.useState('');
  const [visibleFilms, setVisibleFilms] = React.useState(12);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setVisibleFilms(6);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setVisibleFilms(6);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setVisibleFilms(6);
  };

  const handleIMDBChange = (event) => {
    setIMDB(event.target.value);
    setVisibleFilms(6);
  };

  const handleLoadMore = () => {
    setVisibleFilms((prevVisibleFilms) => prevVisibleFilms + 6);
  };

  const getIMDBThreshold = (imdb) => {
    if (!imdb) return 0;
    return parseFloat(imdb.split(' ')[0]);
  };

  const filteredFilms = fakeFilms.filter(film =>
    (genre ? film.genre === genre : true) &&
    (year ? film.year === year : true) &&
    (duration ? film.duration === duration : true) &&
    (imdb ? parseFloat(film.imdb) >= getIMDBThreshold(imdb) : true)
  );

  const visibleFilteredFilms = filteredFilms.slice(0, visibleFilms);

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 20 }, py: 4 }}>
      <Box sx={{ backgroundColor: '#1E1F29', p: 0, mt: 4, borderRadius: 1.5, border: '1px solid rgb(41 41 55)', }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={2.9} >
            <CustomSelect label="Film Türü" value={genre} handleChange={handleGenreChange} options={fakeGenres} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.9}>
            <CustomSelect label="Film Yılı" value={year} handleChange={handleYearChange} options={fakeYears} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.9}>
            <CustomSelect label="Film Süresi" value={duration} handleChange={handleDurationChange} options={fakeDurations} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.9} >
            <CustomSelect label="IMDB Puanı" value={imdb} handleChange={handleIMDBChange} options={fakeIMDBScores} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Toplam <span style={{ color: '#D10024' }}>{filteredFilms.length}</span> film bulundu
        </Typography>
      </Box>

      <Grid container spacing={2} rowSpacing={6}>
        {visibleFilteredFilms.map((film, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <ActionAreaCard
              title={film.title}
              description={film.description}
              image={film.image}
              year={film.year}
              imdb={film.imdb}
            />
          </Grid>
        ))}
      </Grid>

      {visibleFilms < filteredFilms.length && (
        <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              color: 'white',
              borderColor: '#D10024',
              backgroundColor: '#15161D',
              padding: '8px 24px',
              borderWidth: '2px',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1E1F29',
                borderColor: '#D10024',
              },
            }}
            onClick={handleLoadMore}
          >
            Daha fazla
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FilmListPage;
