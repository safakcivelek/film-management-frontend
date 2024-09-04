import React from 'react';
import FilmDetailPage from './FilmDetailPage';
import { FilmDetailProvider } from '../../contextApi/FilmDetailContext';

const FilmDetail = () => {
    return (
        <FilmDetailProvider>
            <FilmDetailPage />
        </FilmDetailProvider>
    );
};

export default FilmDetail;
