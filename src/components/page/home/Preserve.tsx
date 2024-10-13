import React from "react";
import PageTitle from "@/components/PageTitle";
import img1 from "@/../public/index-5.jpeg";
import img2 from "@/../public/index-6.jpeg";
import img3 from "@/../public/index-7.jpeg";
import img4 from "@/../public/index-8.jpeg";
import img5 from "@/../public/index-9.jpeg";
import Image from "next/image";

export default function Preserve() {
  return (
    <div className="lg:px-[95px] py-20 ">
      <PageTitle
        title="線上預約"
        subTitle="即時瞭解您的需求，安排最適合毛孩的寵物保姆！"
      />
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-[6px]">
        <div className="   bg-black-soft relative">
          <Image src={img1} alt="" fill className="object-cover" />
        </div>
        <div className="  relative">
          <Image src={img2} alt="" fill className="object-cover" />
        </div>
        <div className="   bg-black-soft flex flex-col relative gap-[6px]">
          <Image src={img3} alt="" className="object-cover" />
          <Image src={img4} alt="" className="object-cover" />
        </div>
        <div className="relative ">
          <Image src={img5} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
