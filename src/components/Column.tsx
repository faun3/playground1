type TColumnProps = {
  images: string[];
};

const Column = ({ images }: TColumnProps) => {
  return (
    <>
      {images.map((image) => {
        return (
          <div>
            <img src={`/gallery/${image}`} alt={image} />
          </div>
        );
      })}
    </>
  );
};
export default Column;
