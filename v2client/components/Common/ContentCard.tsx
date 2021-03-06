import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getThemeColor } from "../../utils/Misc";

interface ContentCardProps {
  children: React.ReactNode;
  [key: string]: any;
}
const ContentCard = (props: ContentCardProps) => {
  const router = useRouter();
  const { children, ...others } = props;
  const [themeColor, setThemeColor] = useState<string>("border-msmf-base");

  useEffect(() => {
    const vertical = router.pathname.split("/")[1];
    switch (vertical) {
      case "incubation":
        {
          setThemeColor("border-incubation");
        }
        break;
      case "adrc":
        {
          setThemeColor("border-adrc");
        }
        break;
      case "philanthropy":
        {
          setThemeColor("border-philanthropy");
        }
        break;
      case "research":
        {
          setThemeColor("border-research");
        }
        break;
      default: {
        setThemeColor("border-msmf-base");
      }
    }
  }, [router.pathname]);

  return (
    <div className={`msmf__content-card ${themeColor}`} {...others}>
      {children}
    </div>
  );
};

export { ContentCard };
