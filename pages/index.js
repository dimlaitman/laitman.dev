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
        <meta
          name="description"
          content="You can see here all my React, Next and other projects"
        />
        <meta
          name="keywords"
          content="React, React developer, Order React project"
        />
        <meta
          property="image"
          content="https://media.graphcms.com/BurI7G1aSQuBK5fEJ2pA"
        />
        <meta name="og:type" content="website" />
        <meta
          property="og:title"
          content="The Personal Site & Portfolio of Dim Laitman"
          key="title"
        />
        <meta property="og:url" content="/" key="url" />
        <meta
          property="og:description"
          content="You can see here all my React, Next and other projects"
          key="description"
        />
        <meta
          property="og:image"
          content="https://media.graphcms.com/BurI7G1aSQuBK5fEJ2pA"
          key="image"
        />
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
