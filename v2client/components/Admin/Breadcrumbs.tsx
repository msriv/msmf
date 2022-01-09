import { useRouter } from "next/router";
import Link from "next/link";
import React, { useMemo } from "react";

const BreadCrumbs = () => {
  const router = useRouter();
  const getPath = (path: string, key: number): string => {
    const pathArray = router.pathname.split("/");
    let uri = "",
      i = 0;
    while (i !== key) {
      uri = uri + pathArray[i] + "/";
      i++;
    }
    return uri;
  };
  return (
    <div className="flex items-center">
      {router.pathname.split("/").map((path: string, key: number) => {
        return key > 0 ? (
          <div key={path} className="flex items-center">
            <span className="material-icons-outlined">chevron_right</span>
            <Link href={getPath(path, key + 1)}>
              <span className=" cursor-pointer capitalize font-bold text-msmf-base">
                {path}
              </span>
            </Link>
          </div>
        ) : null;
      })}
    </div>
  );
};

export const BreadCrumbsMemoized = React.memo(BreadCrumbs);
