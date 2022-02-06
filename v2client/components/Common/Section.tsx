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
    <div className="mb-16 text-[38px] font-roboto">
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
    <div className="md:container mx-auto">
      <div className="prose prose-xl max-w-full">{children}</div>
    </div>
  );
};

export { Section, SectionTitle, SectionContent };
