import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let i = images.length - 1;
    const interval = setInterval(() => {
      if (index === i) {
        setIndex(0);
      } else {
        setIndex((oldIndex) => oldIndex + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  });
  const RenderImage = () => {
    const [image] = images;
    return (
      <Image
        src="/images/cardinal-1.png"
        width="500"
        height="500"
        layout="fixed"
        alt="Cardinal ScreenShot"
      />
    );
  };
  return <RenderImage />;
};
