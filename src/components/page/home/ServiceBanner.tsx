import React from "react";
import img3 from "@/../public/index-9.jpeg";
import Image from "next/image";
export default function ServiceBanner() {
  return (
    <div>
      <Image src={img3} alt="" className="w-full max-h-[584px] object-cover" />
    </div>
  );
}
