import { useEffect, useState } from "react";
import { ITestimonial } from "../../../utils/Interfaces";

interface TestimonialListProps {
  list: ITestimonial[];
}

const TestimonialList = (props: TestimonialListProps) => {
  const { list } = props;

  const [listState, setListState] = useState<Array<number>>([0, 1]);

  useEffect(() => {
    setListState([0, 1]);
  }, []);

  const moveForward = () => {
    setListState((prevState) =>
      prevState[1] < list.length - 1
        ? [prevState[0] + 1, prevState[1] + 1]
        : [list.length - 2, list.length - 1]
    );
  };

  const moveBackward = () => {
    setListState((prevState) =>
      prevState[0] > 0 ? [prevState[0] - 1, prevState[1] - 1] : [0, 1]
    );
  };

  return (
    <div className="w-full flex items-center justify-around">
      <div
        onClick={moveBackward}
        className="flex items-center justify-center w-[68px] h-[68px] rounded-full border-2 border-white cursor-pointer"
      >
        <span className="material-icons-round text-6xl w-[68px] h-[68px] text-white leading-[1.1]">
          chevron_left
        </span>
      </div>
      <div className="flex justify-around items-center">
        {list.map((TM: ITestimonial, key: number) =>
          listState.includes(key) ? (
            <div
              key={key}
              className="relative w-5/12 p-10 bg-white rounded max-h-max z-10 tooltip-arrow h-[550px] mb-40"
            >
              <div className="absolute w-10 h-10 bg-white top-[96%] left-[10%] rotate-45 transform skew-x-12 skew-y-12"></div>
              <div className="flex items-center absolute top-[108%] left-[0%] space-x-4">
                {TM.avatar && (
                  <img
                    src={TM.avatar}
                    alt="person"
                    className=" w-40 h-40 rounded-full"
                  />
                )}
                <div className="w-full">
                  {TM.name && (
                    <p className="text-white text-3xl font-bold">{TM.name}</p>
                  )}
                  {TM.company && (
                    <p className="uppercase text-white text-3xl">
                      {TM.company}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-xl">{TM.testimonialContent}</p>
            </div>
          ) : null
        )}
      </div>
      <div
        onClick={moveForward}
        className="flex items-center justify-center w-[68px] h-[68px] rounded-full border-2 border-white cursor-pointer"
      >
        <i className="material-icons-round text-6xl text-white w-[68px] h-[68px] leading-[1.1]">
          chevron_right
        </i>
      </div>
    </div>
  );
};

export default TestimonialList;
