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
    <div className="py-20 lg:px-[95px]">
      <PageTitle
        title="線上預約"
        subTitle="即時瞭解您的需求，安排最適合毛孩的寵物保姆！"
      />
      <div className="grid grid-cols-1 gap-[6px] lg:grid-cols-4">
        <div className="relative flex items-center justify-center">
          <Image src={img1} alt="" fill className="object-cover" />
          <span className="relative mx-auto text-2xl font-bold text-white">
            寵物寄宿
          </span>
        </div>
        <div className="relative flex items-center justify-center">
          <Image src={img2} alt="" fill className="object-cover" />
          <span className="relative mx-auto text-2xl font-bold text-white">
            寵物美容
          </span>
        </div>
        <div className="relative flex h-[550px] flex-col gap-[6px]">
          <figure className="relative flex flex-1 items-center justify-center">
            <Image src={img3} alt="" className="object-cover" fill />
            <span className="relative mx-auto text-2xl font-bold text-white">
              到府照顧
            </span>
          </figure>
          <figure className="relative flex flex-1 items-center justify-center">
            <Image src={img4} alt="" className="object-cover" fill />
            <span className="relative mx-auto text-2xl font-bold text-white">
              遛狗保姆
            </span>
          </figure>
        </div>
        <div className="relative flex items-center justify-center">
          <Image src={img5} alt="" fill className="object-cover" />
          <span className="relative mx-auto text-2xl font-bold text-white">
            行為訓練
          </span>
        </div>
      </div>
    </div>
  );
}
