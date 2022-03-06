import React from "react";

interface ImageListItemProps {
  dir?: "rtl" | "ltr";
  title: string;
  content: string | React.ReactNode;
  vector: { src: string; alt: string };
}

const ImageListItem = (props: ImageListItemProps) => {
  const { dir, title, content, vector } = props;
  return (
    <div className="mt-3">
      <div
        className={`flex items-center ${
          dir && dir === "rtl" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-[87px] h-[87px] min-w-[87px] min-h-[87px] border rounded-full flex justify-center items-center border-[#535050]">
          <img {...vector} className="object-cover w-[45px] h-[45px]" />
        </div>
        <p
          className={`uppercase font-bold text-[24px] m-0 ${
            dir && dir === "rtl" ? "mr-10 text-right" : "ml-10 text-left"
          }`}
        >
          {title}
        </p>
      </div>
      <div
        className={`prose max-w-full font-normal text-justify ${
          dir && dir === "rtl" ? "text-right" : "text-left"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ImageListItem;
