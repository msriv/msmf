import type { NextPage } from "next";
import Head from "next/head";
import ImpactCard from "../components/Client/Home/ImpactCard";
import Carousel from "../components/Common/Carousel";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../components/Common/Section";

const MainCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[693px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[693px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-5xl font-avenir-heavy text-white w-9/12 text-center">
            “We aim to be a Center of Excellence for Translation of Biomedical
            Research.”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20">
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/1_HomePage Banner_MSMF 8th floor.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[693px]"
      />
    </div>
  </div>,
];

const LeadershipCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[693px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[693px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Centre for Translational Research (MSCTR)
          </p>
          <p className="mx-auto mt-14 text-5xl font-avenir-heavy text-white w-9/12 text-center">
            “We aim to be a Center of Excellence for Translation of Biomedical
            Research.”
          </p>
        </div>
        <button className="msmf__nav-cta font-avenir-book mt-20">
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.ms-mf.org/images/Research/1_HomePage Banner_MSMF 8th floor.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[693px]"
      />
    </div>
  </div>,
];

const Home: NextPage = () => {
  return (
    <div>
      <Carousel
        carouselID="researchCarousel"
        alignIndicator="center"
        carouselItems={MainCarouselItems}
        classes={`h-[693px]`}
      />
      <div className="w-full mt-24">
        <div className="text-[38px] font-helvetica text-center">
          Our <b>Wings</b>
        </div>
        <div className="flex flex-row h-[420px] mt-10 mx-auto w-10/12">
          <div id="content" className="bg-research w-5/12 p-10">
            <p className="text-white text-3xl font-semibold font-helvetica my-2">
              Research
            </p>
            <p className="text-white text-xl font-helvetica my-2">
              Mazumdar Shaw Center for Translational Research (MSCTR) has been
              established with the aim of developing scientific breakthroughs
              resulting in more effective and affordable healthcare for a wide
              range of human diseases and conditions.{" "}
            </p>
            <button className="msmf__nav-cta font-avenir-book mt-14">
              Learn More
            </button>
          </div>
          <div id="image" className="w-7/12 h-[420px]">
            <img
              src={
                "https://cdn.ms-mf.org/images/Homepage/1_Banner5Research_.jpg"
              }
              alt="Research"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[420px] mt-10 mx-auto w-10/12">
          <div id="content" className="bg-incubation-alt w-5/12 p-10">
            <p className="text-white text-3xl font-semibold font-helvetica my-2">
              Business Incubation
            </p>
            <p className="text-white text-xl font-helvetica my-2">
              TBI functions as a workshop for various users to have access to
              prototyping, fabrication and research tools, and medtech expertise
              across a global network.
            </p>
            <button className="msmf__nav-cta font-avenir-book mt-14">
              Learn More
            </button>
          </div>
          <div id="image" className="w-7/12 h-[420px]">
            <img
              src={
                "https://cdn.ms-mf.org/images/Homepage/1_Banner3Incubation_FMW09683+.jpg"
              }
              alt="Research"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row h-[420px] mt-10 mx-auto w-10/12">
          <div id="content" className="bg-adrc w-5/12 p-10">
            <p className="text-white text-3xl font-semibold font-helvetica my-2">
              Diagnostics
            </p>
            <p className="text-white text-xl font-helvetica my-2">
              Advanced Diagnostic Research Centre (ADRC) is a unit of Mazumdar
              Shaw Medical Foundation established towards translation of
              research output to improvement of patient care through advanced
              and affordable molecular tests.
            </p>
            <button className="msmf__nav-cta font-avenir-book mt-14">
              Learn More
            </button>
          </div>
          <div id="image" className="w-7/12 h-[420px]">
            <img
              src={
                "https://cdn.ms-mf.org/images/Homepage/1_Banner2ADRC_HLA lab 1.jpg"
              }
              alt="Research"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[420px] mt-10 mx-auto w-10/12">
          <div id="content" className="bg-philanthropy w-5/12 p-10">
            <p className="text-white text-3xl font-semibold font-helvetica my-2">
              Philanthropy
            </p>
            <p className="text-white text-xl font-helvetica my-2">
              Our mission is to improve the health of the community by setting a
              standard of excellence in research and community outreach
              programs. MSMF pushes the boundaries of discovery, transforms
              healthcare and creates hope for humanity
            </p>
            <button className="msmf__nav-cta font-avenir-book mt-14">
              Learn More
            </button>
          </div>
          <div id="image" className="w-7/12 h-[420px]">
            <img
              src={
                "https://cdn.ms-mf.org/images/Homepage/1_Banner4Philan_MSCOP nutrition support 2.jpg"
              }
              alt="Research"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
      <Section>
        <div className=" bg-gray-900 ">
          <SectionContent>
            <div className="text-[38px] text-white font-helvetica text-center py-4">
              Our <b>Impact</b>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-6/12">
                <ImpactCard title={"Publication"} number={70} />
                <ImpactCard title={"Patents (Granted)"} number={2} />
                <ImpactCard title={"Incubatees"} number={26} />
                <ImpactCard title={"Patients Under Support"} number={675} />
                <ImpactCard title={"Diagnostic Tests"} number={28} />
              </div>
              <div className="w-6/12">
                <ImpactCard title={"Patents (Filed)"} number={10} />
                <ImpactCard title={"Grants"} number={25} />
                <ImpactCard title={"Mentors"} number={55} />
                <ImpactCard title={"Collaboration"} number={20} />
              </div>
            </div>
          </SectionContent>
        </div>
      </Section>
      <Section>
        <SectionContent>
          <div className="text-[38px] font-helvetica text-center py-4">
            Our <b>Leadership</b>
          </div>
          <div className="bg-[#F9F9F9] px-6 py-4">
            <Carousel
              carouselID="researchCarousel"
              alignIndicator="center"
              carouselItems={MainCarouselItems}
              classes={`h-[597px]`}
            />
          </div>
        </SectionContent>
      </Section>
    </div>
  );
};

export default Home;
