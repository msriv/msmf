import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ContentCard = ({ children }) => {
  const router = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    const parallel = router.pathname.split("/")[1];
    switch (parallel) {
      case "philanthropy":
        setColor("border-guardsman-red");
        break;
      case "research":
        setColor("border-christine");
        break;
      case "incubation":
        setColor("border-apple");
        break;
      case "diagnostics":
        setColor("border-mountain-meadow");
        break;
    }
  }, [router.pathname]);

  return (
    <div className={`bg-white shadow-lg border-t-8 p-5 ${color}`}>
      {children}
    </div>
  );
};

export default ContentCard;
