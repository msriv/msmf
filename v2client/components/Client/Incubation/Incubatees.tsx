import Carousel from "../../Common/Carousel";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";

const IncubateeCarouselItems = [
  <div key={0} className="w-full">
    <div className="flex flex-wrap justify-center items-center w-10/12 mx-auto mt-10">
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/FSD logo.png"
          alt="FSD logo"
          className="w-4/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/SIAMAF.jpg"
          alt="SIAMAF logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/Thermaissance Logo -.png"
          alt="Thermaissance logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/logo_farcast_horizontal_4C.jpg"
          alt="Farcast logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/tutle logo.jpg"
          alt="Tutle logo"
          className="w-6/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/64 Codon - Grey (1).png"
          alt="64 Codon logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/TeraLumen Logo ARC.png"
          alt="TeraLumen logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/Logo white owl(Oxyliv).JPG"
          alt="Oxyliv logo"
          className="w-8/12"
        />
      </div>
    </div>
  </div>,
  <div key={1} className="w-full">
    <div className="flex flex-wrap justify-center items-center w-10/12 mx-auto mt-10">
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/FSD logo.png"
          alt="FSD logo"
          className="w-4/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/SIAMAF.jpg"
          alt="SIAMAF logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/Thermaissance Logo -.png"
          alt="Thermaissance logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/logo_farcast_horizontal_4C.jpg"
          alt="Farcast logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/tutle logo.jpg"
          alt="Tutle logo"
          className="w-6/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/64 Codon - Grey (1).png"
          alt="64 Codon logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/TeraLumen Logo ARC.png"
          alt="TeraLumen logo"
          className="w-8/12"
        />
      </div>
      <div className="flex justify-center w-3/12 my-2">
        <img
          src="https://cdn.ms-mf.org/images/Incubation/Logo white owl(Oxyliv).JPG"
          alt="Oxyliv logo"
          className="w-8/12"
        />
      </div>
    </div>
  </div>,
];
const Incubatees = (): JSX.Element => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Incubatees</b>
          </span>
        }
      />
      <Carousel
        alignIndicator="center"
        carouselID="incubation-carousel"
        carouselItems={IncubateeCarouselItems}
        theme={"dark"}
      />
    </Section>
  );
};

export default Incubatees;
