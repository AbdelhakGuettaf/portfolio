import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { UIEvent, useEffect, useRef, useState } from "react";
import profile from "../public/images/profile.png";

const Home: NextPage = () => {
  const [visited, setVisited] = useState<number[]>([]);
  const [scrollToggle, setScrollToggle] = useState<boolean>(true);
  const first = useRef<HTMLDivElement>(null);
  const onScroll = (event: UIEvent<HTMLElement>) => {
    const target: number = event.currentTarget.scrollTop;
    switch (target) {
      case 0:
        if (visited.includes(1)) break;
        setScrollToggle(false);
        setTimeout(() => setScrollToggle(true), 1000);
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
        <title>Portfolio</title>
      </Head>
      <div className="fixed flex top-0 w-screen h-14 bg-transparent z-30">
        <span className="font-sans self-center ml-4 text-white text-xl font-bold ">
          MyPortfolio
        </span>
        <div className="text-white text-sm font-light h-full ">Home</div>
      </div>
      <div
        onScroll={(e) => onScroll(e)}
        className={`${
          scrollToggle ? "overflow-scroll" : "overflow-hidden"
        }  w-screen h-screen dark:bg-black scroll-smooth snap snap-y snap-mandatory`}
      >
        <section
          ref={first}
          style={{ backgroundImage: `url(../images/bg-1.svg)` }}
          className={`flex flex-col justify-center xl:flex-row h-full w-full z-10 min-w-fit snap-always snap-center overflow-hidden xl:pt-20`}
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

          <main className="flex xl:pt-32 xl:p-5 md:pt-32 backdrop-blur-sm rounded-xl  ">
            <div className="flex-row justify-start -top-full">
              <div className="flex justify-center xl:justify-start  md:justify-center ">
                <h1 className="flex-nowrap text-6xl w-auto min-w-fit  text-center font-extralight font-sans text-slate-50 xl:py-12 xl:px-20 xl:text-8xl md:text-8xl ">
                  Guettaf Abdelhak
                </h1>
              </div>
              <div className="flex justify-center md:justify-center xl:justify-start ">
                <p className="flex p-2 xl:pt-16 xl:w-3/4 text-center text-2xl md:text-center sm:text-justify  xl:text-left xl:p-4   xl:text-4xl md:text-3xl sm:text-3xl  font-sans font-thin  text-slate-200  ">
                  Hey there, I'm Abdelhak and I'm a front-end web developper. I
                  create custom websites, apps and more.
                </p>
              </div>
            </div>
          </main>
          <div className="flex justify-center xl:pt-44 xl:pr-56">
            <div className="w-fit  xl:h-80 scale-75 xl:aspect-square  xl:scale-150  rounded-full shadow-2xl shadow-black">
              <Image
                className="rounded-full"
                src={profile}
                width="325"
                height="325"
              />
            </div>
          </div>
        </section>
        <section
          className={`h-full w-full bg-slate-300 snap-always snap-center z-10`}
        ></section>
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
