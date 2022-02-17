import { RichText } from "@graphcms/rich-text-react-renderer";
import { getAboutmeQuery } from "../services";
import client from "../apolloClient";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe({ aboutme }) {
  return (
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
            <Link href="https://twitter.com/dimlaitman" target="_top" passHref>
              <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded">
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
            <Link
              href="whatsapp://send?phone=79992223434&text=Hello Dim. I have an offer for you. "
              target="_top"
              passHref
            >
              <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded">
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  viewBox="0 0 165 165"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M86,6.88c-43.62608,0 -79.12,35.49392 -79.12,79.12c0,13.6224 3.51912,27.01776 10.19272,38.8376l-10.06544,35.9136c-0.33024,1.17992 -0.01032,2.44584 0.8428,3.32304c0.65704,0.67768 1.55144,1.04576 2.46992,1.04576c0.2752,0 0.55384,-0.0344 0.8256,-0.09976l37.48224,-9.28456c11.44488,6.14384 24.33456,9.38432 37.37216,9.38432c43.62608,0 79.12,-35.49392 79.12,-79.12c0,-43.62608 -35.49392,-79.12 -79.12,-79.12zM125.8008,113.91904c-1.69248,4.68528 -9.81088,8.9612 -13.71184,9.53568c-3.50192,0.51256 -7.93264,0.73272 -12.7968,-0.79464c-2.94808,-0.9288 -6.73208,-2.16032 -11.57904,-4.22776c-20.37512,-8.68944 -33.68104,-28.9476 -34.69928,-30.28576c-1.0148,-1.33816 -8.29384,-10.87384 -8.29384,-20.7432c0,-9.86936 5.246,-14.7232 7.11048,-16.73216c1.86448,-2.00896 4.06264,-2.5112 5.418,-2.5112c1.35536,0 2.70728,0.0172 3.89408,0.07224c1.24872,0.06192 2.924,-0.47128 4.57176,3.44344c1.69248,4.01792 5.75512,13.88728 6.25736,14.8952c0.50912,1.00448 0.84624,2.17752 0.172,3.51568c-0.67424,1.33816 -1.01136,2.17408 -2.0296,3.34712c-1.01824,1.17304 -2.1328,2.6144 -3.04784,3.51568c-1.01824,1.00104 -2.07432,2.08464 -0.89096,4.0936c1.18336,2.00896 5.25976,8.57592 11.3004,13.89416c7.7572,6.83184 14.30352,8.95088 16.33312,9.95536c2.0296,1.00448 3.2164,0.83592 4.39976,-0.50224c1.18336,-1.3416 5.07744,-5.85832 6.42936,-7.86384c1.35192,-2.00552 2.70728,-1.67528 4.57176,-1.00448c1.86448,0.66736 11.8508,5.51776 13.8804,6.52224c2.0296,1.00448 3.38496,1.50672 3.89408,2.34264c0.50912,0.83248 0.50912,4.8504 -1.18336,9.53224z"></path>
                  </g>
                </svg>
              </button>
            </Link>
            <Link href="tg://resolve?domain=dimlaitman" target="_top" passHref>
              <button className="hover:bg-gray-200 border border-black p-2 font-thin text-black inline-flex items-center space-x-2 rounded">
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  viewBox="0 0 165 165"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M147.43457,21.58398c-2.38202,-0.25263 -4.97109,0.11937 -7.57259,1.14779c-3.225,1.2685 -53.75874,22.52595 -100.86523,42.35612l-15.5651,6.55078c-6.02717,2.44383 -9.07031,6.41831 -9.07031,11.77181c0,3.74817 1.5863,8.83214 9.1543,11.82779l26.27311,10.52604c2.27183,6.81551 7.54852,22.64017 8.87435,26.84701c0.78833,2.494 2.77955,8.77693 7.81055,10.2461c1.032,0.35117 2.1089,0.5319 3.2054,0.5319c3.17483,0 5.46078,-1.47756 6.57878,-2.33756l16.69889,-14.12337l20.28223,18.75651c0.78117,0.7955 4.91589,4.8151 10.47006,4.8151c6.93017,0 12.18702,-5.76905 13.28352,-11.35189c0.59483,-3.06017 20.15625,-101.2575 20.15625,-101.24317c1.75583,-7.87617 -1.40119,-11.96195 -3.42936,-13.70345c-1.73792,-1.48708 -3.90281,-2.36489 -6.28483,-2.61751zM142.68945,37.0651c-2.70183,13.545 -17.43034,87.47891 -19.66634,98.13574l-29.64649,-27.4209l-20.11426,17.03484l5.57097,-21.79395c0,0 38.43159,-38.90167 40.74642,-41.16634c1.86333,-1.81317 2.25358,-2.44876 2.25358,-3.07943c0,-0.8385 -0.43157,-1.44173 -1.42774,-1.44173c-0.89583,0 -2.11248,0.85843 -2.75748,1.25977c-8.19399,5.10852 -43.08544,24.98628 -60.25879,34.75554l-24.91536,-9.95215l12.09375,-5.08106c30.8095,-12.97166 85.68041,-36.07599 98.12174,-41.25032z"></path>
                  </g>
                </svg>
              </button>
            </Link>
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
