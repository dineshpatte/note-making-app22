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
const Sidebar = ({ displayAll, tagclickDisplay, countTag, tags }) => {
  return (
    <div className=" absolute left-0 w-[15%] h-full dark:bg-black border  dark:border-white/20 border-black/20 shadow-lg bg-white">
      {/*toppart*/}
      <div className="flex flex-col w-full h-[20%] border  dark:border-white/20 border-black/20">
        <div className="flex py-3 px-2 gap-2 ">
          <NotebookText className="dark:text-white text-black" />
          <p className="text-blue-500 font-semibold  text-xl">𝒏𝒐𝒕𝒆𝒔</p>
        </div>

        <div
          className="flex flex-row w-full mt-6 gap-4  py-4  items-start justify-between border  dark:border-white/20 border-black/20 hover:opacity-30 active:bg-white"
          onClick={displayAll}
        >
          <div className="flex gap-3 ">
            <House className="dark:text-white text-black" />
            <p className="dark:text-white text-black">All notes</p>
          </div>
          <ChevronRight className="dark:text-white text-black" />
        </div>
      </div>
      {/*bottom part*/}
      <div className="mt-4 flex flex-col items-start  dark:text-white text-black ">
        {tags.map((tag) => (
          <div
            className="flex   gap-4 items-center justify-center cursor-pointer hover:opacity-25"
            onClick={() => tagclickDisplay(tag)}
          >
            <Tag className="mt-6" />
            <p key={tag} className="dark:text-white  text-black mt-8">
              {tag} ({countTag[tag] || 0})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
