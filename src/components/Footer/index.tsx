import React from "react";
import Image from "next/image";
import Logo from "@/../../public/logo.svg";
export default function Page() {
  return (
    <>
      <ul className="mt-20 h-9 items-center justify-around lg:flex">
        <li className="leading-9">
          <Image alt="" src={Logo} />
        </li>
        <li className="hidden leading-9 lg:block">寵物服務</li>
        <li className="hidden leading-9 lg:block">加入我們</li>
        <li className="hidden leading-9 lg:block">聯繫我們</li>
      </ul>
      <footer className="container hidden items-center justify-between lg:flex">
        <ul className="mt-20 flex w-full justify-around text-brown">
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
      <footer className="container mt-[105px] flex items-center justify-between">
        <div className="hidden md:block">07-123-4567</div>

        <div>Copyright © 2020 PetPet. All rights reserved.</div>
      </footer>
    </>
  );
}
