import Hero from "@/components/hero";
import { appDefaultFont } from "@/lib/fonts";

export default function Home() {
  return (
    <main className={`${appDefaultFont.className}`}>
      <Hero />
    </main>
  );
}
