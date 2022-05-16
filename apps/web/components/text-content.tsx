import React from "react";

type Params = { title: string; text: string };

export default function TextContent({ title, text }: Params) {
  return (
    <div className="divide-y-[1px] divide-[#48465B] space-y-1 basis-1/2">
      <p className="text-[16px] font-semibold">{title}</p>
      <p className="text-[16px] font-normal text-[#B5B3CB] pt-4 text-justify whitespace-pre-wrap">{text}</p>
    </div>
  );
}
