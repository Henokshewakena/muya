import { ClerkProvider } from "@clerk/nextjs";
import BannerCard from "@/components/cards/bannerCard";
import Blog from "@/components/grid/Blog";
import CarrouselCard from "@/components/cards/carrouselCard";
import LargerBlog from "@/components/grid/LargerBlog";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="">
      <BannerCard />
      <Blog />
      <CarrouselCard />
      <LargerBlog />
      <Subscribe />
    </main>
  );
}
