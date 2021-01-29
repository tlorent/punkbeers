import { useEffect } from 'react';
import { useDispatch } from '../BeerContext';

const useLocalStorageBeers = (): void => {
    const dispatch = useDispatch();

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
