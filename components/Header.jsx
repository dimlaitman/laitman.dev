import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "web dev", slug: "web-dev" },
];

const Header = () => {
  return (
    <div className="css-1ll6h33 sticky flex flex-col h-screen">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">
              N
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents text-white">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2">{category.name}</span>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Header;
