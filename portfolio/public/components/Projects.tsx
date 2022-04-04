import React, { useRef } from "react";
import Image from "next/image";
import cardinal from "../images/cardinal-main-vector.png";
import kaziIcon from "../images/kazi-icon.png";
import cardinalAndroid1 from "../images/cardinal-1.png";
import cardinalAndroid2 from "../images/cardinal-2.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

interface ProjectsProps {
  project: number;
}
export const Projects: React.FC<ProjectsProps> = ({ project }) => {
  const div = useRef<HTMLDivElement>(null);
  const div2 = useRef<HTMLDivElement>(null);

  const Project1 = () => {
    return (
      <div
        ref={div}
        className="transition grid place-content-center grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-3 lg:px-16 lg:py-8 w-full h-fit"
      >
        <div className="flex flex-col rounded-md ">
          <div className="flex w-full justify-center ">
            <div className="flex-col">
              <div className="flex justify-center">
                <div className="flex rounded-full w-40 h-40  justify-center items-center z-30">
                  <Image src={cardinal} alt="Cardinal App Logo" />
                </div>
              </div>
              <h1 className="text-main font-sans font-bold text-6xl  lg:bg-transparent relative  z-30">
                Cardinal
              </h1>
            </div>
          </div>
          <div className="flex  lg:mt-0 items-center text-justify">
            <p className="text-2xl text-main p-6 font-sans font-light z-30 ">
              Cardinal is an administration/managment system for private
              schools, it simplifies the workflow of managing and integrating
              new students, teachers and subjects. It is designed to be flexible
              with complex interactions such as teachers or students with
              multiple subjects, wich can cause chaos with the redundant
              traditional way of administration.
            </p>
          </div>
        </div>
        <div className="slide-container col-span-2 ">
          <Slide
            transitionDuration="600"
            className="max-w-full"
            duration="3000"
            pauseOnHover={true}
            arrows={false}
            Easing="ease-out"
          >
            <div className=" w-full ">
              <div className="relative z-10 w-full flex justify-center ">
                <Image
                  src={cardinalAndroid1}
                  alt="Cardinal App Logo"
                  width="475"
                  height="480"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full flex justify-center">
                <Image
                  src={cardinalAndroid2}
                  alt="Cardinal App Logo-2"
                  width="530"
                  height="500"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  };
  const Project2 = () => {
    return (
      <div
        ref={div}
        className="transition grid place-content-center grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-3 lg:px-16 lg:py-8 w-full h-fit"
      >
        <div className="flex flex-col rounded-md ">
          <div className="flex w-full justify-center ">
            <div className="flex-col">
              <div className="flex justify-center">
                <div className="flex overflow-hidden rounded-full w-40 h-40 lg:my-3 justify-center items-center z-30">
                  <Image src={kaziIcon} alt="Cardinal App Logo" />
                </div>
              </div>
              <h1 className="text-white font-sans font-bold text-6xl  lg:bg-transparent relative  z-30">
                Kazitour
              </h1>
            </div>
          </div>
          <div className="flex  lg:mt-0 items-center text-justify">
            <p className="text-2xl text-white p-6 font-sans font-light z-30 ">
              Cardinal is an administration/managment system for private
              schools, it simplifies the workflow of managing and integrating
              new students, teachers and subjects. It is designed to be flexible
              with complex interactions such as teachers or students with
              multiple subjects, wich can cause chaos with the redundant
              traditional way of administration.
            </p>
          </div>
        </div>
        <div className="slide-container col-span-2 ">
          <Slide
            transitionDuration="600"
            className="max-w-full"
            duration="3000"
            pauseOnHover={true}
            arrows={false}
            Easing="ease-out"
          >
            <div className=" w-full ">
              <div className="relative z-10 w-full flex justify-center ">
                <Image
                  src={cardinalAndroid1}
                  alt="Cardinal App Logo"
                  width="475"
                  height="480"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full flex justify-center">
                <Image
                  src={cardinalAndroid2}
                  alt="Cardinal App Logo-2"
                  width="530"
                  height="500"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  };
  const Project = () => {
    switch (project) {
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      default:
        return <></>;
    }
  };
  return (
    <>
      <main className="py-8 w-full lg:pt-20 flex flex-col">
        <div className="flex text-white justify-center items-center text-6xl mb-16">
          <h1 className="lg:text-shadow-md font-mono font-medium text-main lg:text-white relative"></h1>
        </div>
        <Project />
      </main>
    </>
  );
};

{
  /*
  <div className="flex flex-col space-y-28 justify-center items-center py-20 w-full  mt-6">
          <div className="flex max-w-screen-xl px-10 w-full flex-col lg:flex-row justify-around items-center  ">
            <div className="flex rounded-full w-40 h-40 border-2 justify-center items-center">
              <Image src={cardinal} alt="Cardinal App Logo" />
            </div>
            <div className="border-t-2 hidden lg:flex lg:w-28 lg:h-1  border-white "></div>
            <div className="flex-1 mt-6 lg:mt-0 backdrop-blur-md shadow-2xl shadow-main rounded-md flex items-center text-justify lg:h-40 ">
              <p className="text-xl text-white p-6 font-sans font-light">
                Cardinal is an administration/managment system for private
                schools, it simplifies the workflow of managing and integrating
                new students, teachers and subjects. It is designed to be
                flexible with complex interactions such as teachers or students
                with multiple subjects, wich can cause chaos with the redundant
                traditional way of administration.
              </p>
            </div>
          </div>
          <div className="flex max-w-screen-xl px-10 w-full flex-col lg:flex-row-reverse justify-around items-center  ">
            <div className="rounded-full w-40 h-40 bg-white "></div>
            <div className="border-t-2 hidden lg:flex lg:w-28 lg:h-1  border-white "></div>
            <div className="flex-1 mt-6 lg:mt-0 backdrop-blur-md shadow-2xl shadow-main rounded-md flex items-center text-justify lg:h-40 ">
              <p className="text-xl text-white p-6 font-sans font-light">
                Cardinal is an administration/managment system for private
                schools, it simplifies the workflow of managing and integrating
                new students, teachers and subjects. It is designed to be
                flexible with complex interactions such as teachers or students
                with multiple subjects, wich can cause chaos with the redundant
                traditional way of administration.
              </p>
            </div>
          </div>
        </div>
  
  */
}
