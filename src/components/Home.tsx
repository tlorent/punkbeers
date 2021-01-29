import React, { FC, useEffect, useState } from 'react';
import { useStore } from '../BeerContext';
import useLocalStorageBeers from '../hooks/useLocalStorageBeers';
import getBeers from '../services/beers-api';
import { Beer } from './BeerCard';
import BeerGrid from './BeerGrid';
import SearchForm from './SearchForm';

const Home: FC = () => {
    const [punkBeers, setPunkBeers] = useState<Beer[] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearching, setIsSearching] = useState(false);
    const { favBeers } = useStore();

    useEffect(() => {
        async function fetchData() {
            const beers = await getBeers(undefined, currentPage);
            setPunkBeers(beers);
        }

        fetchData();
    }, [currentPage]);

    useLocalStorageBeers();

    const handleSearch = async (beerName: string) => {
        setIsSearching((prev) => !prev);
        const beers = await getBeers(beerName, undefined);
        setPunkBeers(beers);
    };

    const handlePagination = async (pageNumber: number) => {
        window?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setCurrentPage(pageNumber);
        const beers = await getBeers(undefined, pageNumber);
        setPunkBeers(beers);
    };

    const beerData = punkBeers?.map(({ image_url, description, name, id }) => ({
        image_url,
        description,
        name,
        id,
        fav: favBeers.findIndex((favBeer) => favBeer.id === id) > -1,
    }));

    if (!beerData) return null;

    return (
        <>
            <SearchForm handleSearch={handleSearch} />
            <section className="flex flex-col items-center my-20">
                <h3 className="text-5xl text-green-400 font-extrabold tracking-wide border-b-4 border-green-400">
                    All Beers{' '}
                    <span role="img" aria-label="Beers emoji">
                        🍻
                    </span>
                </h3>
                <BeerGrid data={beerData} />
                {!isSearching && (
                    <div className="flex w-32 justify-between items-center mt-8">
                        {Array.from([1, 2, 3, 4, 5]).map((number) => (
                            <button
                                className={`border border-green-300 px-2 py-1 rounded-md shadow-sm mr-1 cursor-pointer ${
                                    currentPage === number
                                        ? 'bg-green-400'
                                        : 'bg-white'
                                } ${
                                    currentPage === number
                                        ? 'text-white'
                                        : 'text-black'
                                }`}
                                key={number}
                                onClick={() => handlePagination(number)}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Home;
