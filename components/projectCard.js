import Image from "next/image";

export default function ProjectCard({ projectContent }) {
  return (
    <div>
      <div className="font-thin mx-auto pt-10 pb-5 max-w-6xl grid grid-cols-1 md:grid-cols-2 text-3xl items-center justify-center min-h-full gap-4 place-content-stretch uppercase">
        {projectContent.projects.map((project, index) => {
          return (
            <div className=" mb-5 flex flex-col border-b  border-black  w-full w-min-90" key={index}>
              <Image
                priority={true}
                src={project.image[0].url}
                width={300}
                height={300}
                alt="mountains"
                className="w-full"
              />
              <div className="md:h-20 px-2 md:overflow-y-scroll">
                <p className="text-xl font-thin leading-none pt-1">
                  {project.title}
                </p>
                <p className="leading-none text-base font-thin pt-2">
                  {project.post.text}
                </p>
              </div>
              <div className="my-3 mx-1 gap-1 grid grid-cols-5  ontent-center">
                {project.technology.map((tech, index) => (
                  <div className="flex text-sm font-thin justify-center border rounded p-1 border-gray-800 hover:bg-gray-200" key={index}>
                    <div className="p-1">{tech}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between align-middle px-2">
                <div className="text-base mt-1">Hours: {project.difficult}</div>
                <a className="animate-pulse mt-1 text-2xl font-thin cursor-pointer">
                  Order
                </a>
                <div className="text-base mt-1">Price: {project.price}$</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
