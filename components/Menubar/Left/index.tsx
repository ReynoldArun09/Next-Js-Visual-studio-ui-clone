import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { TbBrandVscode } from "react-icons/tb";
import Help from "../_components/Help";
import View from "../_components/View";
import Terminal from "../_components/Terminal";
import Run from "../_components/Run";
import Go from "../_components/Go";
import Edit from "../_components/Edit";
import Section from "../_components/Selection";
import File from "../_components/File";

export default function LeftSide() {
  return (
    <nav className="ml-2">
      <Menubar className="bg-[#3c3c3c] border-none">
        <h1 className="mr-4">
          <TbBrandVscode size={25} className="text-blue-600" />
        </h1>
        <MenubarMenu>
          <File />
        </MenubarMenu>
        <MenubarMenu>
          <Edit />
        </MenubarMenu>
        <MenubarMenu>
          <Section />
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
