import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}
const Section = (props: SectionProps) => {
  const { children, ...rest } = props;

  return (
    <section className="mt-32 w-full" {...rest}>
      {children}
    </section>
  );
};

interface SectionTitleProps {
  title: string | ReactNode;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;

  return (
    <div className="mb-16 text-[38px] font-helvetica">
      <div className=" ml-[90px] ">{title}</div>
      <hr className=" w-[223px] mt-[13px] border-black" />
    </div>
  );
};

interface SectionContentProps {
  children: ReactNode;
}

const SectionContent = (props: SectionContentProps) => {
  const { children } = props;

  return (
    <div className="w-10/12 mx-auto">
      <div className="prose max-w-full text-justify">{children}</div>
    </div>
  );
};

export { Section, SectionTitle, SectionContent };
