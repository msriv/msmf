import { useRouter } from "next/router";
import { Section } from "./Section";
import ContentCard from "./Cards/ContentCard";
import Button from "../design-system/Button";
const ProgramSection = ({
  programType,
  title,
  description,
  images,
  callToAction,
  callToActionComponent,
  noCallToAction,
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(callToAction);
  };

  return (
    <Section id="Nutritional Support">
      <div className="relative mt-56">
        <div
          style={{ height: "38vh", zIndex: -1 }}
          className="absolute w-full bg-silver-500 -top-40"
        ></div>
        <div className="w-10/12 mx-auto">
          <ContentCard>
            <div className="flex flex-col px-10 py-8 ">
              {programType ? (
                <p className="text-base font-inter-bold text-silver-700 mb-3 uppercase">
                  {programType}
                </p>
              ) : null}
              <p className="text-3xl font-inter-semibold  mb-4">{title}</p>
              <p className="text-shark-400 leading-relaxed mb-10">
                {description}
              </p>
              {images ? (
                images.map((item, key) => (
                  <div key={key}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                ))
              ) : (
                <div className="flex space-x-14 mx-auto my-10">
                  <div
                    style={{ width: 318, height: 310 }}
                    className="bg-silver-400"
                  ></div>
                  <div
                    style={{ width: 318, height: 310 }}
                    className="bg-silver-400"
                  ></div>
                  <div
                    style={{ width: 318, height: 310 }}
                    className="bg-silver-400"
                  ></div>
                </div>
              )}
              {!noCallToAction ? (
                callToActionComponent ? (
                  callToActionComponent
                ) : (
                  <div className="mt-16 self-center">
                    <Button type="button" onClick={handleClick}>
                      Learn More
                    </Button>
                  </div>
                )
              ) : null}
            </div>
          </ContentCard>
        </div>
      </div>
    </Section>
  );
};

export default ProgramSection;
