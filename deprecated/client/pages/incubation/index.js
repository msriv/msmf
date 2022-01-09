import Button from "../../design-system/Button";
import { Grid } from "@mui/material";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "../../components/Section";
import Layout from "../../components/Layout";
import IncubationBanner from "../../components/IncubationBanner";
import LandingCTA from "../../components/LandingCTA";

const Index = () => {
  return (
    <Layout>
      <IncubationBanner />
      <Section>
        <SectionTitle type="section">
          Our <b>Incubation Programs</b>
        </SectionTitle>
        <SectionContent>
          <div className=" shadow-lg flex p-10 items-center">
            <div id="incubatees" className="w-6/12">
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <div className="flex justify-end">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex justify-end">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div id="incubatee-information" className="w-6/12 p-5">
              <p className="text-xl font-inter-semibold mb-2">
                Lorem Ipsum is simply dummy.{" "}
              </p>
              <p className="text-lg text-shark-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="my-8">
                <Button type="button">Learn More</Button>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle type="section">
          Our <b>Portfolio Companies</b>
        </SectionTitle>
        <SectionContent>
          <div className=" shadow-lg flex p-10 items-center">
            <div id="portfolio-information" className="w-6/12 p-5">
              <p className="text-xl font-inter-semibold mb-2">
                Lorem Ipsum is simply dummy.{" "}
              </p>
              <p className="text-lg text-shark-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="my-8">
                <Button type="button">Learn More</Button>
              </div>
            </div>
            <div id="portfolio-companies" className="w-6/12">
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="flex justify-center">
                    <img
                      src="http://api.ms-mf.org/assets/incubation/Birac_logo-p27rfaqiz6hjbqiifb22r9n5mzhxb0m9bdbdv2rspq.png"
                      alt="Birac"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </SectionContent>
      </Section>
      <LandingCTA
        image={
          "http://api.ms-mf.org/assets/incubation/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg"
        }
        heading={"Get Incubated with us."}
        content={
          "TBI Incubates early-stage Med-tech devices, which provides healthcare solutions to the poor. We handhold start-ups that are have built a minimum viable product that has early traction and a committed team working full time on creating an impactful solution for the poor."
        }
      />
    </Layout>
  );
};

export default Index;
