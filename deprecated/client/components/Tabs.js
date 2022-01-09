import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tabs } from "@mui/material";

export function TabPanel({ children, label, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      style={{ display: value !== index ? "none" : "flex" }}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

export const ColoredTabs = ({ children, value, handleChange }) => {
  const router = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    const parallel = router.pathname.split("/")[1];
    switch (parallel) {
      case "philanthropy":
        setColor("#B60016");
        break;
      case "research":
        setColor("#E06810");
        break;
      case "incubation":
        setColor("#3EBA33");
        break;
      case "diagnostics":
        setColor("#1CA56B");
        break;
    }
  }, [router.pathname]);

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
      TabIndicatorProps={{
        style: { background: color, height: "8px", top: 0 },
      }}
    >
      {children}
    </Tabs>
  );
};
