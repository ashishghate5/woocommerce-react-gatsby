import fetch from 'isomorphic-fetch';

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://anae-backoffice.nianteo.ovh/graphql',
    fetch,
  }),
  cache: new InMemoryCache()
});