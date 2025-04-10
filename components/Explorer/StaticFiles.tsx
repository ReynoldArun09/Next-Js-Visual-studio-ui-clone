import { files } from "@/constants";

export default function StaticFiles() {
  return (
    <ul>
      {files.map((file, index) => (
        <li key={index} className="flex items-center gap-2 ml-5 mt-[1px]">
          {file.icon}
          <span>{file.filename}</span>
        </li>
      ))}
    </ul>
  );
}
