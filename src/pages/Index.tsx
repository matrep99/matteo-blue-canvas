import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { LatestWorks } from "@/components/LatestWorks";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <LatestWorks />
        <PersonalProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
