import * as React from 'react';
import { Grid, Box, Button } from '@mui/material';
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
  const [visibleFilms, setVisibleFilms] = React.useState(8);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setVisibleFilms(4);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setVisibleFilms(4);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setVisibleFilms(4);
  };

  const handleIMDBChange = (event) => {
    setIMDB(event.target.value);
    setVisibleFilms(4);
  };

  const handleLoadMore = () => {
    setVisibleFilms((prevVisibleFilms) => prevVisibleFilms + 4);
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
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect label="Film Türü" value={genre} handleChange={handleGenreChange} options={fakeGenres} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect label="Film Yılı" value={year} handleChange={handleYearChange} options={fakeYears} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect label="Film Süresi" value={duration} handleChange={handleDurationChange} options={fakeDurations} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect label="IMDB Puanı" value={imdb} handleChange={handleIMDBChange} options={fakeIMDBScores} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {visibleFilteredFilms.map((film, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ActionAreaCard title={film.title} description={film.description} image={film.image} />
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
              padding: '12px 36px',
              borderWidth: '2px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#1E1F29',
                borderColor: '#D10024',
              },
            }}
            onClick={handleLoadMore}
          >
            Daha Fazla
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FilmListPage;
