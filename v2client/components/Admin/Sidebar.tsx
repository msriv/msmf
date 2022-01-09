import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="">
      <ul>
        <li className="cursor-pointer px-4 py-2 bg-blue-50 rounded-l-full border-r-2 border-blue-400 mb-2">
          <Link href="/admin/people/">
            <div className="flex items-center font-bold uppercase text-sm text-msmf-base">
              {" "}
              <span className="material-icons-round mr-2 text-gray-400 text-lg">
                groups
              </span>{" "}
              People
            </div>
          </Link>
        </li>
        <li className="cursor-pointer px-4 py-2 bg-blue-50 rounded-l-full border-r-2 border-blue-400 mb-2">
          <Link href="/admin/blogs/">
            <div className="flex items-center font-bold uppercase text-sm text-msmf-base">
              {" "}
              <span className="material-icons-round mr-2 text-gray-400  text-lg">
                article
              </span>{" "}
              Blogs
            </div>
          </Link>
        </li>
        <li className="cursor-pointer px-4 py-2 bg-blue-50 rounded-l-full border-r-2 border-blue-400 mb-2">
          <Link href="/admin/facilities">
            <div className="flex items-center font-bold uppercase text-sm text-msmf-base">
              {" "}
              <span className="material-icons-round mr-2 text-gray-400  text-lg">
                push_pin
              </span>{" "}
              Facilities
            </div>
          </Link>
        </li>
        <li className="cursor-pointer px-4 py-2 bg-blue-50 rounded-l-full border-r-2 border-blue-400 mb-2">
          <Link href="/admin/assets">
            <div className="flex items-center font-bold uppercase text-sm text-msmf-base">
              {" "}
              <span className="material-icons-round mr-2 text-gray-400 text-lg">
                image
              </span>{" "}
              Asset Manager
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
