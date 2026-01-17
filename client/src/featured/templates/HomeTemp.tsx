import BannerSection from "../sections/homeSections/BannerSection";
import HighlightsSection from "../sections/homeSections/HighlightsSection";
import AboutSection from "../sections/homeSections/AboutSection";
import OurDoctorsSection from "../sections/homeSections/OurDoctorsSection";
import TestimonialsSection from "../sections/homeSections/TestimonialsSection";
import UsefulInfoSection from "../sections/homeSections/UsefulInfoSection";

const HomeTemplates = () => {
  return (
    <>
      <BannerSection />
      <HighlightsSection />
      <OurDoctorsSection />
      <UsefulInfoSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
};

export default HomeTemplates;
