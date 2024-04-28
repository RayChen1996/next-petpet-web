import React from "react";

interface PageTitleProps {
  title: string;
  subTitle: string;
}
export default function PageTitle({ subTitle, title }: PageTitleProps) {
  return (
    <div>
      <h3 className=" text-2xl text-brown font-bold">{title}</h3>
      <h4 className=" text-brown">{subTitle}</h4>
    </div>
  );
}
