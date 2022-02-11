import Link from "next/link";

const posts = [
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "История о том, как наш новый тимлид нифига не зная стал тимлидом",
    prepost:
      "В этой статье я расскажу про боль, с которой я столкнулся за последние несколько дней. История о том, как в на...",
    tags: ["#работа", "#путешествия", "#кодинг"],
    slug: "/1",
  },
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "История о том, как наш новый тимлид нифига не зная стал тимлидом",
    prepost:
      "В этой статье я расскажу про боль, с которой я столкнулся за последние несколько дней. История о том, как в на...",
    tags: ["#работа", "#путешествия", "#кодинг"],
    slug: "/2",
  },
];

export default function Post() {
  return (
    <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl items-center justify-center min-h-full gap-4 place-content-stretch">
      {posts.map((link, index) => {
        return (
          <div className="mb-5 flex flex-col border-y md:border-x md:border-y-0 p-1 rounded-xl border-pink-300 text-gray-300 w-full w-min-90 mx-auto my-auto">
          <Link href={link.slug}>
            <div className="cursor-pointer" key={index}>
              <img
                src={link.image}
                alt="mountains"
                className="w-full flex rounded-lg rounded-b-none"
              />
              <div className="text-xl px-1 text-white tracking-normal">
                {link.title}
              </div>
              <div className="text-sm px-1 mb-2 text-gray-500">{link.prepost}</div>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
