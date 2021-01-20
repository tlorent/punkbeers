import { Beer } from '../components/BeerCard';

const endpoint = 'https://api.punkapi.com/v2/beers/?';

const getBeers = async (beerName?: string, page?: number): Promise<Beer[]> => {
    try {
        const response = await fetch(
            `${endpoint}${page ? `&page=${page}` : ''}${
                beerName ? `&beer_name=${beerName}` : ''
            }`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export default getBeers;
