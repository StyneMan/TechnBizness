export const metadata = {
  title: "Home - TechnBizness",
  description: "Simplfying your business with tech",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import LatestNews from "@/components/news";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <br />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <LatestNews />
      <Cta />
    </>
  );
}
