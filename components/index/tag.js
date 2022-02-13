import Link from "next/link";

const tags = [
  { name: "#все", slug: "all" },
  { name: "#работа", slug: "work" },
  { name: "#путешествия", slug: "work" },
  { name: "#кодинг", slug: "work" },
];

export default function Tag() {
  return (
    <ul className="px-2 my-3 flex flex-wrap max-w-5xl">
      {tags.map((link, index) => (
        <Link href={link.slug} key={index}>
          <li className="m-1 cursor-pointer underline decoration-pink-300">
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
