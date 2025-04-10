"use client";

import { create } from "zustand";

type StoreState = {
  TerminalShow: boolean;
  SidebarShow: boolean;
  ExplorerShow: boolean;
};

type StoreAction = {
  actions: {
    ToggleTerminal: () => void;
    ToggleSidebar: () => void;
    ToggleExplorer: () => void;
  };
};

type StoreType = StoreState & StoreAction;

export const useStore = create<StoreType>()((set) => ({
  TerminalShow: true,
  SidebarShow: true,
  ExplorerShow: true,
  actions: {
    ToggleExplorer: () => set((state) => ({ ExplorerShow: !state.ExplorerShow })),
    ToggleSidebar: () => set((state) => ({ SidebarShow: !state.SidebarShow })),
    ToggleTerminal: () => set((state) => ({ TerminalShow: !state.TerminalShow })),
  },
}));

export const useStoreActions = () => useStore((state) => state.actions);
