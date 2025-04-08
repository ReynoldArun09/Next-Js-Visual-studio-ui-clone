"use client";
import Editor from "@/components/Editor";
import Explorer from "@/components/Explorer";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useStore } from "@/hooks/useStore";

export default function Root() {
  const SidebarShow = useStore((state: any) => state.SidebarShow);
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
        <ResizableHandle />
        {SidebarShow ? (
          <ResizablePanel defaultSize={10}>
            <Rightbar />
          </ResizablePanel>
        ) : (
          ""
        )}
      </ResizablePanelGroup>
    </main>
  );
}
