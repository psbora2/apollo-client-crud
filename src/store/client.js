import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

const client = new ApolloClient({
  link: createHttpLink({
    uri: "/graphql/",
    headers: {'Access-Control-Allow-Origin':'*'}
  }),
  cache: new InMemoryCache(),
})

export default client