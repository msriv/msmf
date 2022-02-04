import { ReactNode } from "react";
import { ContentCard } from "../../components/Common/ContentCard";
import { Section, SectionContent } from "../../components/Common/Section";

const FacilitiesList: Array<{
  provider?: string;
  facilityName: string;
  aboutFacility: string | ReactNode;
  gallery?: Array<string>;
}> = [
  {
    facilityName: "Molecular Biology Core",
    aboutFacility:
      "The molecular biology core includes PCR machines, Real Time PCRs, droplet digital PCR, Centrifuges, water baths, sonicators, lyophilizers, MilliQ water system, Nanodrop, spectrophotometers. Transfer apparatus, Gel documentation, fume hoods are also part of the facility. 2D Electrophoresis for protein profiling is also a part of the facility.",
  },
  {
    facilityName: "Cloning and Expression facility",
    aboutFacility:
      "Antigen design, PCR machines, Bacterial shaker incubator, Biosafety Cabinets, DNA and Protein gel apparatus, CO2 shaker incubator for mammalian expression",
  },
  {
    facilityName: "In vitro Cell Culture facility",
    aboutFacility:
      "Centre has two cell culture facilities including a primary culture as well as a cell line facility. 2D drug resistant models, patient-derived cell lines and in vitro 3D models biomimicking disease biology and drug resistance are the major models used/developed in the facility",
  },
  {
    facilityName: "Imaging facility/Flow Cytometry",
    aboutFacility:
      "The imaging facility includes fluorescence microscopes, and the flow cytometer (BD FACS CantoII).",
  },
  {
    facilityName: "Antibody Development Facility",
    aboutFacility:
      "Immunization, booster and maintenance of responsive rodents (through collaboration with In Vivo Biosciences), In house polyclonal antibody purification, Monoclonal antibody generation (Fusion method) both hybridoma and recombinant, antibody fragment generation",
  },
  {
    facilityName: "Immunodiagnostic Facility",
    aboutFacility:
      "Conjugation of purified antibody and/or antibody fragments to fluorophores or enzymes, ELISA (absorbance and fluorescence) assay development, validation and performance",
  },
  {
    facilityName: "Histology and Immunohistochemistry",
    aboutFacility:
      "The centralized facility allows for preparation of FFPE blocks, sectioning (microtome) and immunohistochemistry",
  },
  {
    facilityName: "Biorepository",
    aboutFacility:
      "The biorepository is established in collaboration with MSMC, NH and archives samples from cancers of Head and Neck, Glioblastoma, Hematology, Breast cancers and is being expanded to other cancers. Open Specimen Software is used for repository management",
  },
  {
    facilityName: "Nanotechnology",
    aboutFacility:
      "The Nanotechnology lab includes Dissolution Test Apparatus, Photometer 5010, Electrospinning units, Sonicator, Lyophilizer, Diffusion cell apparatus and Cary 630 FTIR",
  },
  {
    facilityName: "Computational Biology",
    aboutFacility:
      "The Computational Biology facility includes multiple high-end systems with high throughput sequencing analysis, artificial intelligence and machine learning capabilities",
  },
  {
    provider: "External Networking",
    facilityName: "Genomics/Transcriptomics/Proteomics",
    aboutFacility:
      "MSMF has long standing collaborations with Medgenome, Eurofins and Institute of Bioinformatics (IOB) for work related to high throughput profiling including Transcriptomics, Proteomics and Genomics",
  },
  {
    provider: "External Networking",
    facilityName: "In vivo model development",
    aboutFacility:
      "Animal studies are carried out in collaboration with multiple institutes such as Syngene India, SRMC, Chennai. In vivo Biosciences, Bangalore",
  },
];

const Facilities = () => {
  return (
    <Section>
      <SectionContent>
        {FacilitiesList.map((item, key) => (
          <ContentCard key={key}>
            {item.provider && (
              <p className="uppercase font-bold text-[#6A6A6A] m-0">
                {item.provider}
              </p>
            )}
            <p className="font-bold text-4xl my-2">{item.facilityName}</p>
            <p className="text-2xl">{item.aboutFacility}</p>
            {/* TODO: Implement Galleries */}
          </ContentCard>
        ))}
      </SectionContent>
    </Section>
  );
};

export default Facilities;
