// import { gql } from "@apollo/client";
// import React from "react";
// import client from "../services/apolloClient";

// export default function BlogPage({ post }) {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <img src={post.coverImage.url} alt="cover" />
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//       query MyQuery {
//         posts {
//           slug
//         }
//       }
//     `,
//   });
//   const { posts } = data;
//   const paths = posts.map((post) => ({
//     params: { slug: [post.slug] },
//   }));
//   console.log(paths);
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params.slug[0];
//   const { data } = await client.query({
//     query: gql`
//       query MyQuery($slug: String!) {
//         posts(where: { slug: $slug }) {
//           excerpt
//           title
//           tags
//           slug
//           content {
//             raw
//           }
//           coverImage {
//             id
//           }
//         }
//       }
//     `,
//     variables: { slug },
//   });
//   const { posts } = data;
//   const post = posts[0];
//   console.log(post);
//   return { props: { post } };
// }
