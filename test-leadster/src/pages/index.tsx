import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { BigBanner } from "@/components/BigBanner/BigBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <BigBanner/>
    </>
  );
}
