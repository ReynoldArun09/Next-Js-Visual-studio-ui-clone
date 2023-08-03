import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export default function Selection() {
    return (
      <>
        <MenubarTrigger>Selection</MenubarTrigger>
        <MenubarContent className="bg-[#3C3C3C] text-white">
          <MenubarItem>
            Select All <MenubarShortcut>Ctrl+A</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Expand Selection <MenubarShortcut>Shift+Alt+RightArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Shrink Selection <MenubarShortcut>Shift+Alt+LeftArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Copy Line Up <MenubarShortcut>Shift+Alt+UpArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Move Line Down <MenubarShortcut>Shift+Alt+DownArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Move Line Up <MenubarShortcut>Alt+UpArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Duplicate Selection <MenubarShortcut>Alt+DownArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Add Cursor Above <MenubarShortcut>Ctrl+Alt+UpArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Add Cursor Below <MenubarShortcut>Ctrl+Alt+DownArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          Add Cursor to Line Ends <MenubarShortcut>Ctrl+Alt+l</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Add Next Occurrence <MenubarShortcut>Ctrl+D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Add Previous Occurrence
          </MenubarItem>
          <MenubarItem>
            Select All Occurrence <MenubarShortcut>Shift+Alt+L</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Switch to Ctrl+Click for Multi-Cursor
          </MenubarItem>
          <MenubarItem>
            Column Selection Mode
          </MenubarItem>
        </MenubarContent>
      </>
    );
  }
  