import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export default function Terminal() {
    return (
      <>
        <MenubarTrigger>Terminal</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Terminal <MenubarShortcut>Ctrl+Shift+`</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Split Terminal <MenubarShortcut>Ctrl+Shift+5</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Run Task 
          </MenubarItem>
          <MenubarItem>
            Run Build Task <MenubarShortcut>Ctrl+Shift+8</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Run Active File 
          </MenubarItem>
          <MenubarItem>
            Run Selected Text 
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Show Running Tasks... 
          </MenubarItem>
          <MenubarItem>
            Restart Running Tasks... 
          </MenubarItem>
          <MenubarItem>
            Terminate Task..
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Configure Tasks...
          </MenubarItem>
          <MenubarItem>
            Configure Default Build Task...
          </MenubarItem>
        </MenubarContent>
      </>
    );
  }
  