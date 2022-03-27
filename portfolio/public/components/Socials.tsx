import React from "react";
import Image from "next/image";
import data from "../../data.json";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <div className="flex flex-row flex-wrap w-fit h-fit justify-evenly">
      {data.landing.professionalDetails.map(({ alt, icon, link }, key) => (
        <div
          style={{ minWidth: 35 }}
          key={key}
          className="transition m-3 flex justify-center w-fit hover:cursor-pointer hover:scale-125 hover:drop-shadow-2xl rounded-full shadow-xl shadow-black"
        >
          <Image
            className="rounded-full"
            alt={alt}
            width={50}
            height={50}
            src={`/images/${icon}`}
          />
        </div>
      ))}
    </div>
  );
};
