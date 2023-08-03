import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export default function View() {
    return (
      <>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Command Palette...<MenubarShortcut>Ctrl+Shift+P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open View...
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Apperance 
          </MenubarItem>
          <MenubarItem>
            Editor Layout 
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Explorer <MenubarShortcut>Ctrl+Shift+E</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Search <MenubarShortcut>Ctrl+Shift+F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Source Control <MenubarShortcut>Ctrl+Shift+G</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Run <MenubarShortcut>Ctrl+Shift+D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Extensions <MenubarShortcut>Ctrl+Shift+X</MenubarShortcut>
          </MenubarItem>
          
          <MenubarItem>
            Testing 
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Problems <MenubarShortcut>Ctrl+Shift+M</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Output <MenubarShortcut>Ctrl+Shift+U</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Debug Console <MenubarShortcut>Ctrl+Shift+Y</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Terminal <MenubarShortcut>Ctrl+`</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Word Wrap<MenubarShortcut>Alt+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Sticky Scroll
          </MenubarItem>
        </MenubarContent>
      </>
    );
  }
  