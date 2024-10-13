import React from "react";
import Image from "next/image";
import indxPng from "@/../../public/index-1.png";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Banner() {
  return (
    <div className="lg:flex lg:gap-[30px]">
      <Image alt="" src={indxPng} />
      <div className="mt-6 lg:m-auto flex-1 pr-20">
        <h1 className=" text-brown font-bold lg:text-[40px]">
          寵物服務，盡在 PETPET
        </h1>
        <p className="  text-brown text-2xl font-bold mt-4 mb-12">
          當您的毛孩有需要時， 幫您找到最合適的服務者！
        </p>
        <div className="lg:flex text-[20px]">
          <div className="mt-5 lg:mt-0 mb-3 lg:w-[120px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="品種" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">品種</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3 lg:flex-1">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="服務" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">服務</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4 lg:flex-1 ">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="地區" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">地區</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="button"
            className="bg-orange-dark rounded-none lg:w-[95px]"
          >
            搜尋
          </Button>
        </div>
      </div>
    </div>
  );
}
