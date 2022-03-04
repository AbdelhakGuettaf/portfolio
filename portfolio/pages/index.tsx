import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  ReactElement,
  RefObject,
  UIEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import profile from "../public/images/profile.png";
import data from "../data.json";
import { Subtitle } from "../public/components/Subtitle";
import { Socials } from "../public/components/Socials";

const Home: NextPage = () => {
  const [visited, setVisited] = useState<number[]>([]);
  const [scrollToggle, setScrollToggle] = useState<boolean>(true);
  const [windowHeight, setWindowHeight] = useState<boolean>(true);
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);
  const home = useRef<HTMLLIElement>(null);
  const skills = useRef<HTMLLIElement>(null);
  const contact = useRef<HTMLLIElement>(null);
  const navSelected = useRef<HTMLLIElement>(null);
  useEffect(() => {
    toggleNav("home");
    const sizeChanged = () => {
      if (window.innerHeight <= 820) {
        setWindowHeight(false);
      } else {
        setWindowHeight(true);
      }
    };
    window.addEventListener("resize", sizeChanged);
    sizeChanged();
    return () => window.removeEventListener("resize", sizeChanged);
  }, []);
  const toggleNav = (element: string) => {
    home.current?.classList.remove("text-black");
    skills.current?.classList.remove("text-black");
    contact.current?.classList.remove("text-black");
    navSelected.current?.classList.remove("translate-x-0");
    navSelected.current?.classList.remove("translate-x-40");
    navSelected.current?.classList.remove("translate-x-80");
    if (element === "home") {
      navSelected.current?.classList.add("translate-x-0");
      home.current?.classList.add("text-black");
    }
    if (element === "skills") {
      navSelected.current?.classList.add("translate-x-40");
      skills.current?.classList.add("text-black");
    }
    if (element === "contact") {
      navSelected.current?.classList.add("translate-x-80");
      contact.current?.classList.add("text-black");
    }
  };
  var time: NodeJS.Timeout;
  const onScroll = (event: UIEvent<HTMLElement>) => {
    clearTimeout(time);
    if (windowHeight) {
      const target: number = event.currentTarget.scrollTop;
      switch (target) {
        case 0:
          toggleNav("home");
          if (visited.includes(1)) break;
          setScrollToggle(false);
          time = setTimeout(() => setScrollToggle(true), 1000);
          break;
        case window.innerHeight:
          toggleNav("skills");
          if (visited.includes(2)) break;
          setScrollToggle(false);
          setTimeout(() => setScrollToggle(true), 1000);
          setVisited([1]);
          break;
        case window.innerHeight * 2:
          toggleNav("contact");
          if (visited.includes(2)) break;
          setScrollToggle(false);
          setTimeout(() => setScrollToggle(true), 1000);
          setVisited([1, 2]);
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
    }
  };
  const normalScroll = (event: UIEvent<HTMLElement>) => {
    const p = window.innerHeight;
    const target: number = event.currentTarget.scrollTop;
    if (target < p) {
      toggleNav("home");
      if (visited.includes(1)) return;
      setScrollToggle(false);
      time = setTimeout(() => setScrollToggle(true), 1000);
      return;
    } else if (target >= p && target < p * 1.5) {
      toggleNav("skills");
      if (visited.includes(2)) return;
      setScrollToggle(false);
      setTimeout(() => setScrollToggle(true), 1000);
      setVisited([1]);
    } else if (target >= p * 1.5 && target < p * 2.5) {
      toggleNav("contact");
      if (visited.includes(2)) return;
      setScrollToggle(false);
      setTimeout(() => setScrollToggle(true), 1000);
      setVisited([1, 2]);
    } else {
      return;
    }
  };

  return (
    <>
      <Head>
        <meta
          http-equiv="ScreenOrientation"
          content="autoRotate:disabled"
        ></meta>
        <title>{data.name}</title>
      </Head>
      <div
        id="nav"
        className="fixed hidden  xl:flex md:justify-between p-4 top-0 w-screen h-14 bg-transparent z-10"
      >
        <span className="font-sans pt-8 self-center ml-4 text-white text-3xl font-bold ">
          {data.name}
        </span>
        <div className="flex flex-row text-white text-sm font-light h-full px-6 ">
          <ul className="flex flex-row gap-x-8 ">
            <li
              ref={navSelected}
              className="bg-white
              } transition-all absolute  text-center w-28 m-2 p-2 px-4 h-full mt-1 -z-10 text-xl font-bold rounded-full border-2"
            ></li>
            <li
              onClick={() => {
                first.current?.scrollIntoView({ behavior: "smooth" });
                toggleNav("home");
              }}
              ref={home}
              className="text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                second.current?.scrollIntoView({ behavior: "smooth" });
                toggleNav("skills");
              }}
              ref={skills}
              className="text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Skills
            </li>
            <li
              onClick={() => {
                third.current?.scrollIntoView({ behavior: "smooth" });
                toggleNav("contact");
              }}
              ref={contact}
              className="text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div
        onScroll={(e) => {
          windowHeight ? onScroll(e) : normalScroll(e);
        }}
        className={`${
          scrollToggle ? "overflow-scroll" : "overflow-hidden"
        }  w-full h-screen dark:bg-black snap snap-y snap-mandatory min-w-fit`}
      >
        <section
          ref={first}
          style={{ backgroundImage: `url(../images/bg-1.svg)` }}
          className={`flex flex-col justify-center  xl:flex-row h-screen  w-full scroll-smooth ${
            windowHeight ? "snap-end h-screen " : "h-custom"
          }  overflow-hidden xl:pt-8`}
        >
          <div className=" h-full w-full xl:flex flex-row">
            <main className="xl:animate-popIn flex flex-col mt-6 xl:mt-0 md:w-full xl:p-3 md: rounded-xl justify-center  ">
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
                <div className=" flex xl:hidden justify-center w-full xl:items-center">
                  <div className="flex animate-popIn justify-center w-fit h-fit scale-75 xl:h-80 xl:aspect-square md:scale-90 xl:scale-125  rounded-full shadow-2xl shadow-black">
                    <Image
                      className="rounded-full"
                      src={profile}
                      layout="fixed"
                      width="325"
                      height="325"
                    />
                  </div>
                </div>
                <div id="socials" className="w-full xl:w-fit  xl:relative ">
                  <div className="transition w-full flex justify-center lg:pl-7 lg:relative lg:bottom-0 xl:opacity-100 ">
                    <Socials />
                  </div>
                </div>
              </div>
            </main>

            <div className="hidden xl:flex bottom-0 lg:b justify-center w-full xl:items-center">
              <div className="xl:animate-popInDelay flex justify-center w-fit scale-50 xl:h-80 xl:aspect-square md:scale-90 xl:scale-125  rounded-full shadow-2xl shadow-black">
                <Image
                  className=" rounded-full"
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
          ref={second}
          className={`flex flex-colrelative z-20 justify-center min-w-fit overflow-hidden h-full w-full bg-gradient-to-b from-main to-sky-600 scroll-smooth ${
            windowHeight ? "snap-center" : ""
          } xl:flex-row`}
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
          ref={third}
          className={`h-full w-full bg-slate-600  ${
            windowHeight ? "snap-center" : ""
          }`}
        ></section>
        <section
          id="section3"
          className={`h-full w-full from-slate-500 to-slate-900 bg-gradient-to-b ${
            windowHeight ? "snap-center" : ""
          }`}
        ></section>
      </div>
    </>
  );
};

export default Home;
