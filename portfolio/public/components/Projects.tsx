import React from "react";
import Image from "next/image";
import cardinal from "../images/cardinal-white-vector.png";

interface ProjectsProps {}
export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <main className="h-full flex items-center  w-full ">
        <div className="flex-col w-full px-40">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="flex h-40 w-full text-white justify-center items-center text-5xl bg-gradient-to-r from-transparent via-sky-900 backdrop-blur-md to-transparent">
            Some projects I&apos;ve worked on
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="h-96 p-8 flex flex-row justify-center space-x-3">
            <div className="h-1/4 w-1/6">Carduinal</div>
            <div className="h-1/4 w-1/6">Kazitour</div>
            <div className="h-1/4 w-1/6"></div>
          </div>
        </div>
      </main>
    </>
  );
};

{
  /**/
}
