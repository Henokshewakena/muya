import { ClerkProvider } from "@clerk/nextjs";
import BannerCard from "@/components/cards/bannerCard";

export default function Home() {
  return (
    <main className="">
      <BannerCard />
    </main>
  );
}
