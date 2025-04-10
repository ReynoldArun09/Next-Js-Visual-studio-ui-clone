import { sidebarLinks } from "@/constants";
import CustomTooltip from "../Custom/CustomTooltip";

export default function Sidebar() {
  return (
    <section className="flex flex-col bg-[#3C3C3C] text-white justify-between h-[92vh] px-3">
      <ul className="flex flex-col mt-4 gap-8">
        {sidebarLinks.top.map((topLinks, index) => (
          <CustomTooltip key={`topLinks-${index}`} title={topLinks.title}>
            <span className="cursor-pointer">{topLinks.icon}</span>
          </CustomTooltip>
        ))}
      </ul>

      <ul className="flex flex-col gap-5 mb-4">
        {sidebarLinks.bottom.map((bottomLinks, index) => (
          <CustomTooltip key={`bottomLinks-${index}`} title={bottomLinks.title}>
            <span className="cursor-pointer">{bottomLinks.icon}</span>
          </CustomTooltip>
        ))}
      </ul>
    </section>
  );
}
