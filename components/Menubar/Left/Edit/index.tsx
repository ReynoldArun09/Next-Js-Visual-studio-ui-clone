import {
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Edit() {
  return (
    <>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white">
        <MenubarItem>
          Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Redo <MenubarShortcut>Ctrl+X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Cut <MenubarShortcut>Ctrl+Shift+N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Find <MenubarShortcut>Ctrl+F</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Replace <MenubarShortcut>Ctrl+H</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Find in Files <MenubarShortcut>Ctrl+Shift+F</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Replace in Files <MenubarShortcut>Ctrl+Shift+H</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Toggle Line Comment <MenubarShortcut>Ctrl+/</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Toggle Block Comment <MenubarShortcut>Shift+Alt+A</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Emmet:Expand Abbreviation <MenubarShortcut>Tab</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </>
  );
}
