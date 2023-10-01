import Column from "./Column.tsx";

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
  return (
    <>
      <Column images={images.slice(0, 5)} />
      <Column images={images.slice(5, 9)} />
      <Column images={images.slice(9, 12)} />
    </>
  );
};
export default Gallery;
