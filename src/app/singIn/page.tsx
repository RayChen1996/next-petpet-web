import Image from "next/image";
import React from "react";
import jpg from "@/../../public/index-1.png";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2">
      <figure className="relative min-h-[736px] md:col-span-1">
        <Image
          src={jpg}
          alt=""
          fill
          className="aspect-[530/736] object-contain"
          sizes="1200px"
        />
      </figure>
      <div className="bg-white p-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold">登入</h2>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-lg font-bold">
              電子郵件
            </label>
            <input
              type="email"
              id="email"
              placeholder="請輸入電子郵件"
              className="rounded-md border border-gray-300 p-2"
            />
          </div>
          <button className="rounded-md bg-brown px-4 py-2 text-white">
            註冊
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-lg font-bold">
            密碼
          </label>
          <input
            type="password"
            id="password"
            placeholder="請輸入密碼"
            className="rounded-md border border-gray-300 p-2"
          />

          <button className="rounded-md bg-brown px-4 py-2 text-white">
            登入
          </button>
        </div>
      </div>
    </div>
  );
}
