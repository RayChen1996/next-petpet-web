import React from "react";
import PageTitle from "@/components/PageTitle";
import img1 from "@/../public/person-1.png";
import img2 from "@/../public/person-2.png";
import img3 from "@/../public/person-3.png";

import img4 from "@/../public/index-2.jpeg";
import img5 from "@/../public/index-3.jpeg";
import img6 from "@/../public/index-4.jpeg";

import Image, { StaticImageData } from "next/image";
interface HotBlockCard {
  name: string;
  src: StaticImageData;
  bg: StaticImageData;
  description: string;
  comment: string;
  completed: string;
}
export default function HotBlock() {
  const cardsData: HotBlockCard[] = [
    {
      name: "Jamie",
      bg: img4,
      comment: "198",
      completed: "580",
      description: "寄宿、美容、寵物行為訓練",
      src: img1,
    },
    {
      name: "Eric",
      bg: img5,
      comment: "76",
      completed: "208",
      description: "寄宿、美容、寵物行為訓練",
      src: img2,
    },
    {
      name: "Yvonne",
      bg: img6,
      comment: "52",
      completed: "196",
      description: "寄宿、美容、寵物行為訓練",
      src: img3,
    },
  ];
  return (
    <div className="my-20 lg:px-[95px]">
      <PageTitle
        title="本月熱門保姆"
        subTitle="即時瞭解您的需求，安排最適合毛孩的寵物保姆！"
      />
      <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-3">
        {cardsData.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-40">
              <Image
                src={item.bg}
                alt={`${item.name}'s background`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div className="px-4 pb-4 pt-12 text-center">
              <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
              <p className="mb-4 text-sm text-gray-600">{item.description}</p>
              <button className="mb-4 rounded-full px-4 py-2 text-red-700 transition duration-300 hover:bg-red-800">
                預約
              </button>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">獲得評價</p>
                  <p className="font-bold">{item.comment} 則</p>
                </div>
                <div>
                  <p className="text-gray-500">已完成訂單</p>
                  <p className="font-bold">{item.completed} 件</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
