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
import Contact from "@/components/page/home/Contact";
import ReserveFlow from "@/components/page/home/ReserveFlow";
import ServiceBanner from "@/components/page/home/ServiceBanner";
export default function Home() {
  return (
    <main className=" m-auto  ">
      <Banner />
      <HotBlock />
      <Preserve />
      <ServiceBanner />
      <ReserveFlow />
      <Contact />
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
