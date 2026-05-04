import { FaqSection } from "../home/faq";
import { HeroExperience } from "../home/hero-experience";
import { ReservationForm } from "../home/reservationForm";
import { Testimonials } from "../home/testimonials";
import { WhyChooseUs } from "../home/why-choose-us";
import { Banners } from "../shared/banners";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const AboutPage = ({
  title = "About Page",
  currentPage = "Rooms & Suites",
  bgImage = "/pg2.jpg",
}: BannerProps) => {
  return (
    <div>
      <Banners title={title} currentPage={currentPage} bgImage={bgImage} />
      <HeroExperience />
      <WhyChooseUs />
      <Testimonials />
      <ReservationForm />
      <FaqSection />
    </div>
  );
};
