import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export default function Go() {
    return (
      <>
        <MenubarTrigger>Go</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Back<MenubarShortcut>Alt+LeftArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Forward <MenubarShortcut>Alt+RightArrow</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Last Edit Location <MenubarShortcut>Ctrl+K Ctrl+Q</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Switch Editor
          </MenubarItem>
          <MenubarItem>
            Switch Group
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
           Go to File... <MenubarShortcut>Ctrl+P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Go to Symbol in Workspace... <MenubarShortcut>Ctrl+T</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          Go to Symbol in Editor <MenubarShortcut>Ctrl+Shift+O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Go to Definition <MenubarShortcut>F12</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Go to Declaration 
          </MenubarItem>
          <MenubarItem>
          Go to Type Definition 
          </MenubarItem>
          <MenubarItem>
          Go to Implementations <MenubarShortcut>Ctrl+F12</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Go to References <MenubarShortcut>Shift+F12</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          Go to Line/column... <MenubarShortcut>Ctrl+F1G</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Go to Bracket <MenubarShortcut>Shift+F12</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          Next Problem <MenubarShortcut>Ctrl+Shift+\</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Previous Problem <MenubarShortcut>Shift+F8</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          Next Change <MenubarShortcut>Alt+F3</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
          Previous Change <MenubarShortcut>Shift+Alt+F3</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </>
    );
  }
  