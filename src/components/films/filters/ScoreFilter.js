import React from 'react';
import FilterSelect from '../FilterSelect';

const ScoreFilter = ({ score, handleScoreChange }) => {
  const scoreOptions = [1, 2, 3, 4, 5].map((scoreValue) => ({
    label: scoreValue.toString(),
    value: scoreValue.toString()
  }));

  return (
    <FilterSelect
      label="Film Puanı"
      value={score}
      handleChange={handleScoreChange}
      options={scoreOptions}
    />
  );
};

export default ScoreFilter;
