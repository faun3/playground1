import Column from "./Column.tsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 2.85]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.45]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.45]
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3]);
  return (
    <main className="bg-stone-600">
      <div className="h-screen"></div>
      <div
        className="flex flex-row gap-[2rem] p-[4rem] h-[175vh] overflow-hidden bg-black"
        ref={container}
      >
        <Column images={images.slice(0, 3)} y={y} className="top-[-100%]" />
        <Column images={images.slice(3, 6)} y={y2} className="top-[-95%]" />
        <Column images={images.slice(6, 9)} y={y3} className="top-[-40%]" />
        <Column images={images.slice(9, 12)} y={y4} className="top-[-95%]" />
      </div>
      <div className="h-screen"></div>
    </main>
  );
};
export default Gallery;
