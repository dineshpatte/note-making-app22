import React from "react";
import {
  NotebookText,
  House,
  ChevronRight,
  Tag,
  Search,
  Settings,
  Trash,
} from "lucide-react";

const Righttop = ({ setSearchItem, toggleDarkMode, darkMode }) => {
  return (
    <div className=" border border-white/20 w-full h-[10.5%] px-6 ">
      <div className="flex items-center  justify-between h-full w-full">
        <p className="dark:text-white text-black text-lg font-bold">
          All Notes
        </p>

        <div className="flex gap-4 px-5">
          <div className="flex items-center justify-center gap-1 border dark:border-white/30 border-black/30 px-3 rounded-md">
            <Search className="dark:text-white/30 text-black" />
            <input
              placeholder="Search by Tag or Title"
              type="text"
              className="px-3 py-2 dark:bg-transparent bg-white  outline-none dark:text-white text-black dark:placeholder:text-white/30 placeholder:text-black/30"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <button
            className=" dark:text-white dark:bg-transparent text-black bg-white border border-black dark:border-white px-2"
            onClick={toggleDarkMode}
          >
            {darkMode ? "DARK" : "LIGHT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Righttop;
