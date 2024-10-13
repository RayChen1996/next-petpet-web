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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[6px]">
        <div className="relative flex justify-center items-center">
          <Image src={img1} alt="" fill className="object-cover" />
          <span className="text-2xl font-bold mx-auto text-white relative">
            寵物寄宿
          </span>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={img2} alt="" fill className="object-cover" />
          <span className="text-2xl font-bold mx-auto text-white relative">
            寵物美容
          </span>
        </div>
        <div className="flex flex-col h-[550px] relative gap-[6px]">
          <figure className="flex-1    relative flex justify-center items-center">
            <Image src={img3} alt="" className="object-cover" fill />
            <span className="text-2xl font-bold mx-auto text-white relative ">
              到府照顧
            </span>
          </figure>
          <figure className="flex-1   relative flex justify-center items-center">
            <Image src={img4} alt="" className="object-cover" fill />
            <span className="text-2xl font-bold mx-auto text-white  relative">
              遛狗保姆
            </span>
          </figure>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={img5} alt="" fill className="object-cover" />
          <span className="text-2xl font-bold mx-auto text-white relative">
            行為訓練
          </span>
        </div>
      </div>
    </div>
  );
}
