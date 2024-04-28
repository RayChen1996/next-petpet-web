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
    <div className="lg:flex">
      <Image alt="" src={indxPng} />
      <div className="mt-6 lg:m-auto">
        <h1 className="text-center text-brown font-bold text-2xl">
          寵物服務，盡在 PETPET
        </h1>
        <p className="text-center text-brown font-bold mt-2">
          當您的毛孩有需要時，
          <br /> 幫您找到最合適的服務者！
        </p>
        <div className=" lg:flex">
          <div className="mt-5 lg:mt-0 mb-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="品種" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">品種</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="服務" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">服務</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="地區" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">地區</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className=" bg-orange-dark">搜尋</Button>
        </div>
      </div>
    </div>
  );
}
