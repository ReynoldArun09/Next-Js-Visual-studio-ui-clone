"use client";

import { useState } from "react";
import { BsFiletypeJson } from "react-icons/bs";
import {
  VscThreeBars,
  VscJson,
  VscChevronRight,
  VscFolder,
  VscChevronDown,
  VscEllipsis,
  VscRefresh,
  VscNewFolder,
  VscNewFile,
  VscCollapseAll,
} from "react-icons/vsc";
import { FiPackage } from "react-icons/fi";
import { TbPackageOff } from "react-icons/tb";
import { SiPostcss, SiTypescript } from "react-icons/si";
import { AiOutlineQuestionCircle, AiOutlineCheck } from "react-icons/ai";
import { DiGit, DiCss3, DiReact, DiJsBadge } from "react-icons/di";
import CustomTooltip from "../Custom/CustomTooltip";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { useStore } from "@/hooks/useStore";

export default function Explorer() {
  const [openabout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openExp, setOpenExp] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [closeExplorer, closeSetExplorer] = useState(true);
  const [closeapp, closeSetapp] = useState(true);
  const ExplorerShow = useStore((state: any) => state.ExplorerShow);
  

  return (
    <>
      {ExplorerShow ? (
        <div className="bg-[#252526] border-r w-full h-full text-white border-r-gray-700">
          <div className="flex justify-between py-2 px-4 items-center">
            <h1>Explorer</h1>
            <div>
              <Menubar className="bg-[#252526]">
                <MenubarMenu>
                  <MenubarTrigger className="bg-[#252526]">
                    <VscEllipsis />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <span className="pl-5">Open Editors</span>
                    </MenubarItem>
                    <MenubarItem>
                      <AiOutlineCheck className="mr-2" />
                      Folders
                    </MenubarItem>
                    <MenubarItem>
                      <AiOutlineCheck className="mr-2" />
                      Outline
                    </MenubarItem>
                    <MenubarItem>
                      <AiOutlineCheck className="mr-2" />
                      Timeline
                    </MenubarItem>
                    <MenubarItem>
                      <span className="pl-6">NPM scripts</span>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-1">
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => closeSetExplorer(!closeExplorer)}
              >
                <VscChevronDown />
                <span>My Portfolio</span>
              </div>
              <div className="flex gap-2">
                <CustomTooltip title="New File...">
                  <VscNewFile />
                </CustomTooltip>
                <CustomTooltip title="New Folder...">
                  <VscNewFolder />
                </CustomTooltip>
                <CustomTooltip title="Refresh Explorer">
                  <VscRefresh />
                </CustomTooltip>
                <CustomTooltip title="Collapse Folders in Explorer">
                  <VscCollapseAll />
                </CustomTooltip>
              </div>
            </div>
            {closeExplorer ? (
              <ul className="pl-4 pt-1">
                <li className="flex items-center">
                  <VscChevronRight />
                  <VscFolder className="ml-1" />
                  <span className="ml-2">.next</span>
                </li>
                <li className="flex items-center">
                  <VscChevronRight />
                  <VscFolder className="ml-1" />
                  <span className="ml-2">node_modules</span>
                </li>
                <li className="flex items-center">
                  <VscChevronRight />
                  <VscFolder className="ml-1" />
                  <span className="ml-2">public</span>
                </li>
                <li className="flex items-center">
                  <VscChevronRight />
                  <VscFolder className="ml-1" />
                  <span className="ml-2">src</span>
                </li>
                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => closeSetapp(!closeapp)}
                  >
                    {closeapp ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">app</span>
                  </li>
                  {closeapp ? (
                    <ul>
                      <li>
                        <span className="flex items-center pl-6 gap-1">
                          <VscThreeBars size={20} /> favicon.ico
                        </span>
                        <span className="flex items-center pl-6 gap-1">
                          <DiCss3 size={20} className="text-red-300" />{" "}
                          globals.css
                        </span>
                        <span className="flex items-center pl-6 gap-1">
                          <DiReact size={20} className="text-blue-500" />{" "}
                          layout.tsx
                        </span>
                        <span className="flex items-center pl-6 gap-1">
                          <DiReact size={20} className="text-blue-500" />{" "}
                          page.tsx
                        </span>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpenAbout(!openabout)}
                  >
                    {openabout ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">about</span>
                  </li>
                  {openabout ? (
                    <span className="flex items-center pl-6 gap-1">
                      <DiReact size={20} className="text-blue-500" /> About.tsx
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpenSkill(!openSkill)}
                  >
                    {openSkill ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">skills</span>
                  </li>
                  {openSkill ? (
                    <span className="flex items-center pl-6 gap-1">
                      <DiReact size={20} className="text-blue-500" /> Skills.tsx
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpenExp(!openExp)}
                  >
                    {openExp ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">experience</span>
                  </li>
                  {openExp ? (
                    <span className="flex items-center pl-6 gap-1">
                      <DiReact size={20} className="text-blue-500" />{" "}
                      Experience.tsx
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpenProject(!openProject)}
                  >
                    {openProject ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">projects</span>
                  </li>
                  {openProject ? (
                    <span className="flex items-center pl-6 gap-1">
                      <DiReact size={20} className="text-blue-500" />{" "}
                      Projects.tsx
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="ml-4">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpenContact(!openContact)}
                  >
                    {openContact ? <VscChevronDown /> : <VscChevronRight />}
                    <VscFolder className="ml-1" />
                    <span className="ml-2">Contact</span>
                  </li>
                  {openContact ? (
                    <span className="flex items-center pl-6 gap-1">
                      <DiReact size={20} className="text-blue-500" />{" "}
                      Contact.tsx
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <DiGit className="text-red-400" />
                  <span>.gitignore</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <BsFiletypeJson className="text-yellow-500" />
                  <span>components.json</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <SiTypescript className="text-blue-400" />
                  <span>next-env.d.ts</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <DiJsBadge className="text-yellow-300" />
                  <span>next.config.js</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <TbPackageOff className="text-blue-400" />
                  <span>package-lock.json</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <FiPackage className="text-blue-400" />
                  <span>package.json</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <SiPostcss className="text-red-400" />
                  <span>postcss.config.js</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <AiOutlineQuestionCircle className="text-blue-400" />
                  <span>README.md</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <DiJsBadge className="text-yellow-300" />
                  <span>tailwind.confg.js</span>
                </li>
                <li className="flex items-center gap-2 ml-5 mt-[1px]">
                  <VscJson className="text-yellow-400" />
                  <span>tsconfig.json</span>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
