import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { editMenuItems } from "../_constants";

export default function Edit() {
  return (
    <>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {editMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`edit-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`edit-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
