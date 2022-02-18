import { gql } from "@apollo/client";
import client from "../../apolloClient";
import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default function PostDetails({ post }) {
  return (
    <div className="mx-auto max-w-6xl grid grid-cols-1 text-xl">
        <button
          className="flex p-3 hover:underline ml-2 tect-thin focus:underline align-middle justify-start decoration-black text-sm uppercase"
          onClick={()=>history.back()}
        >
          {"<"}
        </button>
      <div className=" break-word flex md:px-0 flex-col">
        <div className=" text-5xl px-2 font-thin uppercase">{post.title}</div>
        <div className="flex px-2 justify-between border-b border-black mb-2">
          <div className="pb-2  text-sm decoration-black">{post.date}</div>
          <div className="text-sm  underline uppercase">{post.tag}</div>
        </div>
        <div className="px-2">
          <RichText content={post.content.raw} />
        </div>
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
