import { gql } from "@apollo/client";
import client from "../../apolloClient";
import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default function PostDetails({ post }) {
  return (
    <div className="mx-auto max-w-6xl mt-10 grid grid-cols-1 text-xl">
      <div className=" break-words flex px-2 md:px-0 flex-col">
        <div className=" text-5xl font-thin">{post.title}</div>
        <div className="flex justify-between border-b border-black mb-10">
          <div className="pb-2 text-md decoration-black">{post.date}</div>
          <div className="text-md underline">{post.tag}</div>
        </div>
        <RichText content={post.content.raw} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  });

  const { posts } = data;
  const paths = posts.map((post) => ({ params: { slug: [post.slug] } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query PostBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          excerpt
          title
          tag
          slug
          date
          content {
            raw
          }
          coverImage {
            url
          }
        }
      }
    `,
    variables: { slug },
  });
  const { posts } = data;
  const post = posts[0];
  console.log(post);
  return { props: { post } };
}
