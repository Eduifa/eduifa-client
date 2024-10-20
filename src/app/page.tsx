import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { appDefaultFont } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className={` flex-1  ${appDefaultFont.className}`}>
        <Hero />
      </main>
    </div>
  );
}
