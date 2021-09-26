import Layout from "../../../componentsNew/Layout";
import ProgramSection from "../../../componentsNew/ProgramSection";
import Button from "../../../design-system/Button";

const InCite = () => (
  <Layout>
    <ProgramSection
      title={"InCITE"}
      description={`There is a widening gap between the healthcare needs and medical technologies evolution, more so in India where majority of hospitals depend on imported technologies. There is an urgent need to integrate the clinical and molecular worlds to bridge this gap. The real science translation to the needs of Indian patients will have to happen in India and this can only be enabled in an ecosystem where there is constant interaction between clinicians and molecular scientists. The technologies cannot be developed only by the clinicians as they are already overburdened with patient care, diagnostics etc and molecular scientists are not aware of clinical needs to the extent that they need to be or have no access to a facility where the technologies which can help in healthcare evaluated in a clinical set up. Our facility can integrate of these two making Integrative Translational Research happen along with access to pre-seed or proof of concept funds.

MSMF-Narayana Health have been at the forefront in successful implementation of affordable healthcare in our country and this vision when expanded to technology development and translational research will enable greater value for improved healthcare outcomes. Development of Mazumdar Shaw Medical Foundation and Translational Institute has resulted in the TBI under the aegis of Department of Science & Technology in July 2015 within the campus and several companies incubated so far. The major advantage for these companies is that they have direct access to clinicians for interactions for real time productization of ideas with proper clinical evidence. Along with this, Narayana Health has set up a clinical research department which has gained all necessary national and international clearances to perform clinical trials (USFDA), which acts as a conduit between the incubator and the hospital infrastructure.

This infrastructure has been set up with a vision to perform molecular research and enable high quality scientists to develop their ideas into value for clinical biomarkers. In order to do this, MSMF has several important facilities for molecular and translational research. The facilities include genomics, proteomics, cell biology, immunology, histopathology, transcriptomics, animal house, bioinformatics and biostatistics. The entrepreneurs who can get incubated will have access to world-class infrastructure along with clinical support and funds in developing validated technologies`}
      noCallToAction
      noImages
    />
    <div className="flex mt-16 justify-center">
      <Button type="button" onClick={() => {}}>
        Apply Now
      </Button>
    </div>
  </Layout>
);

export default InCite;
