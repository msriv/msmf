import { ReactNode, useState } from "react";
import { ContentCard } from "../../Common/ContentCard";

export interface ProgramCardProps {
  projectName: string;
  aboutProject?: string;
  fundProvider?: string;
  translation?: string;
  publications?: string | ReactNode;
  sourceProgram?: string;
  industryPartner?: string;
  members?: Array<string>;
  collaborators?: Array<string>;
}

const ProgramCard = (props: ProgramCardProps) => {
  const {
    projectName,
    aboutProject,
    fundProvider,
    translation,
    sourceProgram,
    industryPartner,
    publications,
    members,
    collaborators,
  } = props;

  const [open, setOpen] = useState(false);

  const handleAccordionOpen = (event: any) => {
    event.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <ContentCard>
      <div id="accordion">
        <div
          id="accordion-header"
          className="flex justify-between items-center cursor-pointer w-full"
          onClick={handleAccordionOpen}
        >
          <div className="w-10/12">
            <p className="m-0 mt-4 text-xl font-bold text-[#6A6A6A] uppercase">
              Research Project
            </p>
            <p className="m-0 mt-2 mb-4 text-4xl font-semibold ">
              {projectName}
            </p>
          </div>
          <button
            type="button"
            className="w-1/12"
            onClick={handleAccordionOpen}
          >
            <span
              className={`transition duration-300 ease-in-out text-6xl material-icons-round ${
                open && "rotate-180"
              }`}
            >
              arrow_drop_down
            </span>
          </button>
        </div>
        <p>{aboutProject}</p>
        {open && (
          <div id="accordion-collapse">
            {fundProvider && (
              <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A] ">
                <span className="uppercase">Funds:</span> {fundProvider}
              </p>
            )}
            {translation && (
              <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A]">
                <span className="uppercase">Translations:</span> {translation}
              </p>
            )}
            {sourceProgram && (
              <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A]">
                <span className="uppercase">Source Program:</span>{" "}
                {sourceProgram}
              </p>
            )}
            {industryPartner && (
              <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A]">
                <span className="uppercase">Industry Partner:</span>
                {industryPartner}
              </p>
            )}
            {publications !== null &&
            publications !== "" &&
            publications !== undefined ? (
              typeof publications === "string" ? (
                <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A] ">
                  <span className="uppercase">Publications:</span>{" "}
                  {publications}
                </p>
              ) : (
                <div>
                  <p className="m-0 mt-2 text-xl font-bold text-[#6A6A6A] uppercase">
                    Publications
                  </p>
                  <div>{publications}</div>
                </div>
              )
            ) : null}
            <div className="flex items-start space-x-36 mt-6">
              {members && (
                <div>
                  <p className="mb-2 text-xl font-bold text-[#6A6A6A] uppercase">
                    Members
                  </p>
                  {members.map((item, key) => (
                    <p key={key} className="m-0">
                      {item}
                    </p>
                  ))}
                </div>
              )}
              {collaborators && (
                <div>
                  <p className="mb-2 text-xl font-bold text-[#6A6A6A] uppercase">
                    Collaborators
                  </p>
                  {collaborators.map((item, key) => (
                    <p key={key} className="m-0">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ContentCard>
  );
};

export default ProgramCard;
