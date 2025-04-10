"use client";

import CustomTooltip from "@/components/Custom/CustomTooltip";
import { useStore, useStoreActions } from "@/store/useStore";
import {
  VscLayoutPanel,
  VscLayoutPanelOff,
  VscLayoutSidebarLeft,
  VscLayoutSidebarLeftOff,
  VscLayoutSidebarRight,
  VscLayoutSidebarRightOff,
} from "react-icons/vsc";
import { rightCornerButtons } from "../_constants";

export default function RightSide() {
  const { ToggleExplorer, ToggleSidebar, ToggleTerminal } = useStoreActions();

  const explorer = useStore((state) => state.ExplorerShow);
  const terminal = useStore((state) => state.TerminalShow);
  const rightbar = useStore((state) => state.SidebarShow);

  return (
    <div className="flex items-center gap-5 pr-2">
      <div className="flex items-center gap-4">
        <CustomTooltip title="Toggle Primary Side bar (Ctrl+B)">
          <span onClick={ToggleExplorer}> {explorer ? <VscLayoutSidebarLeft /> : <VscLayoutSidebarLeftOff />}</span>
        </CustomTooltip>
        <CustomTooltip title="Toggle Terminal Panel(Ctrl+J)">
          <span onClick={ToggleTerminal}>{terminal ? <VscLayoutPanel /> : <VscLayoutPanelOff />}</span>
        </CustomTooltip>
        <CustomTooltip title="Toggle Sidebar Panel(Ctrl+K)">
          <span onClick={ToggleSidebar}> {rightbar ? <VscLayoutSidebarRight /> : <VscLayoutSidebarRightOff />}</span>
        </CustomTooltip>
      </div>
      <div className="flex gap-2 items-center">
        {rightCornerButtons.map((btn, index) => (
          <span key={index}>{btn.icon}</span>
        ))}
      </div>
    </div>
  );
}
