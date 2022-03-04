import client from "../../apolloClient";
import Head from "next/head";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { gql } from "@apollo/client";

export default function PostDetails({ post }) {
  return (
    <>
      <Head>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <meta name="keywords" content={post.seo.keywords} />
        <meta property="image" content={post.seo.image.url} />
        <meta name="og:type" content="website" />
        <meta property="og:title" content={post.seo.title} key="title" />
        <meta
          property="og:url"
          content={`${"https://www.laitman.dev/post/"}${post.slug}`}
          key="url"
        />
        <meta
          property="og:description"
          content={post.seo.description}
          key="description"
        />
        <meta property="og:image" content={post.seo.image.url} key="image" />
      </Head>
      <div className="mx-auto max-w-6xl grid grid-cols-1 text-xl">
        <Link href="/" key="index" passHref>
          <button className="flex p-3 hover:underline ml-2 tect-thin focus:underline align-middle justify-start decoration-black text-sm uppercase">
            {"<"}
          </button>
        </Link>
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
    </>
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
          seo {
            title
            description
            keywords
            image {
              url
            }
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
