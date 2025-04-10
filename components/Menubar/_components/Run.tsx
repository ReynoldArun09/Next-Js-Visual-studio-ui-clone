import { MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../../ui/menubar";
import { runMenuItems } from "../_constants";

export default function Run() {
  return (
    <>
      <MenubarTrigger>Run</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {runMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`run-sep-${index}`} />;
          }
          return (
            <MenubarItem key={`run-${item.label}-${index}`}>
              {item.label}
              {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </>
  );
}
