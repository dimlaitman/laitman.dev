const projects = [
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "Сайт визитка nexx.dev",
    post: "cszczscszczczcszcsc dsadsadsadsa dsada самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMCcszczscszczczcszcsc dsadsadsadsa dsada самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMCcszczscszczczcszcsc dsadsadsadsa dsada самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMC",
    technologies: [
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "graphql",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "react",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
    ],
    difficult: "5",
    price: "500",
  },
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "Сайт визитка nexx.dev",
    post: "Мой первый проект сайт визитка/портфолио/блог, дизайн разработал самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMC",
    technologies: [
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "graphql",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
    ],
    difficult: "5",
    price: "500",
  },
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "Сайт визитка nexx.dev",
    post: "Мой первый проект сайт визитка/портфолио/блог, дизайн разработал самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMC",
    technologies: [
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "graphql",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
    ],
    difficult: "5",
    price: "500",
  },
  {
    image: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
    title: "Сайт визитка nexx.dev",
    post: "Мой первый проект сайт визитка/портфолио/блог, дизайн разработал самостоятельнот в Framer. В остальном я постарался использовать весь стэк изученных технологий. React + Next. GraphQL + GraphCMC",
    technologies: [
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "graphql",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
    ],
    difficult: "5",
    price: "500",
  },
];

export default function ProjectCard() {
  return (
    <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl items-center justify-center min-h-full gap-4 place-content-stretch">
      {projects.map((project) => {
        return (
          <div className="mb-5 hover:animate-pulse flex flex-col border-y md:border-x md:border-y-0 p-1 rounded-xl border-pink-300 text-gray-300 w-full w-min-90 mx-auto my-auto">
            <img
              src={project.image}
              alt="mountains"
              className="w-full flex rounded-lg rounded-b-none"
            />

            <div className="flex md:h-32 md:overflow-y-scroll">
              <p className="text-sm px-2">{project.post}</p>
            </div>
            <div className="my-3 grid grid-cols-4 gap-1 content-center md:h-16 px-2">
              {project.technologies.map((tech) => (
                <div className="flex text-sm border rounded p-1 border-gray-800 hover:bg-gray-900">
                  <img
                    src={tech.image}
                    className="w-7 h-7 rounded-full  bg-gray-300"
                  />
                  <div className="p-1">{tech.name}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between align-middle px-2">
              <div className="text-xs mt-3">
                Сложность: {project.difficult}/10{" "}
              </div>
              <a className="animate-pulse text-2xl font-bold cursor-pointer">
                Заказать
              </a>
              <div className="text-xs mb-2 mt-3">
                Стоимость: {project.price}$
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
