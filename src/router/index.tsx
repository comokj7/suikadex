import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PokemonDetail } from '../pages/PokemonDetail';
import { PokemonList } from '../pages/PokemonList';

export const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/pokemon/:no">
          <PokemonDetail />
        </Route>
        <Route path="/pokemon">
          <PokemonList />
        </Route>
        <Route path="/">
          <Redirect to="/pokemon" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
