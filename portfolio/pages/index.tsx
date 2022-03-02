import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, UIEvent, useEffect, useRef, useState } from "react";
import profile from "../public/images/profile.png";
import data from "../data.json";
import { Subtitle } from "../public/components/Subtitle";
import { Socials } from "../public/components/Socials";

const Home: NextPage = () => {
  const [visited, setVisited] = useState<number[]>([]);
  const [scrollToggle, setScrollToggle] = useState<boolean>(true);
  const first = useRef<HTMLDivElement>(null);
  var time: NodeJS.Timeout;
  const onScroll = (event: UIEvent<HTMLElement>) => {
    if (window.innerWidth <= 1280) first.current?.classList.add("hidden");
    clearTimeout(time);
    const target: number = event.currentTarget.scrollTop;
    switch (target) {
      case 0:
        first.current?.classList.remove("hidden");
        if (visited.includes(1)) break;
        setScrollToggle(false);
        time = setTimeout(() => setScrollToggle(true), 1000);
        setVisited([1]);
        break;
      case window.innerHeight:
        if (visited.includes(2)) break;
        setScrollToggle(false);
        setTimeout(() => setScrollToggle(true), 1000);
        setVisited([1, 2]);
        break;
      case window.innerHeight * 2:
        if (visited.includes(3)) break;
        setScrollToggle(false);
        setTimeout(() => setScrollToggle(true), 1000);
        setVisited([1, 2, 3]);
        break;
      case window.innerHeight * 3:
        if (visited.includes(4)) break;
        setScrollToggle(false);
        setTimeout(() => setScrollToggle(true), 1000);
        setVisited([1, 2, 3, 4]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="fixed hidden md:flex xl:flex top-0 w-screen h-14 bg-transparent z-30">
        <span className="font-sans self-center ml-4 text-white text-xl font-bold ">
          {data.name}
        </span>
        <div className="text-white text-sm font-light h-full ">Home</div>
      </div>
      <div
        onScroll={(e) => onScroll(e)}
        className={`${
          scrollToggle ? "overflow-scroll" : "overflow-hidden"
        }  w-full h-screen dark:bg-black snap snap-y snap-mandatory min-w-fit`}
      >
        <section
          style={{ backgroundImage: `url(../images/bg-1.svg)` }}
          className={`flex flex-col justify-center xl:flex-row h-full w-full scroll-smooth  snap-always snap-center overflow-hidden xl:pt-8`}
        >
          <div className="h-full w-full xl:flex flex-row">
            <main className="flex flex-col mt-6 xl:mt-0 md:w-full xl:p-3 md: rounded-xl justify-center  ">
              <div className="flex-row w-full ">
                <div className="flex justify-center xl:justify-start md:justify-center ">
                  <h1 className="flex-nowrap text-5xl lg:pl-16 w-auto text-center font-extralight font-sans text-slate-50   xl:m-3 xl:text-8xl md:text-8xl xl:text-left xl:font-light  ">
                    {data.landing.title.split(",")[0]},
                    <br />
                    {data.landing.title.split(",")[1]}
                  </h1>
                </div>
                <div
                  style={{
                    perspective: "900px",
                  }}
                  className="flex justify-center md:justify-center xl:justify-start w-full h-32 xl:w-full"
                >
                  <Subtitle />
                </div>
                <div
                  ref={first}
                  className="absolute w-full xl:w-fit bottom-8 z-10 xl:relative mt-24"
                >
                  <div className="transition w-full flex justify-center lg:pl-7 lg:relative lg:bottom-0 xl:opacity-100 ">
                    <Socials />
                  </div>
                </div>
              </div>
            </main>

            <div className="flex  justify-center w-full xl:items-center">
              <div className="flex justify-center w-fit scale-50 xl:h-80 xl:aspect-square md:scale-90 xl:scale-125  rounded-full shadow-2xl shadow-black">
                <Image
                  className="rounded-full"
                  src={profile}
                  layout="fixed"
                  width="325"
                  height="325"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`flex flex-colrelative z-20 justify-center min-w-fit overflow-hidden h-full w-full bg-gradient-to-b from-main to-sky-600 scroll-smooth snap-always snap-center xl:flex-row`}
        >
          {/* <div className="relative w-screen h-screen">
            <span className="absolute  left-2/4 opacity-30 text-18xl font-extrabold text-slate-900">
              WEB DE<span className="opacity-30 text-violet-500">V</span>
            </span>
            <span className="absolute  -top-36 opacity-30 text-9xl font-extrabold text-slate-900">
              REACT<span className="opacity-30 text-violet-500">.</span>JS
            </span>
            <span className="absolute  left-48 top-96 opacity-30 text-9xl font-extrabold text-slate-900">
              JAVA<span className="opacity-30 text-violet-500">S</span>RIPT
            </span>
            <span className="absolute  left-96 top-2/4  opacity-30 text-9xl font-extrabold text-slate-900">
              NEXT<span className="opacity-30 text-violet-500">.</span>
              JS
            </span>
          </div> */}
        </section>
        <section
          className={`h-full w-full bg-slate-600  snap-always snap-center`}
        ></section>
        <section
          className={`h-full w-full from-slate-500 to-slate-900 bg-gradient-to-b snap-always snap-center`}
        ></section>
      </div>
    </>
  );
};

export default Home;
