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
      <div className="relative w-screen h-[680px]">
        <div id="overlay" className="image-overlay flex h-[680px] p-8">
          <TestimonialList />
        </div>
        <img
          src="https://cdn.ms-mf.org/images/Rectangle 1550.png"
          alt="incubation-banner"
          className="w-screen h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default Testimonials;
