import LeftSide from "./Left";
import Middle from "./Middle";
import RightSide from "./Right";

export default function MenuBar() {
  return (
    <header className="flex justify-between items-center pr-6 bg-[#3C3C3C] text-white">
      <LeftSide />
      <Middle />
      <RightSide />
    </header>
  );
}
