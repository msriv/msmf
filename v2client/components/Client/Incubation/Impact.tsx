import { Section, SectionContent } from "../../Common/Section";

const Impact = (): JSX.Element => {
  return (<>
    <Section>
      <div className="relative w-screen h-[612px]">
        <div id="overlay" className="image-overlay flex flex-col h-[612px]">
          <div className="mt-16 w-full">
            <p className="text-[38px] font-light font-roboto text-white text-center">
              Our <b>Impact</b>
            </p>
            <div className="flex flex-wrap justify-center w-full">
              <div className="text-white text-center  w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">26</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Total startup incubated
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">21</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Currently incubated startups
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">55</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Total Mentors
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">13</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Total Patents filed
                </p>
              </div>
              <div className="text-white text-center w-4/12 my-16">
                <p className="text-[45px] m-0 font-bold ">5+ Cr</p>
                <p className="text-[19px] uppercase font-bold m-0">
                  Total funds raised
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.ms-mf.org/images/Rectangle 1550.png"
          alt="philanthropy-banner"
          className="w-screen object-cover h-[612px]"
        />
      </div>

    </Section>
    <Section>
    <SectionContent>
        <p>
        Our innovation center is a unique, and creative ecosystem to inspire researchers, and engineers, to generate and lead to business applications. It is a vibrant platform for interaction and transformation at its grassroots levels.
        </p>
        <p>
        We are combining corporate and general hospital cultures, health care challenges with state-of-the-art technology, and opportunities for business. 

        </p>
        {/* <div className="flex justify-center mt-12">
          <button className="msmf__cta-btn">Apply Now</button>
        </div> */}
      </SectionContent>
    </Section>
</>
  );
};

export default Impact;


//•	Our innovation center is a unique, and creative ecosystem to inspire researchers, and engineers, to generate and lead to business applications. It is a vibrant platform for interaction and transformation at its grassroots levels. 
//•	We are combining corporate and general hospital cultures, health care challenges with state-of-the-art technology, and opportunities for business. 
