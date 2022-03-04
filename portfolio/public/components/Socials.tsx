import React from "react";
import Image from "next/image";
import data from "../../data.json";
import tt from "../images/github.svg";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <div className="flex xs:bottom-0 sm:bottom-0 w-fit h-fit">
      {data.landing.professionalDetails.map(({ alt, icon, link }, key) => (
        <div
          style={{ minWidth: 35 }}
          key={key}
          className="transition m-6 hover:cursor-pointer hover:scale-125 hover:drop-shadow-2xl scale-125 xs:scale-75 flex justify-center w-fit rounded-full shadow-xl shadow-black"
        >
          <Image
            className="rounded-full"
            alt={alt}
            width={125}
            height={125}
            layout="intrinsic"
            src={`/images/${icon}`}
          />
        </div>
      ))}
    </div>
  );
};
