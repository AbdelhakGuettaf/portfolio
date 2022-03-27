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
import person from "../public/images/person-vector.png";
import cloud from "../public/images/cloud2.png";
import slicer from "../public/images/slicer.png";
import data from "../data.json";
import { Subtitle } from "../public/components/Subtitle";
import { Socials } from "../public/components/Socials";
import { Cards } from "../public/components/Cards";

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
  const logo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    toggleNav("home");
    const sizeChanged = () => {
      if (window.innerHeight <= 820) {
        setWindowHeight(false);
      } else {
        setWindowHeight(true);
      }
      if (window.innerWidth <= 1280) {
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
    home.current?.classList.remove("text-sky-500");
    skills.current?.classList.remove("text-sky-500");
    contact.current?.classList.remove("text-sky-500");
    logo.current?.classList.remove("text-sky-500");
    logo.current?.classList.add("text-white");
    navSelected.current?.classList.remove("translate-x-0");
    navSelected.current?.classList.remove("translate-x-40");
    navSelected.current?.classList.remove("translate-x-80");
    if (element === "home") {
      navSelected.current?.classList.add("translate-x-0");
      home.current?.classList.add("text-sky-500");
    }
    if (element === "skills") {
      navSelected.current?.classList.add("translate-x-40");
      skills.current?.classList.add("text-sky-500");
      logo.current?.classList.add("text-sky-500");
      logo.current?.classList.remove("text-white");
    }
    if (element === "contact") {
      navSelected.current?.classList.add("translate-x-80");
      contact.current?.classList.add("text-sky-500");
    }
  };

  var time: NodeJS.Timeout;
  const handleScroll = (e: UIEvent<HTMLElement>, n?: boolean) => {
    clearTimeout(time);
    let p = e.currentTarget.scrollTop;
    time = setTimeout(() => {
      n ? normalScroll(p) : onScroll(p);
    }, 100);
  };
  console.log(scrollToggle);
  const onScroll = (pos: number) => {
    clearTimeout(pos);
    switch (pos) {
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
        if (visited.includes(3)) break;
        setScrollToggle(false);
        setTimeout(() => setScrollToggle(true), 1000);
        setVisited([1, 2, 3]);
        break;
      default:
        break;
    }
  };
  const normalScroll = (pos: number) => {
    const p = window.innerHeight;
    if (pos < p) {
      toggleNav("home");
    } else if (pos >= p && pos < p * 1.5) {
      toggleNav("skills");
    } else if (pos >= p * 1.5 && pos < p * 2.5) {
      toggleNav("contact");
    } else {
      return;
    }
  };

  return (
    <>
      <Head>
        <meta
          httpEquiv="ScreenOrientation"
          content="autoRotate:disabled"
        ></meta>
        <title>{data.name}</title>
      </Head>
      <div
        id="nav"
        className={`fixed hidden  xl:flex md:justify-between p-4 top-0 w-screen h-14 bg-transparent z-10`}
      >
        <span
          ref={logo}
          className="transition delay-100 font-sans pt-8  self-center ml-4 text-3xl font-bold "
        >
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
              className="transition delay-100 text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                second.current?.scrollIntoView({ behavior: "smooth" });
                toggleNav("skills");
              }}
              ref={skills}
              className="transition delay-100 text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Skills
            </li>
            <li
              onClick={() => {
                third.current?.scrollIntoView({ behavior: "smooth" });
                toggleNav("contact");
              }}
              ref={contact}
              className="transition delay-100 text-center w-28 m-2 p-2 px-4 h-fit text-xl font-bold rounded-full border-2 border-transparent hover:shadow-black shadow-2xl hover:border-white hover:cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div
        onScroll={(e) => {
          windowHeight ? handleScroll(e) : handleScroll(e, true);
        }}
        className={`${
          scrollToggle ? "overflow-scroll" : "overflow-hidden"
        } w-full h-screen dark:bg-black snap snap-y snap-mandatory min-w-fit`}
      >
        <section //section 1
          ref={first}
          style={{ backgroundImage: `url(../images/bg-1.svg)` }}
          className={`flex flex-col justify-center min-h-screen  w-screen scroll-smooth ${
            windowHeight ? "snap-center h-screen " : ""
          }  overflow-hidden xl:pt-8`}
        >
          <div className="h-full w-screen xl:flex flex-row">
            <main className="xl:animate-popIn flex flex-col mt-6 xl:mt-0 md:w-full xl:p-3  justify-center  ">
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
                  className="flex flex-wrap justify-center md:justify-center xl:justify-start w-full md:h-40 xl:h-52 xl:w-full"
                >
                  <Subtitle />
                </div>
                <div id="socials" className="w-full lg:pl-16 xl:w-fit ">
                  <div className="transition w-full flex justify-center lg:relative lg:bottom-0 xl:opacity-100 ">
                    <Socials />
                  </div>
                </div>
              </div>
            </main>

            {/* <div className="hidden xl:flex bottom-0 lg:b justify-center w-full xl:items-center">
              <div className="xl:animate-popInDelay flex justify-center w-fit scale-50 xl:h-80 xl:aspect-square md:scale-90 xl:scale-125  rounded-full shadow-2xl shadow-black">
                <Image
                  className=" rounded-full"
                  src={profile}
                  layout="fixed"
                  width="325"
                  height="325"
                  alt="Profile Picture"
                />
              </div>
                </div>
                
                
                <div className="flex xl:hidden justify-center w-full xl:items-center">
                  <div className="flex animate-popIn scale-50  justify-center  h-fit xl:h-80 xl:aspect-square md:scale-90 xl:scale-125  rounded-full shadow-2xl shadow-black">
                    <Image
                      className="rounded-full"
                      src={person}
                      layout="fixed"
                      width="400"
                      height="300"
                      alt="Profile Picture"
                    />
                  </div>
                </div>

                */}
            <div className="w-full flex justify-center ">
              <div className="p-10 flex flex-col-reverse bottom-0 right-0 w-fit">
                <Image
                  src={person}
                  layout="intrinsic"
                  width="750"
                  height="600"
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
        </section>
        <section //section 2
          ref={second}
          className={`flex flex-col min-h-screen overflow-hidden  w-screen bg-gradient-to-tl from-main to-sky-500 scroll-smooth ${
            windowHeight ? "snap-center h-screen " : ""
          } `}
        >
          <div
            className="hidden xl:flex relative w-full h-0" //Sun element
          >
            <div className="absolute -top-32 -left-20 bg-white rounded-full shadow-2xl  shadow-white w-96 aspect-square"></div>
          </div>
          <div
            className="w-full " //wrapper
          >
            <main className="flex flex-col w-full ">
              <div className="flex w-full justify-center xl:items-center">
                <div className="pt-5 flex justify-center w-fit scale-75 xl:scale-90">
                  <Image
                    className=""
                    src={cloud}
                    layout="fixed"
                    width="400"
                    height="220"
                    alt="Profile Picture"
                  />
                  <span className="absolute top-1/2 font-extrabold text-sky-500 text-6xl">
                    Skills
                  </span>
                </div>
              </div>
              <Cards />
              <Image src={slicer} layout="responsive" alt="Slicer" />
            </main>
          </div>

          {/* 
          <div //cloud wrapper
                className=" mt-16 grid grid-rows-6 grid-cols-12 h-44 w-96  "
              >
                <div className="bg-white z-20 col-start-2 row-start-3 col-end-8  rounded-full  aspect-square w-1/2" />
                <div className="bg-white z-20 col-start-4 row-start-1 row-end-7 col-end-11 rounded-t-full" />
                <div className="bg-white z-20 col-start-9 row-start-3 row-end-7 col-end-13 rounded-t-full rounded-br-full" />

                <div className="col-start-1 row-start-4 row-end-7 col-end-13 bg-white rounded-full shadow-2xl shadow-main  h-full w-full"></div>
                <div className="col-start-1 z-30 text-6xl font-black text-sky-500 col-end-13 row-start-4 text-center">
                  Skills
                </div>
              </div>
          
          
          <div className="relative w-screen h-screen">
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
        <section //section 3
          ref={third}
          className={`h-full w-full bg-slate-600  ${
            windowHeight ? "snap-center" : ""
          }`}
        ></section>
        <section //section 4
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
