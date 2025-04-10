"use client";

import { useStore } from "@/store/useStore";
import Terminal from "../Terminal";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Editor() {
  const TerminalShow = useStore((state) => state.TerminalShow);

  return (
    <ResizablePanelGroup direction="vertical" className="h-screen">
      <ResizablePanel defaultSize={75}>
        <div className="bg-[#252526] flex justify-around pt-20 h-full">
          <LeftSection />
          <RightSection />
        </div>
      </ResizablePanel>

      {TerminalShow ? (
        <>
          <ResizableHandle />
          <ResizablePanel defaultSize={35}>
            <Terminal />
          </ResizablePanel>
        </>
      ) : (
        ""
      )}
    </ResizablePanelGroup>
  );
}
