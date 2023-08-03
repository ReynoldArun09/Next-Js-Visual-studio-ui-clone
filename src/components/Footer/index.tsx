import {
  VscCloudUpload,
  VscRadioTower,
  VscSourceControl,
  VscErrorSmall,
  VscWarning,
  VscSymbolNamespace,
  VscCheckAll,
  VscFeedback,
  VscBell,
  VscRemote,
} from "react-icons/vsc";
import CustomTooltip from "../Custom/CustomTooltip";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-[#3C3C3C] pr-4 text-white items-center h-[36px]">
      <div className="flex items-center gap-2">
        <CustomTooltip title="Open a Remote Window">
          <span className="flex items-center px-4 py-2 bg-[#1d1a1a]"><VscRemote /></span>
        </CustomTooltip>
        <CustomTooltip title="(Git)- main">
          <span className="flex items-center ml-6">
          <VscSourceControl />
          <span>master*</span>
          </span>
        </CustomTooltip>
        <CustomTooltip title="No Problems">
          <span className="flex items-center">0<VscErrorSmall size={20} /></span>
        </CustomTooltip>
        <CustomTooltip title="No Problems">
          <span className="flex items-center"><VscWarning />0</span>
        </CustomTooltip>
      </div>
      <div className="flex gap-4 items-center">
      <CustomTooltip title="Select Indentation">
          <span>
            Spaces: 2
          </span>
        </CustomTooltip>
      <CustomTooltip title="Select Encoding">
          <span>
            UTF-8
          </span>
        </CustomTooltip>
      <CustomTooltip title="Select End of Line Sequence">
          <span>
            CRLF
          </span>
        </CustomTooltip>
        <CustomTooltip title="Select Language Mode">
          <span className="flex items-center gap-2">
            <VscSymbolNamespace />
            TypeScript JSX
          </span>
        </CustomTooltip>
        <CustomTooltip title="Click to run live server">
          <span className="flex items-center gap-2">
            <VscRadioTower />
            Go Live
          </span>
        </CustomTooltip>
        <CustomTooltip title="Prettier">
          <span className="flex items-center gap-2">
            <VscCheckAll />
            Prettier
          </span>
        </CustomTooltip>
        <CustomTooltip title="Tweet Feedback">
          <VscFeedback />
        </CustomTooltip>
        <CustomTooltip title="No Notifications">
          <VscBell />
        </CustomTooltip>
      </div>
    </footer>
  );
}
