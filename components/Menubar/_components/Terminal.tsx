import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { terminalMenuItems } from "../_constants";

export default function Terminal() {
  return (
    <>
      <MenubarTrigger>Terminal</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {terminalMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`terminal-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`terminal-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
