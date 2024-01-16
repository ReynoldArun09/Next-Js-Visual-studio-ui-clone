"use client";

import { useStore } from "@/hooks/useStore";
import {
  VscChevronRight,
  VscSplitHorizontal,
  VscChevronUp,
  VscTerminal,
  VscChromeClose,
  VscAdd,
  VscEllipsis,
  VscChevronDown,
  VscTrash
} from "react-icons/vsc";

export default function Terminal() {
  const TerminalShow = useStore((state:any) => state.TerminalShow)
  const ToggleTerminal = useStore((state:any) => state.ToggleTerminal)
  return (
    <>
      {TerminalShow ? (
        <section className="h-screen bg-[#252526] text-white bottom-0 w-full">
          <div className="h-10 flex justify-between items-center px-4 bg-[#3C3C3C]">
            <ul className="flex items-center gap-5 text-[10px]">
              <li>PROBLEMS</li>
              <li>OUTPUT</li>
              <li>DEBUG CONSOLE</li>
              <li>TERMINAL</li>
            </ul>
            <ul className="flex gap-3">
              <li>
                <VscAdd />
              </li>
              <li>
                <VscChevronDown />
              </li>
              <li>
                <VscEllipsis />
              </li>
              <li>
                <VscChevronUp />
              </li>
              <li>
                <VscChromeClose onClick={ToggleTerminal}/>
              </li>
            </ul>
          </div>
          <div className="flex justify-between pl-4">
            <div className="py-8">
              <h1>
                <span className="text-green-400">
                  B3ASTM0D3@DESKTOP-TD32BI91
                </span>
                MINGW64
                <span className="text-yellow-300">
                  /d/Project/final-visual-studo-clone
                </span>
                (main)
              </h1>
              <h2>$ npm run dev</h2>
              <h2 className="flex gap-1 items-center">
                <VscChevronRight />
                <span>visual-studio-clone@0.1.0 dev</span>
              </h2>
              <h2 className="flex gap-1 items-center">
                <VscChevronRight />
                <span>next dev</span>
              </h2>
              <h2>
                - <span className="text-green-300">ready</span> started server
                on 0.0.0.0:3000, url: http://localhost:3000
              </h2>
              <h2>
                - <span className="text-purple-300">event</span> compiled client
                and server successfully in 1270 ms (20 modules)
              </h2>
              <h2>
                - <span className="text-green-300">wait</span> compiling...
              </h2>
              <h2>
                - <span className="text-purple-300">event</span> compiled client
                and server successfully in 434 ms (20 modules)
              </h2>
            </div>
            <div>
              <ul className="bg-[#3C3C3C] h-screen pl-[14px] w-[165px] space-y-2 pt-4 border-l border-l-gray-500 cursor-pointer">
                <li className="flex items-center gap-2">
                  <VscTerminal />
                  <span>Bash</span>
                  <span className="flex items-center gap-3"><VscSplitHorizontal /> <VscTrash /></span>
                </li>
                <li className="flex items-center gap-2">
                  <VscTerminal />
                  <span>Bash</span>
                  <span className="flex items-center gap-3"><VscSplitHorizontal /> <VscTrash /></span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
