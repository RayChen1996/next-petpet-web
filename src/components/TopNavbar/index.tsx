"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../../public/logo.svg";
import Link from "next/link";
import clsx from "clsx";
// import { burger } from "@lucide/lab";
import { Camera, MenuIcon, Menu, HamIcon, Circle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false); // 控制菜单的状态

  const toggleMenu = () => {
    setIsOpen(!isOpen); // 切换菜单状态
  };

  return (
    <header className=" container flex justify-between sticky top-0 backdrop-blur-md ">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image alt="logo" src={Logo} />
        </Link>
      </div>

      <button className="lg:hidden ml-4">
        {isOpen ? (
          <Circle color="#D5411A" />
        ) : (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu color="#F0AD25" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col justify-center items-center gap-7 text-brown">
                  <Link href={"/"}>預約服務</Link>
                  <Link href={"/singIn"}>成為寵物保姆</Link>

                  <Link href={"/"}>登入</Link>
                </ul>
              </SheetContent>
            </Sheet>
          </>
        )}
      </button>
      <ul className="hidden  lg:flex gap-10 justify-center items-center">
        <Link className=" leading-6 text-brown" href={""}>
          預約服務
        </Link>

        <Link className=" leading-6 text-brown" href={""}>
          成為寵物保姆
        </Link>
        <Link className=" leading-6 text-brown" href={"/singIn"}>
          登入
        </Link>
      </ul>
    </header>
  );
}
