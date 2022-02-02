import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen sm:px-5 px-2 py-3">
      <Head>
        <title>Nexx dev</title>
        <meta name="description" content="Nexx dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols12 gap-12">
        <div className="break-words font-mono text-4xl font-normal lg:col-span-8 col-span-1">
          <p>
            NEXX - это стартап, состоящий из децентрализованной команды широкого
            спектра услуг - от дизайна иконок и создания сайтов до написания
            смарт контрактов.{" "}
            <button
              disabled="disabled"
              className="rounded-none border-2 text-2xl p-0.5 border-black hover:border-gray-500"
            >
              Хочу в команду
            </button>
          </p>
          <p className="my-10">
            Мы используем только самые передовые инструменты 2к22:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center text-center">
            <div>
              <div className="justify-center flex gap-5 text-center">
                <img
                  className="w-16 h-16 md:w-12 md:h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                className="w-16 h-16 md:w-12 md:h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                className="w-16 h-16 md:w-12 md:h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
              </div>
              <div>
              <p>Прототип</p>
              <p>*Figma</p>
              <p>*Framer</p>
              <p>*Sketch</p>
              </div>
            </div>
            <div>
              <div className="justify-center flex gap-5 text-center">
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
              </div>
              <div>Дизайн</div>
            </div>
            <div>
              <div className="justify-center flex gap-5 text-center">
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
                <img
                  className="w-12 h-12"
                  src="/images/figma.png"
                  alt="figma"
                />
              </div>
              <div>Дизайн</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
