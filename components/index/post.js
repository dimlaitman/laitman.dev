import Image from "next/image";

export default function PostComponent({ postContent }) {
  return (
    <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl items-center justify-center min-h-full gap-4 place-content-stretch">
      {postContent.posts.map((post, index) => {
        return (
          <div className="mb-5 hover:brightness-75 flex flex-col border-y md:border-x md:border-y-0 p-1 rounded-xl border-pink-300 text-gray-300 w-full w-min-90 mx-auto my-auto" key={index}>
          <Image 
          priority={true}
          src={post.coverImage.url}
          alt="mountains"
          width={300}
          height={300}
          className="md:h-60 w-full flex rounded-lg rounded-b-none"
          />  
            <div className="flex md:h-32 md:overflow-y-scroll">
              <p className="text-sm px-2">{post.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// <div className="mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl min-h-full gap-4 place-content-stretch">
// {postContent?.posts.map((post) => (
//   <div>
//   <div>{post.title}</div>
//   <div dangerouslySetInnerHTML={{__html: post.content.html}}></div>
//   </div>
// ))}
// </div>
