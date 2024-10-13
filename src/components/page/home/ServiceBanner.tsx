"use client";
import React from "react";
import img3 from "@/../public/index-9.jpeg";
import Image from "next/image";
import CountUp from "react-countup";
interface SectionTitleType {
  title: number;
  subTitle: string;
}
export default function ServiceBanner() {
  const tilles: SectionTitleType[] = [
    {
      title: 5278,
      subTitle: "人使用 PETPET",
    },
    {
      title: 580,
      subTitle: "人成為寵物保母",
    },
    {
      title: 10000,
      subTitle: "已完成服務",
    },
  ];
  return (
    <div className="relative">
      <Image src={img3} alt="" className="w-full max-h-[710px] object-cover " />
      <div className="absolute top-20 left-32 text-white">
        <div className="lg:text-[40px] ">PETPET目前已有</div>
        <div className="mt-[100px] flex  gap-[30px]">
          {tilles.map((item, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="h-80 w-1 bg-white" />
              <div>
                {/* <div className=" text-5xl leading-[72px]">{item.title}</div> */}
                <div className="text-5xl leading-[72px]">
                  <CountUp end={item.title} duration={2} separator="," />
                </div>
                <div className="text-xl">{item.subTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
