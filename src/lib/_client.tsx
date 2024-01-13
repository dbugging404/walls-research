import { ApolloClient, InMemoryCache } from '@apollo/client';

const hygraphClient = new ApolloClient({
  uri: process.env.ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
});

export default hygraphClient;
