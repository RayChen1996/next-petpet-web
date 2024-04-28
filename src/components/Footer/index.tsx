import React from "react";
import Image from "next/image";
import Logo from "@/../../public/logo.svg";
export default function Page() {
  return (
    <>
      <ul className=" h-9   mt-20 lg:flex justify-around items-center">
        <li className=" leading-9 ">
          <Image alt="" src={Logo} />
        </li>
        <li className="hidden lg:block leading-9">寵物服務</li>
        <li className="hidden lg:block leading-9">加入我們</li>
        <li className="hidden lg:block leading-9">聯繫我們</li>
      </ul>
      <footer className="hidden container lg:flex justify-between items-center">
        <ul className=" mt-20 flex justify-around w-full text-brown ">
          <li>
            <ul className="space-y-6">
              <li>關於我們</li>
              <li>使用條款</li>
              <li>隱私政策</li>
            </ul>
          </li>

          <li>
            <ul className="space-y-6">
              <li>寵物寄宿</li>
              <li>寵物到府保姆</li>
              <li>寵物美容洗澡</li>
              <li>寵物行為訓練</li>
            </ul>
          </li>
          <li>
            <ul className="space-y-6">
              <li>成為寵物保姆</li>
              <li>加入寵物計程車</li>
              <li>專屬 APP 下載</li>
              <li>相關合約條款</li>
            </ul>
          </li>
          <li>
            <ul className="space-y-6">
              <li>petpet@petmail.com</li>
            </ul>
          </li>
        </ul>
      </footer>
      <footer className="container mt-[105px] flex justify-between items-center">
        <div className=" hidden md:block">07-123-4567</div>

        <div>Copyright © 2020 PetPet. All rights reserved.</div>
      </footer>
    </>
  );
}
