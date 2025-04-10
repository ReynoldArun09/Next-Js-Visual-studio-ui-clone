import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { goMenuItems } from "../_constants";

export default function Go() {
  return (
    <>
      <MenubarTrigger>Go</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {goMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`go-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`go-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
