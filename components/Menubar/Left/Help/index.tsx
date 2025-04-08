import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export default function Help() {
    return (
      <>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent className="bg-[#3C3C3C] text-white">
          <MenubarItem>
            Welcome
          </MenubarItem>
          <MenubarItem>
            Show All Commands <MenubarShortcut>Ctrl+Shift+P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Documentation
          </MenubarItem>
          <MenubarItem>
            Editor Playground
          </MenubarItem>
          <MenubarItem>
            Show Release Notes
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Keyboard Shortcuts Reference <MenubarShortcut>Ctrl+K Ctrl+R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Video Tutortials
          </MenubarItem>
          <MenubarItem>
            Tips and Tricks
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Join us on Twitter
          </MenubarItem>
          <MenubarItem>
            Video Tutorials
          </MenubarItem>
          <MenubarItem>
            Report Issue
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            View License
          </MenubarItem>
          <MenubarItem>
            Privacy Statement
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Toggle Developer Tools
          </MenubarItem>
          <MenubarItem>
            Open Process Explorer
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Check for Updates
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            About
          </MenubarItem>
        </MenubarContent>
      </>
    );
  }
  