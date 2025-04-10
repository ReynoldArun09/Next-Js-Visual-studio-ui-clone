"use client";

import Explorer from "@/components/Explorer";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useStore } from "@/store/useStore";
import Editor from "../components/Editor";

export default function Root() {
  const SidebarShow = useStore((state) => state.SidebarShow);
  return (
    <main className="h-full">
      <ResizablePanelGroup direction="horizontal" className="border">
        <div className="flex">
          <Sidebar />
          <ResizablePanel defaultSize={15}>
            <Explorer />
          </ResizablePanel>
        </div>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <Editor />
        </ResizablePanel>
        {SidebarShow ? (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={10}>
              <Rightbar />
            </ResizablePanel>
          </>
        ) : (
          ""
        )}
      </ResizablePanelGroup>
    </main>
  );
}
