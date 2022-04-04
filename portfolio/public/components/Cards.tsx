import React from "react";
import Image from "next/image";
import native from "../images/native-vector.png";
import react from "../images/react-vector.png";
import design from "../images/design-vector.png";

interface CardsProps {}

export const Cards: React.FC<CardsProps> = ({}) => {
  return (
    <>
      <div className="w-full md:p-4 md:mt-6">
        <main className="flex flex-row justify-evenly w-full flex-wrap ">
          <div className="transition lg:hover:scale-125 min-w-fit my-8 border-2 bg-gradient-to-b from-sky-400 to-sky-700 border-white drop-shadow-2xl shadow-black rounded-lg overflow-hidden">
            <Image
              src={native}
              width={300}
              height={150}
              layout="fixed"
              alt="react-native"
            />
            <div className="bg-white">
              <h3 className="text-sky-600 pt-3  bg-white relative -top-3 rounded-t-md text-4xl text-center">
                React Native
              </h3>
              <ul className="text-sky-600 text-xl p-6 text-left pl-16">
                <li>{">"} TypeScript</li>
                <li>{">"} React Navigation</li>
                <li>{">"} NativeBase</li>
                <li>{">"} Expo</li>
              </ul>
            </div>
          </div>
          <div className="transition lg:hover:scale-125  min-w-fit my-8 border-2 bg-gradient-to-b from-sky-400 to-sky-700 border-white drop-shadow-2xl shadow-black rounded-lg overflow-hidden">
            <Image
              src={react}
              width={300}
              height={150}
              layout="fixed"
              alt="react-native"
            />
            <div className="bg-white">
              <h3 className="text-sky-600 pt-3 bg-white relative -top-3 rounded-t-md text-4xl text-center">
                React.js
              </h3>
              <ul className="text-sky-600 text-xl p-6 text-left pl-16">
                <li>{">"} TypeScript</li>
                <li>{">"} Next.js</li>
                <li>{">"} Redux Toolkit</li>
                <li>{">"} TailwindCSS</li>
              </ul>
            </div>
          </div>
          <div className="transition lg:hover:scale-125  min-w-fit my-8 border-2 bg-gradient-to-b from-sky-400 to-sky-700 border-white drop-shadow-2xl shadow-black rounded-lg overflow-hidden">
            <Image
              src={design}
              width={300}
              height={150}
              layout="fixed"
              alt="react-native"
            />
            <div className="bg-white">
              <h3 className="text-sky-600 pt-3 bg-white relative -top-3 rounded-t-md text-4xl text-center">
                Graphic Design
              </h3>
              <ul className="text-sky-600 text-xl p-6 text-left pl-16">
                <li>{">"} Adobe Photoshop</li>
                <li>{">"} Adobe Illustrator</li>
                <li>{">"} Adobe After Effects</li>
                <li>{">"} Adobde Premier Pro</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
