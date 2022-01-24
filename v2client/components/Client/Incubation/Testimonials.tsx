import { ITestimonial } from "../../../utils/Interfaces";
import { Section, SectionTitle } from "../../Common/Section";
import TestimonialList from "./TestimonialList";

const testimonialList: ITestimonial[] = [
  {
    name: "Vishnu",
    company: "Tutle",
    testimonialContent:
      "MSMF has been a great support system for our company and it has provided us with an ecosystem that consists of experienced doctors from different specialities and researchers. This is a golden opportunity for our company as most of the resources that we require are available at MSMF and this support from MSMF will enable us to produce high quality courses for Indian Healthcare professionals.  We strongly believe that our vision to become an essential part of healthcare education in India can be a reality with the support of MSMF and this will reflect in the future course content that we produce.",
    avatar: "/assets/images/Incubation/Ellipse 1.png",
  },
  {
    name: "Dr. Jyotirmayee Dash",
    company: "Teralumen",
    testimonialContent:
      "We have developed our imaging device and are about to start with clinical validation. We are looking forward to working with MSMF for our trials in a clinical environment. We have already spoken to several doctors at MSMF regarding the potential of our device and the discussions have been very promising. We are confident that with the advice and guidance from MSMF, we will be able to achieve our targets very soon.",
    avatar: "/assets/images/Incubation/Ellipse 2.png",
  },
  {
    name: "Dr. Jyotirmayee Dash",
    company: "Teralumen",
    testimonialContent:
      "We have not developed our imaging device and are about to start with clinical validation. We are looking forward to working with MSMF for our trials in a clinical environment. We have already spoken to several doctors at MSMF regarding the potential of our device and the discussions have been very promising. We are confident that with the advice and guidance from MSMF, we will be able to achieve our targets very soon.",
    avatar: "/assets/images/Incubation/Ellipse 2.png",
  },
];

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
          <TestimonialList list={testimonialList} />
        </div>
        <img
          src="http://api.ms-mf.org/assets/IncubationBanner.png"
          alt="incubation-banner"
          className="w-screen h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default Testimonials;
