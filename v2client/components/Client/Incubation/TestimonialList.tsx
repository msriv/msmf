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
    setListState((prevState) => [prevState[0] + 1, prevState[1] + 1]);
  };

  const moveBackward = () => {
    setListState((prevState) => [prevState[0] - 1, prevState[1] - 1]);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div onClick={moveBackward}>Arrow Left</div>
      <div className="flex justify-around items-center">
        {list.map((TM: ITestimonial, key: number) =>
          listState.includes(key) ? (
            <div
              key={key}
              className="w-5/12 p-4 bg-white border border-gray-300 ring-1 ring-gray-900/5 rounded "
            >
              <span>{TM.testimonialContent}</span>
            </div>
          ) : null
        )}
      </div>
      <div onClick={moveForward}>Arrow Right</div>
    </div>
  );
};

export default TestimonialList;
