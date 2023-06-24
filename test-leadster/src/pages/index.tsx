import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { BigBanner } from "@/components/BigBanner/BigBanner";
import { Footer } from "@/components/Footer/Footer";
import { CallToAction } from "@/components/CallToAction/CallToAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <BigBanner />
      <CallToAction />
      <Footer />
    </>
  );
}
