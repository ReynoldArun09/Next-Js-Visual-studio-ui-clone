import { VscEllipsis } from "react-icons/vsc";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { explorertopData } from "../../constants";

export default function ExplorerTopBar() {
  return (
    <div className="flex justify-between py-2 px-4 items-center">
      <h1>Explorer</h1>
      <div>
        <Menubar className="bg-[#252526] border-none">
          <MenubarMenu>
            <MenubarTrigger className="bg-[#252526]">
              <VscEllipsis />
            </MenubarTrigger>
            <MenubarContent className="bg-[#252526] text-white">
              {explorertopData?.map((item, index) => (
                <MenubarItem key={index}>
                  {item.icon && item.icon}
                  <span className={item.icon ? "pl-5" : "pl-6"}>{item.text}</span>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
