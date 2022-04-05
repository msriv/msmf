// Tab Implementation for Panel and Defining new tab

import { useRouter } from "next/router";
import { Children, ReactElement, ReactNode, useState, useEffect } from "react";
import { getThemeColor } from "../../utils/Misc";

interface TabProps {
  title: string;
  children: ReactNode;
}

export const Tab = (props: TabProps) => {
  const { children } = props;
  return <div className="py-6">{children}</div>;
};

interface TabPanelProps {
  cols?: number;
  id: string;
  children: ReactNode;
}

export const TabPanel = (props: TabPanelProps) => {
  const router = useRouter();
  const { cols, id, children } = props;
  const [currentTab, setCurrentTab] = useState(0);
  const [themeColor, setThemeColor] = useState<string>("border-msmf-base");
  const [currentID, setCurrentID] = useState(id);

  useEffect(() => {
    const vertical = router.pathname.split("/")[1];
    switch (vertical) {
      case "incubation":
        {
          setThemeColor("text-incubation border-incubation");
        }
        break;
      case "adrc":
        {
          setThemeColor("text-adrc border-adrc");
        }
        break;
      case "philanthropy":
        {
          setThemeColor("text-philanthropy border-philanthropy");
        }
        break;
      case "research":
        {
          setThemeColor("text-research border-research");
        }
        break;
      default: {
        setThemeColor("text-msmf-base border-msmf-base");
      }
    }
    if (currentID !== id) {
      setCurrentID(id);
      setCurrentTab(0);
    }
  }, [router.pathname, id]);

  const handleChangeTab = (tabNumber: number) => {
    setCurrentTab(tabNumber);
  };

  return (
    <div id={currentID} className="w-full bg-white shadow-md rounded">
      <div
        id="tab-list"
        className="flex items-center justify-start flex-wrap w-full "
      >
        {Children.map(children as ReactElement, (child, tabID) => {
          return (
            <button
              key={tabID}
              type="button"
              className={`w-${
                12 / (cols || 4)
              }/12 border-t-[5px] border-x-0 border-b-0 px-4 py-2 hover:bg-gray-200 ${
                tabID === currentTab
                  ? `font-semibold ${themeColor}`
                  : `border-transparent text-black`
              } `}
              onClick={() => handleChangeTab(tabID)}
            >
              {(child.props as TabProps).title}
            </button>
          );
        })}
      </div>
      <div id="tab-panel" className="transition duration-500 ease-in-out">
        {Children.toArray(children)[currentTab]}
      </div>
    </div>
  );
};
