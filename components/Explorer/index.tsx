"use client";

import { useStore } from "../../store/useStore";
import ExplorerTopBar from "./ExplorerTopBar";
import FileFolder from "./FileFolder";
import StaticFiles from "./StaticFiles";

export default function Explorer() {
  const explorer = useStore((state) => state.ExplorerShow);

  return (
    <>
      {explorer && (
        <div className="bg-[#252526] pr-4 border-r w-full h-full text-white border-r-gray-700">
          <ExplorerTopBar />
          <FileFolder />
          <StaticFiles />
        </div>
      )}
    </>
  );
}
