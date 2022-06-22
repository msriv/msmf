import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface CarouselProps {
  carouselID: string;
  alignIndicator: "left" | "center" | "right";
  carouselItems: Array<React.ReactNode>;
  classes?: string;
  theme?: "light" | "dark";
}

const Carousel = (props: CarouselProps) => {
  const { carouselID, alignIndicator, carouselItems, classes, theme } = props;
  const [[page, direction], setPage] = useState([0, 0]);
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const carouselItemIndex = wrap(0, carouselItems.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      id={carouselID}
      className={`relative flex items-center justify-center w-screen ${classes}`}
    >
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`w-full ${classes}`}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {carouselItems[carouselItemIndex]}
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute top-1/2 right-3 bg-transparent w-10 h-10 flex justify-center items-center cursor-pointer z-10"
        onClick={() => paginate(1)}
      >
        <span
          className={`text-4xl ${
            theme === "dark" ? "text-black" : "text-white"
          } material-icons-outlined`}
        >
          chevron_right
        </span>
      </div>
      <div
        className="absolute top-1/2 left-3 bg-transparent w-10 h-10 flex justify-center items-center cursor-pointer z-10"
        onClick={() => paginate(-1)}
      >
        <span
          className={`text-4xl ${
            theme === "dark" ? "text-black" : "text-white"
          } material-icons-outlined`}
        >
          chevron_left
        </span>
      </div>
      <div className="absolute bottom-10 "></div>
    </div>
  );
};

export default Carousel;
