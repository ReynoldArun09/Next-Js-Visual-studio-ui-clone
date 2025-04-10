import { VscFolder } from "react-icons/vsc";

export default function FileFolder() {
  return (
    <div className="px-4">
      <ul className="cursor-pointer">
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>app</span>
        </li>
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>components</span>
        </li>
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>constants</span>
        </li>
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>lib</span>
        </li>
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>public</span>
        </li>
        <li className="flex items-center gap-2">
          <VscFolder className="ml-1" />
          <span>store</span>
        </li>
      </ul>
    </div>
  );
}
