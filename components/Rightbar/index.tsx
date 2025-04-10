"use client";

import { useStore, useStoreActions } from "@/store/useStore";
import { VscChromeClose } from "react-icons/vsc";

export default function Rightbar() {
  const SidebarShow = useStore((state) => state.SidebarShow);
  const { ToggleSidebar } = useStoreActions();

  return (
    <>
      {SidebarShow && (
        <section className="bg-[#252526] h-full text-white border-l border-l-gray-700">
          <div className="w-fit ml-[80%] pt-3">
            <VscChromeClose onClick={ToggleSidebar} />
          </div>
          <div className="flex h-full text-center">
            <p className="m-auto text-[12px] px-3">Drag a view here to display</p>
          </div>
        </section>
      )}
    </>
  );
}
