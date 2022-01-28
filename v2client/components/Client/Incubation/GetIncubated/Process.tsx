import ImageListItem from "../../../Common/ImageListItem";

const Process = () => {
  return (
    <div className="timeline">
      <div className="timeline-container left">
        <ImageListItem
          title="Application Submission"
          dir="rtl"
          content="Ensure you give maximum details while submitting your application form. It will assist us in evaluating your company and its solution better"
          vector={{
            src: "/assets/images/Incubation/write 1.png",
            alt: "Innovation",
          }}
        />
      </div>
      <div className="timeline-container right">
        <ImageListItem
          title="Preliminary Assessment"
          content="Our Incubation team will connect with those enterprises that are in alignment with our mandate and assess the details shared by you"
          vector={{
            src: "/assets/images/Incubation/list 1.png",
            alt: "Innovation",
          }}
        />
      </div>
      <div className="timeline-container left">
        <ImageListItem
          title="Due Diligence"
          dir="rtl"
          content="After mutual agreement on incubation interest and selection, our team will dive into in-details, visit the sites, or interact with the stakeholders to understand your enterprise & its impact better"
          vector={{
            src: "/assets/images/Incubation/hand-shake 1.png",
            alt: "Innovation",
          }}
        />
      </div>
      <div className="timeline-container right">
        <ImageListItem
          title="Investment Committee"
          content="Finally, you will pitch to a group of experts that will evaluate your application for further process and investment decisions."
          vector={{
            src: "/assets/images/Incubation/group 1.png",
            alt: "Innovation",
          }}
        />
      </div>
    </div>
  );
};

export default Process;
