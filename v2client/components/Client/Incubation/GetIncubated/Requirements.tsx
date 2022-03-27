import ImageListItem from "../../../Common/ImageListItem";

const Requirements = () => {
  return (
    <div className="grid gap-8 grid-cols-2 w-11/12 mx-auto">
      <ImageListItem
        title="Innovation"
        dir="rtl"
        content="Inovation in creating sustainable solutions in the Healthcare domain."
        vector={{
          src: "https://cdn.ms-mf.org/images/Incubation/innovation 1.png",
          alt: "Innovation",
        }}
      />
      <ImageListItem
        title="Affordable"
        content="Affordable solutions for marginal communities in India leading to a social impact."
        vector={{
          src: "https://cdn.ms-mf.org/images/Incubation/money-bag 1.png",
          alt: "Affordable",
        }}
      />
      <ImageListItem
        title="Sustainable"
        dir="rtl"
        content="Sustainable for-profit start-ups which have a viable business model in the long run"
        vector={{
          src: "https://cdn.ms-mf.org/images/Incubation/sustainability 1.png",
          alt: "Sustainable",
        }}
      />
      <ImageListItem
        title="Scale"
        content="Enterprises which can scale their solutions across geographies thus multiplying the impact."
        vector={{
          src: "https://cdn.ms-mf.org/images/Incubation/growth-graph 1.png",
          alt: "Scale",
        }}
      />
    </div>
  );
};

export default Requirements;
