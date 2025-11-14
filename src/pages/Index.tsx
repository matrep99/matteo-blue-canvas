import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { LatestWorks } from "@/components/LatestWorks";
import { PersonalProjects } from "@/components/PersonalProjects";
import { PostersSlideshow } from "@/components/PostersSlideshow";
import { Footer } from "@/components/Footer";
import { PasswordProtection } from "@/components/PasswordProtection";

const Index = () => {
  return (
    <PasswordProtection>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Hero />
          <About />
          <LatestWorks />
          <PersonalProjects />
          <PostersSlideshow />
        </main>
        <Footer />
      </div>
    </PasswordProtection>
  );
};

export default Index;
