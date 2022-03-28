import { TestimonialsData } from "../../../store/data/testimonials";
import { Section, SectionTitle } from "../../Common/Section";
import TestimonialList from "./TestimonialList";

const Testimonials = () => {
  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Incubatees <b>Testimonials</b>
          </span>
        }
      />
      <div className="relative w-screen h-[884px]">
        <div id="overlay" className="image-overlay flex h-[884px] p-8">
          <TestimonialList list={TestimonialsData} />
        </div>
        <img
          src="http://api.ms-mf.orghttps://cdn.ms-mf.org/IncubationBanner.png"
          alt="incubation-banner"
          className="w-screen h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default Testimonials;
