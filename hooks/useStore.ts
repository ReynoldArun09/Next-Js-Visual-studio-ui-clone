import { create } from 'zustand'

export const useStore = create((set) => ({
  TerminalShow: true,
  SidebarShow: true,
  ExplorerShow: true,
  ToggleTerminal: () => set((state:any) => ({ TerminalShow: !state.TerminalShow })),
  ToggleSidebar: () => set((state:any) => ({ SidebarShow: !state.SidebarShow })),
  ToggleExplorer: () => set((state:any) => ({ ExplorerShow: !state.ExplorerShow })),
}))
