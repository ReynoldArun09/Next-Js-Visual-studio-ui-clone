import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { selectionMenuItems } from "../_constants";

export default function Selection() {
  return (
    <>
      <MenubarTrigger>Selection</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {selectionMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`section-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`section-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
