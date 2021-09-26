import Layout from "../../componentsNew/Layout";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../componentsNew/Section";
import { API_URL } from "../../lib/constants";
import Image from "next/image";
import Button from "../../design-system/Button";

const Partners = () => (
  <Layout>
    <Section>
      <SectionTitle type={"subsection"}>
        <p>
          Our <span className="font-inter-semibold">Partners</span>
        </p>
      </SectionTitle>
      <SectionContent>
        <div className="flex justify-between mt-10">
          <div id="funding-partners" className="shadow-md p-5 w-96">
            <div id="type">
              <p className="text-lg font-inter-bold text-apple mb-3 uppercase">
                {"Funding Partners"}
              </p>
            </div>
            <div className="flex flex-col space-y-10 items-center mt-10">
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png`}
                  alt="birac"
                  width={219}
                  height={157}
                />
              </div>
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/dst-logo.jpg`}
                  alt="birac"
                  width={243}
                  height={179}
                />
              </div>
            </div>
          </div>
          <div id="investment-partners" className="shadow-md p-5 w-96">
            <div id="type">
              <p className="text-lg font-inter-bold text-apple mb-3 uppercase">
                {"Investment Partners"}
              </p>
            </div>
            <div className="flex flex-col space-y-10 items-center mt-10">
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/villgro_logo.png`}
                  alt="birac"
                  width={219}
                  height={225}
                />
              </div>
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/axilor-logo.png`}
                  alt="birac"
                  width={272}
                  height={61}
                />
              </div>
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/gainlogo.png`}
                  alt="birac"
                  width={218}
                  height={146}
                />
              </div>
            </div>
          </div>
          <div id="embassy-partners" className="shadow-md p-5 w-96">
            <div id="type">
              <p className="text-lg font-inter-bold text-apple mb-3 uppercase">
                {"Embassy Partners"}
              </p>
            </div>
            <div className="flex flex-col space-y-10 items-center mt-10">
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/jetro_logo-p27rf6z82xuyngmjyhh6xuszgg8zrvujmbem6f42to.gif`}
                  alt="birac"
                  width={290}
                  height={46}
                />
              </div>
              <div>
                <Image
                  src={`${API_URL}/assets/incubation/uni-basel-logo-p27rf53iyyj1908nrtkixcgr6sstl2rsxdu7qcwuwe.png`}
                  alt="birac"
                  width={230}
                  height={75}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-center">
          <Button type="button" onClick={() => {}}>
            Get Incubated
          </Button>
        </div>
      </SectionContent>
    </Section>
  </Layout>
);

export default Partners;
