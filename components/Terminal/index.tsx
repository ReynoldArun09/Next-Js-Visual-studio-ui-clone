"use client";

import { terminalData } from "@/constants";
import { useStore, useStoreActions } from "@/store/useStore";
import { VscTerminal } from "react-icons/vsc";

export default function Terminal() {
  const TerminalShow = useStore((state) => state.TerminalShow);
  const { ToggleTerminal } = useStoreActions();
  const terminalContent = terminalData(ToggleTerminal);

  return (
    <>
      {TerminalShow && (
        <section className="h-screen bg-[#252526] text-white bottom-0 w-full">
          <div className="h-10 flex justify-between items-center px-4 bg-[#3C3C3C]">
            <ul className="flex items-center gap-5 text-[10px]">
              {terminalContent.slice(0, 4).map((header, index) => (
                <li key={index}>{header.title}</li>
              ))}
            </ul>
            <ul className="flex gap-3">
              {terminalContent[4].icons?.map((icon, index) => (
                <li key={index}>{icon.icon}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between pl-4">
            <div className="py-8">
              {terminalContent[5].lines?.map((line, index) => (
                <h2 key={index}>{line.text}</h2>
              ))}
            </div>
            <div>
              <ul className="bg-[#3C3C3C] h-screen pl-[14px] w-[165px] space-y-2 pt-4 border-l border-l-gray-500 cursor-pointer">
                {terminalContent[6].sessions?.map((session) => (
                  <li key={session.id} className="flex items-center gap-2">
                    <VscTerminal />
                    <span>{session.name}</span>
                    <span className="flex items-center gap-3">
                      {session.actions.map((action, index) => (
                        <span key={index}>{action}</span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
