import {
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../../ui/menubar";
import { fileMenuItems } from "../_constants";

export default function File() {
  return (
    <>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent className="bg-[#3C3C3C] text-white border-none">
        {fileMenuItems.map((item, index) => {
          if (item.type === "separator") {
            return <MenubarSeparator key={`sep-${index}`} />;
          }
          if (item.type == "item") {
            return (
              <MenubarItem key={`item-${item.label}-${index}`}>
                {item.label}
                {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
              </MenubarItem>
            );
          }
          if (item.type === "submenu") {
            return (
              <MenubarSub key={`sub-${item.label}-${index}`}>
                <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
                <MenubarSubContent>
                  {item.children?.map((sub, index) => {
                    if (sub.type === "separator") {
                      return <MenubarSeparator key={`sub-sep-${index}`} />;
                    }
                    if (sub.type === "item") {
                      return <MenubarItem key={`sub-item-${item.label}-${index}`}>{sub.label}</MenubarItem>;
                    }
                  })}
                </MenubarSubContent>
              </MenubarSub>
            );
          }
        })}
      </MenubarContent>
    </>
  );
}
