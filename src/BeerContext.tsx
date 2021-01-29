import React, {
    createContext,
    Dispatch,
    FC,
    useContext,
    useReducer,
} from 'react';
import { Beer } from './components/BeerCard';
import beerReducer from './reducers/beerReducer';

export type State = {
    favBeers: Beer[];
};

export type Action =
    | { type: 'SET_FAV'; beer: Beer }
    | { type: 'REMOVE_FAV'; beerId: number }
    | { type: 'POPULATE_FAV'; beers: Beer[] };

export const initialState: State = {
    favBeers: [],
};

// why two seperate contexts? https://hswolff.com/blog/how-to-usecontext-with-usereducer/
export const BeerStateContext = createContext<State>(initialState);
export const BeerDispatchContext = createContext<Dispatch<Action>>(() => null);

const BeerContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(beerReducer, initialState);

    return (
        <BeerDispatchContext.Provider value={dispatch}>
            <BeerStateContext.Provider value={state}>
                {children}
            </BeerStateContext.Provider>
        </BeerDispatchContext.Provider>
    );
};

export function useStore(): State {
    return useContext(BeerStateContext);
}

export function useDispatch(): Dispatch<Action> {
    return useContext(BeerDispatchContext);
}

export default BeerContextProvider;
