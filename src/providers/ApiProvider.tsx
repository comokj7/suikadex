import React, { ReactNode } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface Props {
  children: ReactNode;
}

export const ApiProvider: React.FC<Props> = ({ children }) => {
  const client = new ApolloClient({
    uri: 'https://graphql.pokeapi.co/v1beta2/',
    headers: {
      contentType: 'application/json',
      accept: '*/*',
    },
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
