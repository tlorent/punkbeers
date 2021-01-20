import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Menu: FC = () => (
    <div className="flex justify-between shadow-md h-auto py-4 px-4 md:px-8 bg-green-400 items-center sticky top-0">
        <Link to="/">
            <h2 className="font-sans text-lg md:text-2xl text-white font-extrabold tracking-wide">
                Punk Beers.{' '}
                <span className="hidden md:inline-block text-base font-extralight tracking-normal">
                    For real punks.
                </span>
            </h2>
        </Link>
        <div className="w-28 md:w-36">
            <ul className="flex justify-between list-none text-white text-sm md:text-base">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favourites">Favourites</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default Menu;
