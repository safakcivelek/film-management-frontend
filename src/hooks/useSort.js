import { useState } from "react";

const useSort = () => {
    const [sortOptions, setSortOptions] = useState({
        field: '',
        dir: '',
    });

    const updateSort = (newSortOptions) => {
        setSortOptions(prevSort => ({
            ...prevSort,
            ...newSortOptions
        }));
    };

    const getDynamicSortQuery = () => {
        if (!sortOptions.field) return null;
        return [{ field: sortOptions.field, dir: sortOptions.dir || 'asc' }];
    };

    return { sortOptions, updateSort, getDynamicSortQuery };
};

export default useSort;
