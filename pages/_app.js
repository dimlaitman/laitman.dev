import "../styles/globals.css";
import { Layout } from "../components";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";

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
