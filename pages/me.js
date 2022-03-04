import { RichText } from "@graphcms/rich-text-react-renderer";
import { getAboutmeQuery } from "../services";
import client from "../apolloClient";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function AboutMe({ aboutme }) {
  return (
    <>
      <Head>
        <title>{aboutme.pages[0].seo.title}</title>
        <meta name="description" content={aboutme.pages[0].seo.description} />
        <meta name="keywords" content={aboutme.pages[0].seo.keywords} />
        <meta property="image" content={aboutme.pages[0].seo.image.url} />
        <meta name="og:type" content="website" />
        <meta
          property="og:title"
          content={aboutme.pages[0].seo.title}
          key="title"
        />
        <meta property="og:url" content={aboutme.pages[0].slug} key="url" />
        <meta
          property="og:description"
          content={aboutme.pages[0].seo.description}
          key="description"
        />
        <meta
          property="og:image"
          content={aboutme.pages[0].seo.image.url}
          key="image"
        />
        <meta property="of:site_name" content="LAITMAN DEV"/>
      </Head>
      <div className="font-thin mx-auto px-2 pt-10 max-w-6xl flex text-2xl">
        <span className="break-normal bg-clip-text text-transparent text-black">
          <div className="float-right">
            <div className="grid justify-center content-center">
              <Image
                priority={true}
                src="https://media.graphcms.com/BurI7G1aSQuBK5fEJ2pA"
                width={140}
                height={140}
                alt="My avatar"
                className="w-full"
              />
              <Link
                href="https://www.upwork.com/workwith/laitman"
                target="_top"
                passHref
              >
                <button className="mx-auto mt-2 hover:bg-gray-200 animate-pulse w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                  Upwork
                  <span className="relative inline-flex mx-2 rounded-full h-3 w-3 bg-green-500"></span>
                </button>
              </Link>
            </div>
            <div className="flex gap-2 pt-2 justify-center">
            <Link
            href="https://discord.com/users/848197635122528277"
            target="_top"
            passHref
          >
            <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded ">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 165 165"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M143.19,37.04719c-13.69281,-11.01875 -35.35406,-12.88656 -36.28125,-12.95375c-1.43781,-0.12094 -2.80844,0.68531 -3.39969,2.01563c-0.05375,0.08062 -0.52406,1.16906 -1.04813,2.86219c9.05688,1.53188 20.18313,4.60906 30.24781,10.8575c1.6125,0.99438 2.10969,3.1175 1.11531,4.73c-0.65844,1.06156 -1.77375,1.63938 -2.92938,1.63938c-0.61812,0 -1.24969,-0.17469 -1.81406,-0.52406c-17.3075,-10.73656 -38.915,-11.27406 -43.08063,-11.27406c-4.16562,0 -25.78656,0.5375 -43.08062,11.27406c-1.6125,1.00781 -3.73563,0.51062 -4.73,-1.10188c-1.00781,-1.62594 -0.51063,-3.73562 1.10187,-4.74344c10.06469,-6.235 21.19094,-9.32562 30.24781,-10.84406c-0.52406,-1.70656 -0.99438,-2.78156 -1.03469,-2.87562c-0.60469,-1.33031 -1.96188,-2.16344 -3.41313,-2.01563c-0.92719,0.06719 -22.58844,1.935 -36.46937,13.10156c-7.24281,6.70531 -21.74188,45.88906 -21.74188,79.765c0,0.60469 0.16125,1.1825 0.45688,1.70656c9.9975,17.57625 37.28906,22.17187 43.51062,22.37344c0.02688,0 0.06719,0 0.1075,0c1.10188,0 2.13656,-0.52406 2.78156,-1.41094l6.28875,-8.65375c-16.97156,-4.38063 -25.63875,-11.825 -26.13594,-12.26844c-1.42438,-1.24969 -1.55875,-3.42656 -0.29563,-4.85094c1.24969,-1.42437 3.42656,-1.55875 4.85094,-0.30906c0.20156,0.18812 16.16531,13.73312 47.55531,13.73312c31.44375,0 47.4075,-13.59875 47.56875,-13.73312c1.42438,-1.23625 3.58781,-1.11531 4.85094,0.3225c1.24969,1.42437 1.11531,3.58781 -0.30906,4.8375c-0.49719,0.44344 -9.16438,7.88781 -26.13594,12.26844l6.28875,8.65375c0.645,0.88687 1.67969,1.41094 2.78156,1.41094c0.04031,0 0.08063,0 0.1075,0c6.22156,-0.20156 33.51313,-4.79719 43.51063,-22.37344c0.29562,-0.52406 0.45687,-1.10188 0.45687,-1.70656c0,-33.87594 -14.49906,-73.05969 -21.93,-79.91281zM63.64,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76zM108.36,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76z"></path>
                </g>
              </svg>
            </button>
          </Link>
              <Link href="https://github.com/dimlaitman" target="_top" passHref>
                <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dimlaitman/"
                target="_top"
                passHref
              >
                <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded">
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
            <div className="flex gap-2 py-2 justify-center">
            </div>
            <div className="grid grid-cols-1 pt-2 gap-2 px-2 justify-center">
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                React JS
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin ">
                Next JS
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                GraphQL
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                Apollo
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                Figma
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                Framer
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                SwiftUI
              </button>
              <button className="hover:bg-gray-200 w-32 h-9 border border-black p-2 text-md inline-flex justify-center items-center space-x-2 rounded font-thin">
                Spark AR
              </button>
            </div>
          </div>
          <RichText content={aboutme.pages[0].content.raw} />
        </span>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query(getAboutmeQuery);
  return {
    props: {
      aboutme: data,
    },
  };
}
