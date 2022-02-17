import Link from "next/link";

const categories = [
  { name: "Thouths", slug: "/" },
  { name: "Projects", slug: "/projects" },
  { name: "About me", slug: "/me" },
];

const Header = () => {
  return (
    <header className="mx-auto backdrop-blur-xl p-2 z-10 max-w-6xl border-b border-black text-sm text-black h-12 flex sticky justify-between items-center top-0  ">
      <p className="text-2xl animate-pulse">LAITMAN</p>
      <ul className="flex flex-row justify-center space-x-4 cursor-pointer uppercase">
        {categories.map((link, index) => (
          <Link href={link.slug} key={index} passHref>
            <li className="hover:underline">{link.name}</li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
