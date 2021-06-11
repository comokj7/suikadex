import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PokemonDetail } from '../pages/PokemonDetail';
import { PokemonList } from '../pages/PokemonList';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:no">
          <PokemonDetail />
        </Route>
        <Route path="/pokemon">
          <PokemonList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
