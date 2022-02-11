import Link from "next/link";
import Tag from "../components/index/tag.js";
import Post from "../components/index/post.js";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <Tag />
      <Post />
    </div>
  );
}
