import { NextPage } from "next";
import IncubateeCard from "../../components/Client/Incubation/IncubateeCard";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";
import IncubateesTestimonials from "../../components/Client/Incubation/Testimonials";

const Portfolios: NextPage = () => {
  return (
    <div>
      <Section>
        <SectionTitle
          title={
            <span>
              Our <b>Incubatees</b>
            </span>
          }
        />
        <SectionContent>
          <IncubateeCard
            logo="/assets/images/Incubation/SIAMAF.jpg"
            incubateeName="SIAMAF"
            companyLink="https://siamaf.com/"
            about={
              <p>
                SIAMAF Healthcare is a Bangalore based startup incubated at
                Indian Institute of Science. SIAMAF is developing magnetic
                nanotechnology for radiation free and affordable cancer
                diagnosis and therapy. Magnetic nanotechnology has great
                potential to significantly advance in the field of cancer
                nanomedicine. SIAMAF brings innovative solutions for cancer
                staging, screening, localization, imaging, and hyperthermia
                using advanced magnetic sensing technology and functionalized
                magnetic nanoparticles.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/Thermaissance Logo -.png"
            incubateeName="Thermaissance"
            companyLink="https://www.thermaissance.com/"
            about={
              <p>
                is a nanotechnology-based technical textiles startup. A smart
                textiles venture that reduces various healthcare-associated and
                community-acquired infections. Scientifically proven to be
                effective against enveloped viruses (including coronavirus),
                gram positive bacteria, gram negative bacteria, MRSA, VRE, CRE
                and mucor species. We make various medical textiles such as
                scrubs, gowns, patient clothing, lab coats, etc using these
                fabrics.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/tutle logo.jpg"
            incubateeName="TUTLE"
            companyLink="www.tutletest.com"
            about={
              <p>
                TUTLE help students and professionals in making a career choice
                and support them with affordable learning resources to prepare
                for an ideal healthcare or life sciences job. TUTLE presents
                courses from BMJ, Springer Nature, Royal Colleges, HEE-NHS, BAD,
                BAPRAS, SAS and more. We can help teach doctors and teaching
                hospitals in designing the courses, hosting them on our LMS
                platform and promoting the courses in India.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/64 Codon - Grey (1).png"
            incubateeName="64 CODON"
            companyLink="http://64codon.com/"
            about={
              <p>
                64 Codon is a bio-science company catalysing research with an
                in-house commercial biobank. We have created a unique network of
                partner hospitals and laboratories to collect tumor samples
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/FSD logo.png"
            incubateeName="Fastsense diagnostics"
            companyLink="www.fastsensediagnostics.com"
            about={
              <p>
                Our business has a primary focus on affordable and preventive
                healthcare. We are trying to solve a basic problem that is of
                early diagnostics of life threatening diseases. In MSMF we are
                developing portable diagnostic kits for Neonatal Sepsis
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/TeraLumen Logo ARC.png"
            incubateeName="TERALUMEN"
            companyLink="https://www.teralumensolutions.com/"
            about={
              <p>
                TeraLumen is India’s first Terahertz company, developing compact
                medical systems using multispectral Terahertz and Fluorescence
                technologies combined with Artificial Intelligence for accurate
                diagnosis of cancer margin intraoperatively.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/Logo white owl(Oxyliv).JPG"
            incubateeName="Oxyliv"
            about={
              <p>
                White owl health care works on a vision to bring in indigenous
                solutions to empower low resource health care settings to treat
                the patients more effectively and thereby reducing no of
                admissions requiring critical care. Our aim is to reduce
                inappropriate use of oxygen delivery to the patient in
                respiratory distress and to improve quality and efficacy of the
                respiratory support through an affordable and portable titrated
                air-oxygen therapy device.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/logo_farcast_horizontal_4C.jpg"
            incubateeName="FARCAST Biosciences"
            companyLink="https://www.farcastbio.com/"
            about={
              <p>
                Development and standardization of FarcastTM TiME ex vivo
                platform and evaluation of the effect of anti-cancer agents on
                tumor tissues in culture.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/ominar logo.png"
            incubateeName="Ominar"
            companyLink="https://ominarinnovations.com/"
            about={
              <p>
                Innovations is committed to develop home based kidney screening
                devices for knowing (early detection) Kidney related damage
                using few drops of urine sample. Our technology is Smartphone
                based that detects ‘Urinary Protein to Creatinine Ratio’ (UPCR)
                test using AI/ML programming in 5- 10 minutes.
              </p>
            }
          />
          <IncubateeCard
            logo="/assets/images/Incubation/ikanekt_logo_1.png"
            incubateeName="iKanekt"
            about={
              <p>
                iKanect an innovative company, is a brain child of Industry
                stalwarts in the field of Clinical Research. Clinical Trial
                Process and Document Management (CTPM) from iKanekt is a SaaS
                application that provides a structured workflow to efficiently
                manage the entire process of Clinical Trials at the same time
                providing transparency, visibility, and control to the
                stakeholders managing the trials.
              </p>
            }
          />
        </SectionContent>
      </Section>
      <IncubateesTestimonials />
    </div>
  );
};

export default Portfolios;
