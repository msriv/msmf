export const SectionTitle = ({ type, children }) => {
  return type === "main" ? (
    <div className="text-5xl font-roboto-light">{children}</div>
  ) : type === "subSection" ? (
    <div>
      <div className="ml-28 text-4xl font-roboto-light mb-10">{children}</div>
      <div className="my-4 border-b border-black w-48"></div>
    </div>
  ) : null;
};

export const SectionContent = ({ className, children }) => {
  return (
    <div className={`${className ? className : ""} py-10 w-10/12 mx-auto`}>
      {children}
    </div>
  );
};

export const Section = ({ className, children }) => {
  return (
    <div className={`mt-20 ${className ? className : ""}`}>{children}</div>
  );
};
