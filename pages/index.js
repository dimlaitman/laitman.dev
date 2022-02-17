import client from "../apolloClient.js";
import PostComponent from "../components/postCard";
import { getPostsQuery } from "../services/index.js";

export default function Home({ posts }) {
  return (
      <PostComponent postContent={posts} />
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
