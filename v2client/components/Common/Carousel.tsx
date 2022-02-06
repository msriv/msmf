import React from "react";

interface CarouselProps {
  carouselID: string;
  alignIndicator: "left" | "center" | "right";
  carouselItems: Array<React.ReactNode>;
  classes?: string;
}

const Carousel = (props: CarouselProps) => {
  const { carouselID, alignIndicator, carouselItems, classes } = props;

  const indicatorAlignment = () => {
    switch (alignIndicator) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
    }
  };

  return (
    <div
      id={carouselID}
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div
        className={`carousel-indicators mx-80 absolute right-0 bottom-0 left-0 flex p-0 mb-8 ${indicatorAlignment()}`}
      >
        {carouselItems.map((item, key) => (
          <button
            key={key}
            type="button"
            data-bs-target={"#" + carouselID}
            data-bs-slide-to={`${key}`}
            className={`${key === 0 ? "active" : ""} custom-indicators`}
            aria-current={key === 0 ? "true" : undefined}
            aria-label={`Slide ${key + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        {carouselItems.map((item, key) => (
          <div
            className={`carousel-item relative float-left w-full ${classes} ${
              key === 0 && "active"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="z-50 carousel-control-prev w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target={"#" + carouselID}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="z-50 carousel-control-next w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target={"#" + carouselID}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
