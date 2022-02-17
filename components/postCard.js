import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function PostComponent({ postContent }) {
  const [tag, setTag] = useState("#all");

  let tags = ["#all"];

  postContent.posts.map((post) => {
    tags.push(post.tag);
  });

  let dedupedTags = Array.from(new Set(tags));

  return (
    <div className="max-w-6xl mx-auto">
      <ul className="px-2 flex max-w-6xl">
        {dedupedTags.map((tag, index) => {
          return (
            <button
              key={index}
              className="hover:underline focus:underline py-3 px-1 decoration-black text-xs uppercase"
              onClick={() => setTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </ul>

      <div className="mx-auto md:px-0 pb-5 grid grid-cols-1 md:grid-cols-2 text-3xl items-center justify-center min-h-full gap-2 place-content-stretch uppercase">
        {postContent.posts.map((post, index) => {
          if (post.tag === tag || "#all" === tag) {
            return (
              <Link href={`/post/${post.slug}`} key={index} passHref>
                <div
                  className=" hover:brightness-90 cursor-pointer md:mb-0 mb-5 flex flex-col border-b border-black w-full w-min-90 mx-auto my-auto"
                  key={index}
                >
                  <Image
                    priority={true}
                    src={post.coverImage.url}
                    alt="mountains"
                    width={300}
                    height={300}
                  />
                  <div className="md:h-20 md:overflow-y-scroll py-1 px-2 leading-none ">
                    <p className="float-right mt-1 text-xs">{post.tag}</p>
                    <p className="leading-none tracking-wide font-thin text-3xl">
                      {post.title}
                    </p>
                    <p className="leading-none text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
