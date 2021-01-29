import React, { FC } from 'react';
import { useStore } from '../BeerContext';
import useLocalStorageBeers from '../hooks/useLocalStorageBeers';
import BeerGrid from './BeerGrid';

const Favourites: FC = () => {
    const { favBeers } = useStore();

    useLocalStorageBeers();

    return (
        <section className="flex flex-col items-center my-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mt-20 mb-10 text-green-400 tracking-wide border-b-4 border-green-400">
                Your favourite beers{' '}
                <span role="img" aria-label="Beers emoji">
                    🍻
                </span>
            </h2>
            <BeerGrid data={favBeers} />
        </section>
    );
};

export default Favourites;
