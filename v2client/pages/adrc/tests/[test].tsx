import { GetStaticProps } from "next";
import loadConfig from "next/dist/server/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ContentCard } from "../../../components/Common/ContentCard";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "../../../components/Common/Section";

interface Test {
  testName: string;
  about: string;
  technique: string;
  TAT: string;
  contact: string | Array<string>;
}

interface Panel {
  panelName: string;
  testPanel: Array<Test>;
}

interface TestsProps {
  [testname: string]: Panel;
}

const TestData: TestsProps = {
  "brain-tumor": {
    panelName: "Brain Tumor",
    testPanel: [
      {
        testName: "IDH1 Mutation",
        about: `Glioblastoma, the aggressive brain tumor is characterized by the wild type Arginine residue at amino acid position 132. Tumors with any mutation changing the R132 to H,C or S has been strongly associated with a better prognosis. Thus, the test has been recommended as the first test for classifying brain tumor by WHO`,
        technique: "ddPCR",
        TAT: "24 hrs",
        contact: "Dr. Komal Prasad",
      },
      {
        testName: "1p19q double deletion",
        about: `The tumor is classiied as Oligodendroglioma, if it has a mutated amino acid at position 132 and harbors the double deletion of 1p and 19q`,
        technique: "FISH",
        TAT: "2 days",
        contact: "Dr. Komal Prasad",
      },
    ],
  },
  covid: {
    panelName: "Covid",
    testPanel: [
      {
        testName: "Anti-N Antibody",
        about: `Are you infected with SARS-CoV2? Even if you are asymptomatic, are you protected from further infection? `,
        technique: "ELISA",
        TAT: "24 hrs",
        contact: "Dr. R K Prasad",
      },
      {
        testName: "Anti-Spike Antibody",
        about: `Hope you are already vaccinated. Are you still protected against the dreaded SARS-Cov2?`,
        technique: "ELISA",
        TAT: "24 hrs",
        contact: "Dr. R K Prasad",
      },
      {
        testName: "T-Cell Activity",
        about: `Don’t have anti-CoVID antibody ? Nothing to worry about. Many people are protected against the virus with the help of another 'immune soldier' called the T-Cells.`,
        technique: "ELISA",
        TAT: "24 hrs",
        contact: "Dr. R K Prasad",
      },
    ],
  },
  transplant: {
    panelName: "Transplant",
    testPanel: [
      {
        testName: "HLA Typing",
        about: `Due for an organ transplant? Know your match with the donor to decrease chances of organ rejection`,
        technique: "NGS",
        TAT: "5 days",
        contact: ["Dr. Ram Mohan Bhat", "Dr. Julius Punnen"],
      },
    ],
  },
};

const Tests = () => {
  const router = useRouter();
  const { test } = router.query;
  const [data, setData] = useState<Panel>();

  useEffect(() => {
    if (test) {
      // @ts-ignore
      const panelObj = TestData[test];
      if (panelObj) setData(panelObj);
    }
  }, [test]);

  return data ? (
    <Section>
      <SectionTitle title={<b>Tests</b>} />
      <SectionContent>
        <ContentCard>
          <p className="font-bold uppercase text-[#6A6A6A]">
            Panel: {data.panelName}
          </p>
          <div className="divide-y-2">
            {data.testPanel.map((testItem, key) => (
              <div key={key}>
                <p className="font-semibold text-4xl mb-0">
                  {testItem.testName}
                </p>
                <p className="text-2xl text-[#6A6A6A] mt-2">{testItem.about}</p>
                <div className="w-full flex justify-between">
                  <p className="font-bold text-[#6A6A6A] mb-0">
                    <span className="uppercase">Technique: </span>
                    {testItem.technique}
                  </p>
                  <p className="font-bold text-[#6A6A6A] mb-0">
                    <span className="uppercase">TAT: </span>
                    {testItem.TAT}
                  </p>
                </div>
                <p className="mt-2 mb-4 font-bold text-[#6A6A6A] uppercase">
                  Contact: {testItem.contact}
                </p>
              </div>
            ))}
          </div>
        </ContentCard>
      </SectionContent>
    </Section>
  ) : (
    <p>Loading...</p>
  );
};

export default Tests;
