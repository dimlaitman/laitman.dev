import Link from "next/link";
import { BookmarkIcon } from '@heroicons/react/solid'

const categories = [
  { name: "Статьи", slug: "react" },
  { name: "Кейсы", slug: "web-dev" },
  { name: "Команда", slug: "web-dev" },
  { name: "Web", slug: "web-dev" },
  { name: "Web", slug: "web-dev" },
  { name: "Web", slug: "web-dev" },
];

const Header = () => {

  const icon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
  return (
    <div className="left-menu sticky flex flex-col h-screen text-black text-center">
        <div className="">
          <Link href="/">
            <span className="font-bold text-4xl cursor-pointer">
              N
            </span>
          </Link>
          <div className="text-center justify-center grid gap-8 mt-10 grid-cols-1 cursor-pointer">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
            <div>
            <div className="mx-4">{icon}</div>
            <div className="text-gray-500 text-xs">{category.name}</div>
            </div>  
            </Link>
          ))}
        </div>
        </div>

    </div>
  );
};

export default Header;
