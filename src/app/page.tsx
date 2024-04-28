import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Banner from "@/components/page/home/Banner";
import HotBlock from "@/components/page/home/HotBlock";
import Preserve from "@/components/page/home/Preserve";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container w-11/12 ">
      <Banner />
      <HotBlock />
      <Preserve />
      {/* <Button variant="default">ADD</Button>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem /> */}
    </main>
  );
}

function CardItem() {
  return (
    <Card className=" my-5">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
