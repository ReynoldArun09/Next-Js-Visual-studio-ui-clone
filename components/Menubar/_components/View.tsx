import { viewMenuItems } from "../_constants";
import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";

export default function View() {
  return (
    <>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {viewMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`view-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`view-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
