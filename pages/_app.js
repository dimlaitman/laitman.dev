import "../styles/globals.css";
import { Layout } from "../components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import client from "../services/apolloClient.js";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
