import Link from "next/link";
import Tag from "../components/index/tag.js";
import Post from "../components/index/post.js";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import client from "../services/apolloClient.js";

export default function Home() {
  return (
    <ApolloProvider client={client}>
    <div className="mx-auto max-w-5xl">
    <Tag />
    <Post />
    </div>
    </ApolloProvider>
  );
}
