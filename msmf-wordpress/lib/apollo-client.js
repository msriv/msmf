import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { API_URL } from './constants';

const httpLink = createHttpLink({
    uri: API_URL,
  });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = window.btoa("admin:msmf_api@2021")
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;