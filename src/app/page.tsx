import Editor from "@/components/Editor";
import Explorer from "@/components/Explorer";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import React from "react";

export default function Root() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <Explorer />
        <div className="flex w-full justify-between">
          <Editor />
          <Rightbar />
        </div>
      </div>
    </main>
  );
}
