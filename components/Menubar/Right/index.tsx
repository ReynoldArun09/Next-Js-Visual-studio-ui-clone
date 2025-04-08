'use client'

import CustomTooltip from "@/components/Custom/CustomTooltip";
import { useStore } from "@/hooks/useStore";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscLayoutSidebarRightOff,
  VscLayoutSidebarRight,
  VscLayoutPanel,
  VscLayout,
  VscLayoutPanelOff,
  VscLayoutSidebarLeftOff,
  VscLayoutSidebarLeft
} from "react-icons/vsc";

export default function RightSide() {
  const TerminalShow = useStore((state:any) => state.TerminalShow) as boolean
  const ToggleTerminal = useStore((state:any) => state.ToggleTerminal)
  const ExplorerShow = useStore((state: any) => state.ExplorerShow);
  const ToggleExplorer = useStore((state: any) => state.ToggleExplorer);
  const ToggleSidebar = useStore((state:any) => state.ToggleSidebar)
  const SidebarShow = useStore((state:any) => state.SidebarShow )
  return (
    <nav className="flex gap-5">
      <ul className="flex gap-5">
        <CustomTooltip title="Toggle Primary Side bar (Ctrl+B)">
          <span onClick={ToggleExplorer}>
            {ExplorerShow ? (
              <VscLayoutSidebarLeft />
            ): (
              <VscLayoutSidebarLeftOff />
            )}
          </span>
        </CustomTooltip>
        <CustomTooltip title="Toggle Panel(Ctrl+J)">
          <span onClick={ToggleTerminal}>
          {TerminalShow ? (<VscLayoutPanel />) : (
            <VscLayoutPanelOff />
          )}
          </span>
        </CustomTooltip>
        <CustomTooltip title="Toggle Panel(Ctrl+J)">
          <span onClick={ToggleSidebar}>
          {SidebarShow ? (<VscLayoutSidebarRight />) : (
            <VscLayoutSidebarRightOff />
          )}
          </span>
        </CustomTooltip>
        <li>
          <VscLayout />
        </li>
      </ul>
      <ul className="flex gap-3">
        <li>
          <VscChromeMinimize />
        </li>
        <li>
          <VscChromeMaximize />
        </li>
        <li>
          <VscChromeClose />
        </li>
      </ul>
    </nav>
  );
}
