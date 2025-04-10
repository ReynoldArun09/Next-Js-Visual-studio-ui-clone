import { AiOutlineCheck, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFiletypeJson } from "react-icons/bs";
import { DiGit, DiJsBadge } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { SiPostcss, SiTypescript } from "react-icons/si";
import { TbPackageOff } from "react-icons/tb";
import {
  VscAccount,
  VscAdd,
  VscBeaker,
  VscBell,
  VscBookmark,
  VscCheckAll,
  VscChevronDown,
  VscChevronUp,
  VscChromeClose,
  VscDebugAlt,
  VscEllipsis,
  VscErrorSmall,
  VscExtensions,
  VscFeedback,
  VscFile,
  VscFiles,
  VscJson,
  VscNewFile,
  VscNewFolder,
  VscRadioTower,
  VscRemote,
  VscRemoteExplorer,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
  VscSplitHorizontal,
  VscSymbolNamespace,
  VscTrash,
  VscWarning,
} from "react-icons/vsc";

//footer links

export const footerLinks = {
  left: [
    {
      title: "Open a Remote Window",
      icon: <VscRemote />,
    },
    {
      title: "(Git)- main",
      icon: (
        <span className="flex items-center gap-1">
          <VscSourceControl />
          <span>master*</span>
        </span>
      ),
    },
    {
      title: "No Problems",
      icon: (
        <span className="flex items-center gap-1">
          0 <VscErrorSmall size={20} />
        </span>
      ),
    },
    {
      title: "No Problems",
      icon: (
        <span className="flex items-center gap-1">
          <VscWarning /> 0
        </span>
      ),
    },
  ],
  right: [
    {
      title: "Select Indentation",
      icon: <span>Spaces: 2</span>,
    },
    {
      title: "Select Encoding",
      icon: <span>UTF-8</span>,
    },
    {
      title: "Select End of Line Sequence",
      icon: <span>CRLF</span>,
    },
    {
      title: "Select Language Mode",
      icon: (
        <span className="flex items-center gap-2">
          <VscSymbolNamespace />
          TypeScript JSX
        </span>
      ),
    },
    {
      title: "Click to run live server",
      icon: (
        <span className="flex items-center gap-2">
          <VscRadioTower />
          Go Live
        </span>
      ),
    },
    {
      title: "Prettier",
      icon: (
        <span className="flex items-center gap-2">
          <VscCheckAll />
          Prettier
        </span>
      ),
    },
    {
      title: "Tweet Feedback",
      icon: <VscFeedback />,
    },
    {
      title: "No Notifications",
      icon: <VscBell />,
    },
  ],
};

//terminal links
export const terminalData = (ToggleTerminal: any) => [
  {
    type: "header",
    title: "PROBLEMS",
  },
  {
    type: "header",
    title: "OUTPUT",
  },
  {
    type: "header",
    title: "DEBUG CONSOLE",
  },
  {
    type: "header",
    title: "TERMINAL",
  },
  {
    type: "action",
    icons: [
      { icon: <VscAdd /> },
      { icon: <VscChevronDown /> },
      { icon: <VscEllipsis /> },
      { icon: <VscChevronUp /> },
      { icon: <VscChromeClose onClick={ToggleTerminal} /> },
    ],
  },
  {
    type: "terminalOutput",
    lines: [
      { text: "Reynold@DESKTOP-TD32BI91 MINGW64" },
      { text: "/d/Project/final-visual-studo-clone (main)" },
      { text: "$ pnpm run dev" },
      { text: "visual-studio-clone@0.1.0 dev" },
      { text: "next dev" },
      { text: "- ready started server on 0.0.0.0:3000, url: http://localhost:3000" },
      { text: "- event compiled client and server successfully in 1270 ms (20 modules)" },
      { text: "- wait compiling..." },
      { text: "- event compiled client and server successfully in 434 ms (20 modules)" },
    ],
  },
  {
    type: "bashSession",
    sessions: [
      { id: 1, name: "Bash", actions: [<VscSplitHorizontal />, <VscTrash />] },
      { id: 2, name: "Bash", actions: [<VscSplitHorizontal />, <VscTrash />] },
    ],
  },
];

// sidebar links
export const sidebarLinks = {
  top: [
    {
      title: "Explorer (Ctrl+Shift+E)",
      icon: <VscFiles size={25} />,
    },
    {
      title: "Search (Ctrl+Shift+F)",
      icon: <VscSearch size={25} />,
    },
    {
      title: "Source Control (Ctrl+Shift+G)",
      icon: <VscSourceControl size={25} />,
    },
    {
      title: "Run And Debug (Ctrl+Shift+D)",
      icon: <VscDebugAlt size={25} />,
    },
    {
      title: "Extensions (Ctrl+Shift+X)",
      icon: <VscExtensions size={25} />,
    },
    {
      title: "Remote Explorer",
      icon: <VscRemoteExplorer size={25} />,
    },
    {
      title: "Testing",
      icon: <VscBeaker size={25} />,
    },
    {
      title: "Docker",
      icon: <FaDocker size={25} />,
    },
    {
      title: "Bookmarks",
      icon: <VscBookmark size={25} />,
    },
    {
      title: "Additional Views",
      icon: <VscEllipsis size={25} />,
    },
  ],
  bottom: [
    {
      title: "Accounts",
      icon: <VscAccount size={25} />,
    },
    {
      title: "Manage",
      icon: <VscSettingsGear size={25} />,
    },
  ],
};

// editor links
export const EditorLeftsection = [
  {
    label: "New File...",
    icon: <VscNewFile size={20} />,
  },
  {
    label: "Open File...",
    icon: <VscFile size={20} />,
  },
  {
    label: "Open Folder",
    icon: <VscNewFolder size={20} />,
  },
  {
    label: "Clone Git Repository",
    icon: <VscSourceControl size={20} />,
  },
  {
    label: "Connect to",
    icon: <VscRemote size={20} />,
  },
];

// explorer links
export const files = [
  {
    icon: <DiGit className="text-red-400" />,
    filename: ".gitignore",
  },
  {
    icon: <BsFiletypeJson className="text-yellow-500" />,
    filename: "components.json",
  },
  {
    icon: <SiTypescript className="text-blue-400" />,
    filename: "next-env.d.ts",
  },
  {
    icon: <DiJsBadge className="text-yellow-300" />,
    filename: "next.config.js",
  },
  {
    icon: <TbPackageOff className="text-blue-400" />,
    filename: "package-lock.json",
  },
  {
    icon: <FiPackage className="text-blue-400" />,
    filename: "package.json",
  },
  {
    icon: <SiPostcss className="text-red-400" />,
    filename: "postcss.config.js",
  },
  {
    icon: <AiOutlineQuestionCircle className="text-blue-400" />,
    filename: "README.md",
  },
  {
    icon: <DiJsBadge className="text-yellow-300" />,
    filename: "tailwind.config.js",
  },
  {
    icon: <VscJson className="text-yellow-400" />,
    filename: "tsconfig.json",
  },
];

export const explorertopData = [
  {
    text: "Open Editors",
    icon: null,
    subMenu: false,
  },
  {
    text: "Folders",
    icon: <AiOutlineCheck className="mr-2" />,
    subMenu: false,
  },
  {
    text: "Outline",
    icon: <AiOutlineCheck className="mr-2" />,
    subMenu: false,
  },
  {
    text: "Timeline",
    icon: <AiOutlineCheck className="mr-2" />,
    subMenu: false,
  },
  {
    text: "NPM scripts",
    icon: null,
    subMenu: false,
  },
];
