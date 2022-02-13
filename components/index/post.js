import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../GraphQL/Queries";

export default function Post() {
  const { data } = useQuery(LOAD_POSTS);

  return (
    <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl min-h-full gap-4 place-content-stretch">
1
    </div>
  );
}
