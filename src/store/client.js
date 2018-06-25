import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

const httpLink = new HttpLink({ uri: 'http://13.127.67.179/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('access-token');
	const uid = localStorage.getItem('uid');
	const client = localStorage.getItem('client');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      'access-token': token ? `${token}` : '',
      'uid': uid ? `${uid}` : '',
      'client': client ? `${client}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default client; 