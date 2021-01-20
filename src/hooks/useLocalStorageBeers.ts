import { useContext, useEffect } from 'react';
import { BeerDispatchContext } from '../BeerContext';

const useLocalStorageBeers = (): void => {
    const dispatch = useContext(BeerDispatchContext);

    useEffect(() => {
        const storage = localStorage.getItem('favBeers');

        if (storage) {
            dispatch({
                type: 'POPULATE_FAV',
                beers: JSON.parse(storage),
            });
        }
    }, [dispatch]);
};

export default useLocalStorageBeers;
