import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../GraphQL/Queries";

export default function Post() {
  const { data } = useQuery(LOAD_POSTS);

  return (
    <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl min-h-full gap-4 place-content-stretch">
      {data.posts.map((post) => {
        return (
          <div className="mb-5 hover:animate-pulse flex flex-col border-y md:border-x md:border-y-0 p-1 rounded-xl border-pink-300 text-gray-300 w-full w-min-90 mx-auto my-auto">
            <img
              src={post.coverImage.url}
              alt="mountains"
              className="object-cover flex md:h-60 rounded-lg rounded-b-none"
            />
            <div className="flex md:h-32 md:overflow-y-scroll">
              <p className="text-sm px-2">{post.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
