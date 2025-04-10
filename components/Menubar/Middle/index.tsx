import CustomTooltip from "@/components/Custom/CustomTooltip";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

export default function Middle() {
  return (
    <div className="flex items-center gap-5">
      <CustomTooltip title="Go Back (Alt+LeftArrow)">
        <VscArrowLeft size={20} />
      </CustomTooltip>
      <CustomTooltip title="Go Forward (Alt+RightArrow)">
        <VscArrowRight size={20} />
      </CustomTooltip>
    </div>
  );
}
