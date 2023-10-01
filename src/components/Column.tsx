import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";

type TColumnProps = {
  images: string[];
  y: MotionValue<number> | MotionValue<string>;
  className?: string;
};

const Column = ({ images, y, className }: TColumnProps) => {
  return (
    <motion.div
      className={`flex flex-col w-[25%] gap-[2rem] ${className} relative`}
      style={{ y }}
    >
      {images.map((image) => {
        return (
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={`/gallery/${image}`}
              alt={image}
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
export default Column;
