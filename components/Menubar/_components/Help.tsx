import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { helpMenuItems } from "../_constants";

export default function Help() {
  return (
    <>
      <MenubarTrigger>Help</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {helpMenuItems.map((Item, index) => {
          if (Item.type === "separator") {
            return <MenubarSeparator key={`help-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`help-${Item.label}-${index}`}>
              {Item.label}
              {Item.shortcut && <MenubarShortcut>{Item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
