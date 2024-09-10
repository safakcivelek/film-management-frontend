import { useState } from "react";

const useFilmFilter = () => {
    const [filters, setFilters] = useState({
        genre: '',
        yearRange: { start: '', end: '' },
        durationRange: { min: '', max: '' },
        score: '',
    });

    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }));
    };

    const getDynamicFilterQuery = () => {
        const filter = {
            field: 'isactive',
            operator: 'eq',
            value: 'true',
            logic: 'and',
            filters: []
        };

        // Genre Filter
        if (filters.genre) {
            filter.filters.push({
                field: 'FilmGenres.Genre.Name',
                operator: 'eq',
                value: filters.genre,
                logic: 'and'
            });
        }

        // Year Range Filter
        if (filters.yearRange.start && filters.yearRange.end) {
            filter.filters.push({
                field: 'year',
                operator: 'gte',
                value: filters.yearRange.start,
                logic: 'and',
                filters: [{
                    field: 'year',
                    operator: 'lte',
                    value: filters.yearRange.end
                }]
            });
        }

        // Duration Range Filter
        if (filters.durationRange.min && filters.durationRange.max) {
            filter.filters.push({
                field: 'duration',
                operator: 'gte',
                value: filters.durationRange.min,
                logic: 'and',
                filters: [{
                    field: 'duration',
                    operator: 'lte',
                    value: filters.durationRange.max
                }]
            });
        }

        // Score Filter
        if (filters.score) {
            filter.filters.push({
                field: 'score',
                operator: 'eq',
                value: filters.score,
                logic: 'and'
            });
        }

        return filter;
    };

    return { filters, updateFilters, getDynamicFilterQuery };
};

export default useFilmFilter;
