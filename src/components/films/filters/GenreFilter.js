import React from 'react';
import FilterSelect from '../FilterSelect';

const GenreFilter = ({ genre, handleGenreChange }) => {
  const genreOptions = [
    { label: 'Fantastik', value: 'Fantastik' },
    { label: 'Bilim Kurgu', value: 'Bilim Kurgu' },
    { label: 'Dram', value: 'Dram' },
    { label: 'Aksiyon', value: 'Aksiyon' }
  ];

  return (
    <FilterSelect
      label="Film Türü"
      value={genre}
      handleChange={handleGenreChange}
      options={genreOptions}
    />
  );
};

export default GenreFilter;
