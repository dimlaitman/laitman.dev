import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-southeast-2.graphcms.com/v2/ckzi8snlk1aq901xz7myxae7o/master",
  cache: new InMemoryCache(),
});

export default client;
