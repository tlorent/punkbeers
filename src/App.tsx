import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BeerContextProvider from './BeerContext';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Menu from './components/Menu';

const App: FC = () => {
    return (
        <BeerContextProvider>
            <Router>
                <Menu />
                <Switch>
                    <Route path="/favourites">
                        <Favourites />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </BeerContextProvider>
    );
};

export default App;
