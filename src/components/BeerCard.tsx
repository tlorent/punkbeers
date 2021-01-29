import React, { FC } from 'react';
import ClampLines from 'react-clamp-lines';
import { useDispatch } from '../BeerContext';

export type Beer = {
    image_url: string;
    name: string;
    description: string;
    id: number;
    fav: boolean;
};

type Props = {
    beer: Beer;
};

const BeerCard: FC<Props> = ({ beer }) => {
    const { name, description, image_url, fav } = beer;
    const dispatch = useDispatch();

    const handleFav = (beer: Beer) => {
        dispatch({
            type: 'SET_FAV',
            beer,
        });
    };

    const handleRemove = (id: number) => {
        dispatch({
            type: 'REMOVE_FAV',
            beerId: id,
        });
    };

    return (
        <div className="rounded-md flex flex-col px-4 py-4 border-gray-200 border shadow-md w-80 h-56 xl:w-96 ml-0 md:ml-8 mt-8">
            <div className="flex justify-end">
                {!fav ? (
                    <button onClick={() => handleFav(beer)}>
                        <span
                            role="img"
                            aria-label="star"
                            className="cursor-pointer"
                        >
                            ⭐
                        </span>
                    </button>
                ) : (
                    <button onClick={() => handleRemove(beer.id)}>
                        <span
                            role="img"
                            aria-label="star"
                            className="cursor-pointer"
                        >
                            🤩
                        </span>
                    </button>
                )}
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <img src={image_url} alt={name} className="max-h-32 ml-8" />
                </div>
                <div className="w-1/2 flex flex-col">
                    <h3 className="font-bold">{name}</h3>
                    <ClampLines
                        text={description}
                        lines={4}
                        id={name}
                        ellipsis="..."
                        moreText=""
                        className="text-gray-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default BeerCard;
