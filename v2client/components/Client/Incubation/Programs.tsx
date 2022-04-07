import { useEffect, useState } from "react";
import Link from "next/link";
import { Section, SectionContent, SectionTitle } from "../../Common/Section";
import { useRouter } from "next/router";

interface IContent {
  programName: string;
  description: string;
  action: string;
}

const Programs = () => {
  const router = useRouter();

  const [content, setContent] = useState<IContent>({
    programName: "",
    description: "",
    action: "",
  });

  useEffect(() => {
    setContent({
      programName: "BioNEST",
      description:
        "The BioNEST program established in 2019 is aimed to accelerate start-ups and  leap-frog innovations with a potential to create a larger impact in the healthcare space. The BioNEST program brings together our network of partner hospitals and prominent clinicians, researchers and mentors from diverse domains along with Industrial, Venture Capital and other funding partners.",
      action: "/incubation/programs",
    });
  }, []);

  const handleContent = (program: string) => {
    switch (program) {
      case "bionest":
        {
          setContent({
            programName: "BioNEST",
            description:
              "The BioNEST program established in 2019 is aimed to accelerate start-ups and  leap-frog innovations with a potential to create a larger impact in the healthcare space. The BioNEST program brings together our network of partner hospitals and prominent clinicians, researchers and mentors from diverse domains along with Industrial, Venture Capital and other funding partners.",
            action: "/incubation/programs#BioNEST",
          });
        }
        break;
      case "incite":
        {
          setContent({
            programName: "InCITE",
            description:
              "InCITE is a unique early stage incubator offering co-creation facilities for biomedical innovations to spur technically-disruptive, clinically-impactful and commercially-viable technologies.",
            action: "/incubation/programs#InCITE",
          });
        }
        break;
      case "cip":
        {
          setContent({
            programName: "CIP (Clinical Immersion Program)",
            description:
              "The Clinical Immersion Program (CIP) is a 6 month program unique to the Mazumdar Shaw Medical Center- Technology Business Incubator.",
            action: "/incubation/programs#CIP",
          });
        }
        break;
      case "phd":
        {
          setContent({
            programName: "PhD Programs",
            description:
              "At MSMF we believe our core expertise and value chain can be harnessed to help entrepreneurs and clinicians realise their life’s ambition of completing a Phd program. ",
            action: "/incubation/programs#PhD",
          });
        }
        break;
    }
  };

  const goToPrograms = (action: string) => {
    router.push(action);
  };

  return (
    <Section>
      <SectionTitle
        title={
          <span>
            Our <b>Incubation Programs</b>
          </span>
        }
      />
      <SectionContent>
        <div className="w-full shadow-lg flex p-4 rounded">
          <div className="w-5/12">
            <div className="grid gap-4 grid-cols-2 grid-rows-2">
              <div
                onClick={() => handleContent("bionest")}
                className="w-[240px] h-[240px] border rounded border-[#0E4981] hover:shadow-md hover:border-2 active:shadow-2xl transition duration-500 ease-in-out flex justify-center items-center"
              >
                <img
                  src="https://cdn.ms-mf.org/images/Incubation/Bionest_logo.jpg"
                  alt="Bionest logo"
                  className="w-[200px] mx-auto"
                />
              </div>
              <div
                onClick={() => handleContent("incite")}
                className="w-[240px] h-[240px] border rounded border-[#0E4981] hover:shadow-md hover:border-2 active:shadow-2xl transition duration-500 ease-in-out flex justify-center items-center"
              >
                <img
                  src="https://cdn.ms-mf.org/images/Incubation/Incite Logo printo.jpg"
                  alt="Incite Logo"
                  className="w-[200px]  mx-auto"
                />
              </div>
              <div
                onClick={() => handleContent("cip")}
                className="w-[240px] h-[240px] border rounded border-[#0E4981] hover:shadow-md hover:border-2 active:shadow-2xl transition duration-500 ease-in-out flex justify-center items-center"
              >
                <img
                  src="https://cdn.ms-mf.org/images/Incubation/CIP Logo.PNG"
                  alt="CIP Logo"
                  className="w-[200px]  mx-auto"
                />
              </div>
              <div
                onClick={() => handleContent("phd")}
                className="w-[240px] h-[240px] border rounded border-[#0E4981] hover:shadow-md hover:border-2 active:shadow-2xl transition duration-500 ease-in-out flex justify-center items-center"
              >
                <img
                  src="https://cdn.ms-mf.org/images/Incubation/MSMF_PhD_logopng.png"
                  alt="MSMF PhD program Logo"
                  className="w-[200px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="ml-4 w-7/12 p-6">
            <p className=" font-semibold text-[23px]">{content.programName}</p>
            <p className="text-[21px]">{content.description}</p>
            <button
              onClick={() => goToPrograms(content.action)}
              className="msmf__cta-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Programs;
