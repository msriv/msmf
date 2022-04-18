interface ContentCardProps {
  children: React.ReactNode;
  [key: string]: any;
}
const ContentCardNoBorder = (props: ContentCardProps) => {
  const { children, ...others } = props;

  return (
    <div className={`msmf__content-card-no-border`} {...others}>
      {children}
    </div>
  );
};

export { ContentCardNoBorder };
