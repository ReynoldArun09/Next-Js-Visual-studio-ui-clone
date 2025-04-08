'use client'

import {
  VscEllipsis,
  VscFiles,
  VscSettingsGear,
  VscAccount,
  VscBeaker,
  VscBookmark,
  VscExtensions,
  VscDebugAlt,
  VscSourceControl,
  VscSearch,
  VscRemoteExplorer,
} from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import CustomTooltip from "../Custom/CustomTooltip";
import { useStore } from "@/hooks/useStore";

export default function Sidebar() {
  const ToggleExplorer = useStore((state: any) => state.ToggleExplorer);
  return (
    <section className="flex flex-col bg-[#3C3C3C] text-white justify-between h-[92vh] px-3">
      <ul className="flex flex-col mt-4 gap-8">
        <CustomTooltip title="Explorer (Ctrl+Shift+E)">
          <VscFiles size={25} onClick={ToggleExplorer}/>
        </CustomTooltip>
        <CustomTooltip title="Search (Ctrl+Shift+F)">
          <VscSearch size={25} />
        </CustomTooltip>
        <CustomTooltip title="Source Control (Ctrl+Shift+G)">
          <VscSourceControl size={25} />
        </CustomTooltip>
        <CustomTooltip title="Run And Debug (Ctrl+Shift+D)">
          <VscDebugAlt size={25} />
        </CustomTooltip>
        <CustomTooltip title="Extensions (Ctrl+Shift+X)">
          <VscExtensions size={25} />
        </CustomTooltip>
        <CustomTooltip title="Remote Explorer">
          <VscRemoteExplorer size={25} />
        </CustomTooltip>
        <CustomTooltip title="Testing">
          <VscBeaker size={25} />
        </CustomTooltip>
        <CustomTooltip title="Docker">
          <FaDocker size={25} />
        </CustomTooltip>
        <CustomTooltip title="Bookmarks">
          <VscBookmark size={25} />
        </CustomTooltip>
        <CustomTooltip title="Additional Views">
          <VscEllipsis size={25} />
        </CustomTooltip>
      </ul>

      <ul className="flex flex-col gap-5 mb-4">
        <CustomTooltip title="Accounts">
          <VscAccount size={25} />
        </CustomTooltip>
        <CustomTooltip title="Manage">
          <VscSettingsGear size={25} />
        </CustomTooltip>
      </ul>
    </section>
  );
}
