import React, { FC } from 'react';
import BeerCard, { Beer } from './BeerCard';

type Props = {
    data?: Beer[];
};

const BeerGrid: FC<Props> = ({ data }) => {
    return (
        <section className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data?.map((beer) => (
                <BeerCard key={beer.name} beer={beer} />
            ))}
        </section>
    );
};

export default BeerGrid;
