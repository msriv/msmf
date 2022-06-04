import type { NextPage } from "next";
import Head from "next/head";
import ImpactCard from "../components/Client/Home/ImpactCard";
import Carousel from "../components/Common/Carousel";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../components/Common/Section";
import { ContentCard } from "../components/Common/ContentCard";
import Updates from "../components/Client/Research/latestUpdates";
import Image from "next/image";

const MainCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[693px]">
      <div
        id="overlay"
        className="image-overlay flex flex-col items-center justify-center h-[693px]"
      >
        <div className="font-avenir-book text-center w-full">
          <p className="text-white text-xl">
            Mazumdar Shaw Medical Foundation (MSMF)
          </p>
          <p className="mx-auto mt-14 text-5xl font-avenir-heavy text-white w-9/12 text-center">
            “We aim to be a Center of Excellence for Translation of Biomedical
            Research.”
          </p>
        </div>

        {/* OnClick send to research programs */}
        <button
          className="msmf__nav-cta font-avenir-book mt-20"
          onClick={() => {
            window.open("/research#research-programs", "");
          }}
        >
          Learn More
        </button>
      </div>
      {/* <img
        src="https://cdn.ms-mf.org/images/Research/1_HomePage Banner_MSMF 8th floor.jpg"
        alt="philanthropy-banner"
        className="w-screen object-fit h-[693px]"
      /> */}
    </div>
  </div>,
];

const LeadershipCarouselItems = [
  <div key={0}>
    <div className="relative w-screen h-[560px] ">
      <div className="flex flex-row-reverse h-[420px] mt-10 mx-auto w-10/12 bg-[#F9F9F9] ">
        <div id="content" className="bg-white w-5/12 p-10 pt-10">
          <p className="text-black text-3xl font-semibold font-helvetica my-2">
            Dr. Devi Shetty
          </p>
          <p className="text-black text-2xl font-semibold font-helvetica my-2">
            Chairman & Founder Narayana Health
          </p>
          <p className="text-black text-xl font-helvetica my-2">
            Dr. Devi Prasad Shetty is an Indian philanthropist and a cardiac
            surgeon. He has leveraged economies of scale to provide affordable
            healthcare. He was awarded the Padma Bhushan, the third highest
            civilian award in India for his contribution to the field of
            affordable healthcare.
          </p>
        </div>
        <div id="image" className="w-8/12 h-[420px] rounded-[12px] pb-10">
          <img
            src={"https://cdn.ms-mf.org/images/People/Dr. Devi Shetty.jpeg"}
            alt="Research"
            className="w-full h-[420px] object-cover rounded-[24px]"
          />
        </div>
      </div>
    </div>
  </div>,
  <div key={1}>
    <div className="relative w-screen h-[560px] ">
      <div className="flex flex-row-reverse h-[420px] mt-10 mx-auto w-10/12 bg-[#F9F9F9] ">
        <div id="content" className="bg-white w-5/12 p-10 pt-10">
          <p className="text-black text-3xl font-semibold font-helvetica my-2">
            Mr. John Shaw
          </p>
          <p className="text-black text-2xl font-semibold font-helvetica my-2">
            Vice Chairman Biocon Limited
          </p>
          <p className="text-black text-xl font-helvetica my-2">
            Mr. Shaw is the Vice Chairman of Biocon Limited and has been with
            Biocon since 1999. John plays an important role in the Corporate
            Governance of the company. He also plays a key role in the financial
            and strategic development of the group. John is a member of the
            Biocon board and is a part of the company’s key management team.
          </p>
        </div>
        <div id="image" className="w-8/12 h-[420px] rounded-[12px] pb-10">
          <img
            src={"https://cdn.ms-mf.org/images/People/Mr.John Shaw.jpg"}
            alt="Research"
            className="w-full h-[420px] object-cover rounded-[24px]"
          />
        </div>
      </div>
    </div>
  </div>,
  <div key={2}>
    <div className="relative w-screen h-[560px] ">
      <div className="flex flex-row-reverse h-[420px] mt-10 mx-auto w-10/12 bg-[#F9F9F9] ">
        <div id="content" className="bg-white w-5/12 p-10 pt-10">
          <p className="text-black text-3xl font-semibold font-helvetica my-2">
            Dr. Paul C. Salins
          </p>
          <p className="text-black text-2xl font-semibold font-helvetica my-2">
            MD / VP - Narayana Hrudayalaya and Mazumdar Shaw Cancer Hospital
          </p>
          <p className="text-black text-xl font-helvetica my-2">
            Dr. Paul C. Salins is the Managing Director and Vice-President of
            the Mazumdar Shaw Cancer Center and Narayana Hrudayalaya
            Multispecialty Hospital. At 1,400 beds, this is one of the biggest
            cancer center projects in the world. He is an internationally
            acclaimed authority in the specialty of Cranio-Maxillofacial Surgery
            having trained and worked across the globe.
          </p>
        </div>
        <div id="image" className="w-8/12 h-[420px] rounded-[12px] pb-10">
          <img
            src={"https://cdn.ms-mf.org/images/People/dr paul photo 3.jpg"}
            alt="Research"
            className="w-full h-[420px] object-cover rounded-[24px]"
          />
        </div>
      </div>
    </div>
  </div>,
];

const Home: NextPage = () => {
  return (
    <>
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
                prototyping, fabrication and research tools, and medtech
                expertise across a global network.
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
                Our mission is to improve the health of the community by setting
                a standard of excellence in research and community outreach
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
              <div className="text-[24px] text-white font-helvetica text-center py-4">
                Multi-disciplinary Ecosystem for transformation of Healthcare at
                grass-root level
              </div>
              <div className="w-full flex flex-wrap justify-self-center">
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

        <div className="bg-white">
          <Section>
            <SectionContent>
              <div className="text-[38px] font-helvetica text-center py-4">
                Our <b>Leadership</b>
              </div>
              <div className="bg-[#F9F9F9] flex justify-center px-6 py-2">
                {/* <div className="image-overlay flex flex-col items-center justify-center"> */}
                <Carousel
                  carouselID="researchCarousel"
                  alignIndicator="center"
                  carouselItems={LeadershipCarouselItems}
                  classes={`h-[540px]`}
                />
              </div>
            </SectionContent>
          </Section>
        </div>
      </div>

      {/*  OUR FUNDING AGENCIES*/}
      <Section>
        <SectionTitle
          title={
            <span>
              <div className="text-[38px] font-helvetica text-center py-4">
                Our <b>Funding Agencies</b>
              </div>
            </span>
          }
        />
        <SectionContent>
          <div className="flex flex-wrap justify-center items-center w-full mt-10">
            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/SIAMAF.jpg"
                alt="SIAMAF logo"
                className="w-10/12"
              />
            </div>
            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/Thermaissance Logo -.png"
                alt="Thermaissance logo"
                className="w-10/12"
              />
            </div>
            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/logo_farcast_horizontal_4C.jpg"
                alt="Farcast logo"
                className="w-10/12"
              />
            </div>

            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/64 Codon - Grey (1).png"
                alt="64 Codon logo"
                className="w-10/12"
              />
            </div>
            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/TeraLumen Logo ARC.png"
                alt="TeraLumen logo"
                className="w-10/12 "
              />
            </div>
            <div className="flex justify-center w-4/12 my-2">
              <img
                src="https://cdn.ms-mf.org/images/Incubation/Logo white owl(Oxyliv).JPG"
                alt="Oxyliv logo"
                className="w-10/12"
              />
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* OUR LATEST UPDATES */}
      <Updates />
    </>
  );
};

export default Home;
