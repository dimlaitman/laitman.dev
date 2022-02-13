import Tag from "../components/index/tag.js";
import { gql, useQuery } from "@apollo/client";
import client from "../apolloClient.js";
import PostComponent from "../components/index/post.js";


export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-5xl">
      <Tag />
      <PostComponent postContent={posts}/>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          excerpt
          title
          tags
          slug
          content {
            html
          }
          coverImage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data,
    },
  };
}