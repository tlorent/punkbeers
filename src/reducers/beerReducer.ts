import { Action, State } from '../BeerContext';

export const beerReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_FAV':
            localStorage.setItem(
                'favBeers',
                JSON.stringify([
                    ...state.favBeers,
                    { ...action.beer, fav: true },
                ])
            );
            return {
                favBeers: [...state.favBeers, { ...action.beer, fav: true }],
            };
        case 'REMOVE_FAV':
            localStorage.setItem(
                'favBeers',
                JSON.stringify(
                    state.favBeers.filter((beer) => beer.id !== action.beerId)
                )
            );

            return {
                favBeers: state.favBeers.filter(
                    (beer) => beer.id !== action.beerId
                ),
            };
        case 'POPULATE_FAV':
            return {
                favBeers: action.beers,
            };
        default:
            return state;
    }
};

export default beerReducer;
