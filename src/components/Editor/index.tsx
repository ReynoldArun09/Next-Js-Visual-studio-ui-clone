'use client'

import { VscClose } from "react-icons/vsc";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import Terminal from "../Terminal";
import {
  VscNewFile,
  VscFile,
  VscSourceControl,
  VscNewFolder,
  VscRemote,
} from "react-icons/vsc";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { badgeVariants } from "@/components/ui/badge";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { useStore } from "@/hooks/useStore";

export default function Editor() {
  const TerminalShow = useStore((state:any) => state.TerminalShow)

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-screen"
    >
      <ResizablePanel defaultSize={75}>
      <section className="relative w-full h-screen bg-[#252526]">
      <div className="flex justify-around pt-[100px] relative">
        <div className="text-white">
          <h1 className="text-3xl">Visual Studio Code</h1>
          <h2 className="text-2xl mt-2">Editing evolved</h2>
          <div className="space-y-2 text-sm">
            <h1 className="text-xl mt-5">Start</h1>
            <p className="flex items-center gap-1 text-blue-600">
              <VscNewFile size={20} />
              New File...
            </p>
            <p className="flex items-center gap-1 text-blue-600">
              <VscFile size={20} />
              Open File...
            </p>
            <p className="flex items-center gap-1 text-blue-600">
              <VscNewFolder size={20} />
              Open Folder...
            </p>
            <p className="flex items-center gap-1 text-blue-600">
              <VscSourceControl size={20} />
              Clone Git Repository
            </p>
            <p className="flex items-center gap-1 text-blue-600">
              <VscRemote size={20} /> <span>Connect to</span>
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Recent</h1>
            <p>
              <span className="text-sm text-blue-600">visual-studio-clone</span>{" "}
              E:\projects
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl mb-3 text-white">Recommended</h1>
            <Card className="bg-[#3C3C3C] border-none text-white">
              <CardHeader>
                <CardTitle className="text-md flex items-center justify-between">
                  GitHub Coplilot{" "}
                  <span>
                    <VscClose />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                Supercharge your coding experience for as little as $10/month
                with <br />
                cutting edge AI code generation.
              </CardContent>
            </Card>
          </div>
          <div>
            <h1 className="text-2xl text-white my-2">Walkthroughs</h1>
            <div className="space-y-2">
              <Card className="bg-[#3C3C3C] border-none text-white">
                <CardHeader>
                  <CardTitle className="text-md flex items-center justify-between">
                    Get Started with VS Code{" "}
                    <span>
                      <VscClose />
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Discover the best customizations to make VS Code yours.
                </CardContent>
              </Card>
              <Card className="bg-[#3C3C3C] border-none text-white">
                <CardContent>
                  <h1 className="flex items-center gap-2">
                    <span>
                      <BsFillBookmarkFill />
                    </span>
                    <span className="text-sm">Get Started with Bookmarks</span>
                    <span className={badgeVariants({ variant: "outline" })}>
                      New
                    </span>
                  </h1>
                </CardContent>
              </Card>
              <Card className="bg-[#3C3C3C] border-none text-white">
                <CardContent className="text-sm flex items-center justify-between">
                  Learn the Fundamentals{" "}
                  <span>
                    <VscClose />
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-[#3C3C3C] border-none text-white">
                <CardContent>
                  <h1 className="flex items-center gap-2">
                  <FaDocker className="text-blue-400" size={20}/>
                    <span className="text-sm">Get Started with Docker</span>
                    <span className={badgeVariants({ variant: "outline" })}>
                      Updated
                    </span>
                  </h1>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <h1 className="flex items-center gap-2 justify-center text-white">
          <Checkbox />
          Show welcome page on startup
        </h1>
      </div>
    </section>
      </ResizablePanel>
      <ResizableHandle />
      {TerminalShow ? (
        <ResizablePanel defaultSize={35}>
        <Terminal />
      </ResizablePanel>
      ): ''}
    </ResizablePanelGroup>
    
  );
}
