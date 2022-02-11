import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Мысли", slug: "/" },
  { name: "Проекты", slug: "projects" },
  { name: "Хобби", slug: "hobby" },
  { name: "En", slug: "en" },
  
];

const Header = () => {
  return (
    <header className="font-mono font-normal max-w-5xl h-20 flex sticky justify-between items-center p-1 top-0 mx-auto backdrop-blur-sm backdrop-brightness-50">
      <Link href="/">
        <Image
          src="/images/logo.webp"
          alt="NEXXDEV"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <nav className="flex flex-row justify-center space-x-4 cursor-pointer">
        {categories.map((link, index) => {
          return (
            <ul>
              <Link href={link.slug}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
      <Link href="/aboutme">
        <li className="mr-2 flex bg-gray-900/50 border-y border-x border-gray-400 rounded-full p-5 min-h-10 min-w-10 align-center justify-center animate-pulse cursor-pointer hover:bg-gray-700/50 ease-in-out duration-1000" key="me">
          Я
        </li>
      </Link>
    </header>
  );
};

export default Header;
