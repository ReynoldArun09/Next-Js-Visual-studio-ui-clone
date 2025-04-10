import { footerLinks } from "@/constants";
import CustomTooltip from "../Custom/CustomTooltip";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-[#3C3C3C] pr-4 text-white items-center h-[36px]">
      <div className="flex items-center gap-2 pl-4">
        {footerLinks?.left?.map((leftLinks, index) => (
          <CustomTooltip key={`leftLinks-${index}`} title={leftLinks.title}>
            <span>{leftLinks.icon}</span>
          </CustomTooltip>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {footerLinks.right.map((rightLinks, index) => (
          <CustomTooltip key={`rightLinks-${index}`} title={rightLinks.title}>
            <span>{rightLinks.icon}</span>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
