import { BsFillBookmarkFill } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function RightSection() {
  return (
    <div className="w-2/5">
      <h1 className="text-2xl text-white my-2">Walkthroughs</h1>
      <div className="space-y-1.5">
        <CardWrapper
          title={"GitHub Coplilot"}
          text={"Supercharge your coding experience for as little as $10/month with cutting edge AI code generation."}
        />
        <CardWrapper
          title={"Get Started with VS Code"}
          text={"Discover the best customizations to make VS Code yours."}
        />
        <CardWrapper leftIcon={"bookmark"} badgeText="Get Started with Bookmarks" badgelabel="New" />
        <CardWrapper leftIcon={"docker"} badgeText="Get Started with Docker" badgelabel="Updated" />
      </div>
    </div>
  );
}

const CardWrapper = ({
  title,
  text,
  leftIcon,
  badgeText,
  badgelabel,
}: {
  title?: string;
  text?: string;
  leftIcon?: string;
  badgelabel?: string;
  badgeText?: string;
}) => {
  return (
    <Card className="bg-[#3C3C3C] border-none text-white py-2 w-3/4">
      <CardHeader className="py-0">
        <CardTitle className="text-md flex items-center justify-between py-0">
          {title}
          {title && <VscClose />}
        </CardTitle>
      </CardHeader>
      {badgelabel ? (
        <CardContent className="py-1">
          <h1 className="flex items-center gap-2">
            {leftIcon === "docker" ? <FaDocker className="text-blue-400" size={20} /> : <BsFillBookmarkFill />}
            <span className="text-sm">{badgeText}</span>
            <Badge>{badgelabel}</Badge>
          </h1>
        </CardContent>
      ) : (
        <CardContent className="text-sm flex items-center justify-between py-1">{text}</CardContent>
      )}
    </Card>
  );
};
