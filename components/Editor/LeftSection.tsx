import { EditorLeftsection } from "@/constants";

export default function LeftSection() {
  return (
    <div className="text-white">
      <h1 className="text-3xl">Visual Studio Code</h1>
      <h2 className="text-2xl mt-2">Editing evolved</h2>
      <div className="space-y-2 text-sm">
        <h1 className="text-xl mt-5">Start</h1>
        <div>
          {EditorLeftsection.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center cursor-pointer gap-2 text-blue-500 font-bold space-y-2.5"
            >
              <p>{item.icon}</p>
              <span>{item.label}</span>
            </div>
          ))}
          <div className="font-bold">
            <h1 className="text-xl text-white">Recent</h1>
            <p className="text-sm text-blue-600 flex gap-2 items-center tracking-wider">
              visual-studio-clone
              <span className="text-white">E:\projects</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
