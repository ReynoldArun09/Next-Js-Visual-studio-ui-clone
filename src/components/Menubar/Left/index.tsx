
import {
  Menubar,
  MenubarMenu,
} from "@/components/ui/menubar";
import File from "./File";
import Edit from "./Edit";
import Selection from "./Selection";
import Terminal from "./Terminal";
import Help from "./Help";
import View from "./View";
import Go from "./Go";
import Run from "./Run";
import { TbBrandVscode } from "react-icons/tb";

export default function LeftSide() {
  return (
    <nav className="ml-2">
      <Menubar>
        <h1 className="mr-4"><TbBrandVscode size={25} className="text-blue-600"/></h1> 
        <MenubarMenu>
          <File />
        </MenubarMenu>
        <MenubarMenu>
          <Edit />
        </MenubarMenu>
        <MenubarMenu>
          <Selection />
        </MenubarMenu>
        <MenubarMenu>
          <View />
        </MenubarMenu>
        <MenubarMenu>
          <Go />
        </MenubarMenu>
        <MenubarMenu>
          <Run />
        </MenubarMenu>
        <MenubarMenu>
          <Terminal />
        </MenubarMenu>
        <MenubarMenu>
          <Help />
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
