import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import Link from "next/link";
import Carousel from "../../components/Common/Carousel";
import React from "react";
import { ContentCard } from "../../components/Common/ContentCard";

const carouselItems: Array<React.ReactNode> = [
  <div key={0} className="flex w-full h-full">
    <div className="relative w-6/12">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <img
        src="https://cdn.ms-mf.org/images/ADRC/image 1.png"
        className="block w-full h-full"
        alt="..."
      />
    </div>
    <div className="carousel-caption bg-black text-white text-center w-6/12 flex flex-col justify-center items-center">
      <div className="w-8/12">
        <p className="prose text-3xl text-white font-bold font-avenir-heavy font-center">
          A correct diagnosis is three-fourths of the remedy.
        </p>
        <p className="prose text-xl text-[#FBB604] italic font-bold font-avenir-heavy font-center mt-14">
          Mahatma Gandhi
        </p>
        <button className="msmf__nav-cta font-avenir-book mt-6">
          About Us
        </button>
      </div>
    </div>
  </div>,
    <div key={1} className="flex w-full h-full">
    <div className="relative w-6/12">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <img
        src="https://cdn.ms-mf.org/images/ADRC/image 4.png"
        className="block w-full h-full"
        alt="..."
      />
    </div>
    <div className="carousel-caption bg-black text-white text-center w-6/12 flex flex-col justify-center items-center">
      <div className="w-8/12">
        <p className="prose text-3xl text-white font-bold font-avenir-heavy font-center">
        Research is formalized curiosity. It is poking and prying with a purpose
        </p>
        <p className="prose text-xl text-[#FBB604] italic font-bold font-avenir-heavy font-center mt-14">
        Zora Neale Hurston
        </p>
        <button className="msmf__nav-cta font-avenir-book mt-6">
          About Us
        </button>
      </div>
    </div>
  </div>,

];

const ADRC = () => {
  return (
    <div>
      <Carousel
        alignIndicator="right"
        carouselID="adrc-carousel"
        carouselItems={carouselItems}
        classes="h-[542px]"
      />
      <Section>
        <SectionContent>
          <ContentCard>
            <div className="w-full flex justify-between">
              <div className="w-6/12 px-4">
                <p className="font-semibold text-4xl">Our Vision</p>
                <p className="">
                  In treating a disease, a good diagnosis is the battle half
                  won. Thus ADRC, Advanced Diagnostic Research Center, has been
                  established to specifically provide niche diagnostic solutions
                  to the patients. Most of the tests are validated and developed
                  in MSMF. The data generated is used in extensive
                  multidisciplinary clinical research to bring out the synergy
                  of the treating physicians, the pathologists and the
                  scientists.{" "}
                </p>
                <p className="font-semibold text-4xl">Certifications</p>
                <ul>
                  <li>DSIR</li>
                  <li>NABL</li>
                </ul>
              </div>
              <div className="w-6/12 px-4">
                <img
                  src="https://cdn.ms-mf.org/images/ADRC/about-us-banner.jpeg"
                  alt="About Us"
                  className="rounded"
                />
              </div>
            </div>
          </ContentCard>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Tests</b>
            </span>
          }
        />
        <div className="flex w-full mb-10">
          <div className="relative w-6/12">
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <img
              src="https://cdn.ms-mf.org/images/ADRC/image 3.png"
              className="block w-full h-full"
              alt="..."
            />
          </div>
          <div className="carousel-caption bg-black text-white text-center w-6/12 flex flex-col justify-center items-center">
            <div className="w-8/12">
              <p className="prose text-3xl text-white font-bold font-avenir-heavy font-center">
                Absence of evidence is not evidence of absence.
              </p>
              <p className="prose text-xl text-[#FBB604] italic font-bold font-avenir-heavy font-center mt-14">
                Carl Sagan
              </p>
            </div>
          </div>
        </div>
        <SectionContent>
          <div className="flex justify-between w-full">
            <Link href={"/adrc/tests/brain-tumor"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-adrc flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/ADRC/brain 1.png"
                    alt="brain-tumor"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-xl">
                  Brain Tumor Panel
                </p>
                <p className="m-0 text-center">IDH1 Mutation</p>
                <p className="m-0 text-center">1p19q double deletion</p>
              </div>
            </Link>
            <Link href={"/adrc/tests/covid"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-adrc flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/ADRC/virus (1) 1.png"
                    alt="covid"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-xl">Covid Panel</p>
                <p className="m-0 text-center">Anti-N Antibody</p>
                <p className="m-0 text-center">Anti-Spike Antibody</p>
                <p className="m-0 text-center">T-Cell Activity</p>
              </div>
            </Link>
            <Link href={"/adrc/tests/transplant"}>
              <div className="cursor-pointer transition duration-300 ease-in-out w-4/12 m-4 shadow-lg rounded bg-white p-10 hover:shadow-xl">
                <div className="w-4/12 my-0 p-3 mx-auto bg-adrc flex justify-center">
                  <img
                    src="https://cdn.ms-mf.org/images/ADRC/kidney 1.png"
                    alt="transplant"
                    className="m-0"
                  />
                </div>
                <p className="font-bold text-center text-xl">
                  Transplant Panel
                </p>
                <p className="m-0 text-center">HLA Transplant</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
     

    </div>
  );
};

export default ADRC;
