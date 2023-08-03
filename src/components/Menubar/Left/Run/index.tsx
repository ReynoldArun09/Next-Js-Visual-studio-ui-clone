import {
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Run() {
  return (
    <>
      <MenubarTrigger>Run</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Start Debugging <MenubarShortcut>F5</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Run Without Debugging<MenubarShortcut>Ctrl+F5</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Stop Debugging <MenubarShortcut>Shift+F5</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Restart Debugging <MenubarShortcut>Ctrl+Shift+F5</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Open Configurations</MenubarItem>
        <MenubarItem>Add Configurations...</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Step Over <MenubarShortcut>F10</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Step into <MenubarShortcut>F11</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Step Out <MenubarShortcut>Shift+F11</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Continue <MenubarShortcut>F5</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Toggle Breakpoint <MenubarShortcut>F9</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Breakpoint</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Enable All Breakpoints</MenubarItem>
        <MenubarItem>Disable All Breakpoints</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Remove All Breakpoints</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Install Additional Debuggers...</MenubarItem>
      </MenubarContent>
    </>
  );
}
