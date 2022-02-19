import client from "../apolloClient.js";
import PostComponent from "../components/postCard";
import { getPostsQuery } from "../services/index.js";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>The Personal Site & Portfolio of Dim Laitman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The Personal Site & Portfolio of Dim Laitman. You can see all my React projects and order new one."/>
        <meta name="keywords" content="React, React developer, Order React project"/>
        <meta name="yandex-verification" content="5f8e0c925278e278" />
      </Head>
      <PostComponent postContent={posts} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query(getPostsQuery);
  return {
    props: {
      posts: data,
    },
  };
}
