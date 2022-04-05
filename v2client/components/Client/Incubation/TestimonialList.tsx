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
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-white cursor-pointer"
      >
        <p className="m-0 flex justify-center items-center w-[60px] h-[60px] ">
        <i className="material-icons-round text-4xl text-white leading-[1]">
          chevron_left
        </i>
        </p>
      </div>
      <div className="flex justify-around items-center">
        {list.map((TM: ITestimonial, key: number) =>
          listState.includes(key) ? (
            <div
              key={key}
              className="relative w-4/12 p-10 bg-white rounded max-h-max z-10 tooltip-arrow h-[450px] mb-40"
            >
              <div className="absolute w-10 h-10 bg-white top-[95%] left-[10%] rotate-45 transform skew-x-12 skew-y-12"></div>
              <div className="flex items-center absolute top-[112%] left-[4%] space-x-4">
                {TM.avatar && (
                  <img
                    src={TM.avatar}
                    alt="person"
                    className=" min-w-[6rem] w-24 h-24 rounded-full"
                  />
                )}
                <div className="w-full">
                  {TM.name && (
                    <p className="text-white text-xl font-bold">{TM.name}</p>
                  )}
                  {TM.company && (
                    <p className="uppercase text-white text-xl">
                      {TM.company}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-base h-[370px]">{TM.testimonialContent.length > 500 ? `${TM.testimonialContent.substring(0, 500)}...` : TM.testimonialContent}</p>
            </div>
          ) : null
        )}
      </div>
      <div
        onClick={moveForward}
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-white cursor-pointer"
      >
        <p className=" m-0 flex items-center justify-center  w-[60px] h-[60px]">
        <i className="material-icons-round text-4xl text-white leading-[1]">
          chevron_right
        </i></p>
      </div>
    </div>
  );
};

export default TestimonialList;
