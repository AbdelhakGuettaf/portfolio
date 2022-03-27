import React, { ReactElement, useState } from "react";
import data from "../../data.json";
interface SubtitleProps {}
const getRandomKey = () => {
  return Math.floor(Math.random() * 100);
};
export const Subtitle: React.FC<SubtitleProps> = ({}) => {
  var timer: NodeJS.Timeout;
  const [lifeCycle, setLifeCycle] = useState<number>(0);
  const Subtitle = (cycle: number): ReactElement => {
    clearTimeout(timer);
    if (cycle <= data.landing.subtitles.length) {
      timer = setTimeout(() => setLifeCycle(cycle + 1), 6000);
      switch (cycle) {
        case 0:
          return (
            <p
              key={getRandomKey()}
              style={{
                perspective: "350px",
                transformStyle: "preserve-3d",
                transformOrigin: "0% 5%",
              }}
              className="transition animate-hang backdrop-blur-md flex p-2 xl:pt-3 xl:w-3/4 text-center text-lg md:text-center sm:text-justify xl:text-left xl:pl-20    xl:text-4xl md:text-4xl sm:text-2xl sm:p-4 font-sans font-thin  text-slate-200  "
            >
              {data.landing.subtitles[0]}
            </p>
          );
        case 1:
          return (
            <div
              key={getRandomKey()}
              style={{
                perspective: "650px",
                transformStyle: "preserve-3d",
                transformOrigin: "0% 5%",
              }}
              className="transition animate-hang backdrop-blur-md  flex p-2 xl:pt-3 xl:w-3/4 text-center text-lg md:text-center sm:text-justify xl:text-left xl:pl-20   xl:text-4xl md:text-2xl sm:text-2xl sm:p-4 font-sans font-thin  text-slate-200  "
            >
              {data.landing.subtitles[1]}
            </div>
          );
        case 2:
          return (
            <div
              key={getRandomKey()}
              style={{
                perspective: "650px",
                transformStyle: "preserve-3d",
                transformOrigin: "0% 5%",
              }}
              className="transition animate-hang backdrop-blur-md  flex p-2 xl:pt-3 xl:w-3/4 text-center text-lg md:text-center sm:text-justify xl:text-left xl:pl-20   xl:text-4xl md:text-2xl sm:text-2xl sm:p-4 font-sans font-thin  text-slate-200  "
            >
              {data.landing.subtitles[2]}
            </div>
          );
      }
    }
    return Subtitle(0);
  };
  return <>{Subtitle(lifeCycle)}</>;
};
