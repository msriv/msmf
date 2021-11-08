export const SectionTitle = ({ type, alignment, children }) => {
  const textAlignment =
    alignment === "center"
      ? "text-center"
      : alignment === "right"
      ? "text-right"
      : "text-left";

  return type === "main" ? (
    <div className={`text-4xl font-roboto-light ${textAlignment}`}>
      {children}
    </div>
  ) : type === "section" ? (
    <div>
      <div className="ml-28 text-4xl font-roboto-light mb-10">{children}</div>
      <div className="my-4 border-b border-black w-48"></div>
    </div>
  ) : type === "subsection" ? (
    <div
      className={`text-4xl font-roboto-light w-10/12 mx-auto ${textAlignment}`}
    >
      {children}
    </div>
  ) : null;
};

export const SectionContent = ({ className, children }) => {
  return (
    <div className={`${className ? className : ""} py-5 w-10/12 mx-auto`}>
      {children}
    </div>
  );
};

export const Section = ({ className, children }) => {
  return (
    <section className={`mt-20 ${className ? className : ""}`}>
      {children}
    </section>
  );
};
