import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/../public/index-10.png";
import img2 from "@/../public/index-11.png";
import img3 from "@/../public/index-12.png";
import PageTitle from "@/components/PageTitle";

interface FlowData {
  title: string;
  src: StaticImageData;
}
export default function ReserveFlow() {
  const flowData: FlowData[] = [
    {
      title: "1.查詢想要的服務",
      src: img1,
    },
    {
      title: "2.找到合適的保姆",
      src: img2,
    },
    {
      title: "3.填寫資料完成預約",
      src: img3,
    },
  ];
  return (
    <section className=" m-auto lg:w-11/12 my-20">
      <div className="mb-[20px]">
        <PageTitle title="預約流程" subTitle="輕鬆三步驟，立即獲取最佳服務！" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px] lg:gap-[30px]">
        {flowData.map((item, idx) => {
          return (
            <div key={idx} className="">
              <div className=" text-brown text-xl font-bold">{item.title}</div>
              <figure className="relative  h-80">
                <Image
                  src={item.src}
                  className=" aspect-[4/3] object-cover "
                  alt=""
                  fill
                />
              </figure>
            </div>
          );
        })}
        <div></div>
      </div>
    </section>
  );
}
