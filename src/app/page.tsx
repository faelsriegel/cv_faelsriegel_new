import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Education } from "@/components/sections/education";
import { Certificates } from "@/components/sections/certificates";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Education />
        <Certificates />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
