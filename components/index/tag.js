import Link from "next/link";

const tags = [
  { name: "#все", slug: "all" },
  { name: "#работа", slug: "work" },
  { name: "#путешествия", slug: "work" },
  { name: "#кодинг", slug: "work" },
];

export default function Tag() {
  return (
    <div className="px-2 my-3 flex flex-wrap">
      {tags.map((link, index) => {
        return (
          <ul>
            <Link href={link.slug}>
              <li
                className="m-1 cursor-pointer underline decoration-pink-300"
                key={index}
              >
                {link.name}
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}
