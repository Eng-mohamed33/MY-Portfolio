import SiteNavbar from "@/components/portfolio/SiteNavbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TrustMarquee from "@/components/portfolio/TrustMarquee";
import AboutSkills from "@/components/portfolio/AboutSkills";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import AchievementsStrip from "@/components/portfolio/AchievementsStrip";
import Certifications from "@/components/portfolio/Certifications";
import CTASection from "@/components/portfolio/CTASection";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <HeroSection />
      <TrustMarquee />
      <AboutSkills />
      <ServicesSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <AchievementsStrip />
      <Certifications />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
