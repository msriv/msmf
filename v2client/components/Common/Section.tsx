interface SectionProps {
  children: React.ReactNode;
  [key: string]: any;
}
const Section = (props: SectionProps) => {
  const { children, ...rest } = props;

  return (
    <div className="mt-32 w-full" {...rest}>
      {children}
    </div>
  );
};

interface SectionTitleProps {
  title: string | JSX.Element;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;

  return (
    <div className="mb-16 text-[38px] font-roboto">
      <div className=" ml-[90px] ">{title}</div>
      <hr className=" w-[223px] mt-[13px] border-black" />
    </div>
  );
};

interface SectionContentProps {
  children: React.ReactNode;
}

const SectionContent = (props: SectionContentProps) => {
  const { children } = props;

  return (
    <div className="container mx-auto">
      <div className="prose prose-xl max-w-full">{children}</div>
    </div>
  );
};

export { Section, SectionTitle, SectionContent };
