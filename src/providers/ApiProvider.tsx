import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const ApiProvider: React.FC = ({ children }) => {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta/',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
