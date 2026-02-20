// import { Video } from "lucide-react"; // Removed unused import
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import NextStepsSection from "./components/NextStepsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import VideoPodcastSection from "./components/VideoPodcastSection";
import ProcessSection from "./components/ProcessSection";
import DepartmentsSection from "./components/DepartmentsSection";
import ServicesSection from "./components/ServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductionPlannerSection from "./components/ProductionPlannerSection";
import FAQSection from "./components/FAQSection";
import SectionWrapper from "./components/SectionWrapper";

const App = () => {
  return (
		<div>
			<Navbar />
			<Hero />
			<StatsSection></StatsSection>
			<VideoPodcastSection></VideoPodcastSection>
			<ProcessSection></ProcessSection>
			<DepartmentsSection></DepartmentsSection>
			<ServicesSection></ServicesSection>
			<SectionWrapper>
				<CaseStudiesSection />
				<TestimonialsSection />
			</SectionWrapper>
			{/* <CaseStudiesSection></CaseStudiesSection>
      <TestimonialsSection  ></TestimonialsSection> */}
			<ProductionPlannerSection></ProductionPlannerSection>
			<FAQSection></FAQSection>

			<BlogSection></BlogSection>
			<ContactSection></ContactSection>
			<NextStepsSection></NextStepsSection>
			<Footer></Footer>
		</div>
	);
};

export default App;
