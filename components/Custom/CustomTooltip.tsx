import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProviderProps, TooltipTriggerProps } from "@radix-ui/react-tooltip";


interface TooltipProps extends TooltipProviderProps {
    children: React.ReactNode,
    title: string,
}

export default function CustomTooltip({children, title, ...props}: TooltipProps) {
  return (
    <>
      <TooltipProvider {...props}>
        <Tooltip>
          <TooltipTrigger>
            <p>{children}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
