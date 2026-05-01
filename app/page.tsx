import { Facilities } from "@/components/home/facilities";
import { FaqSection } from "@/components/home/faq";
import { HeroExperience } from "@/components/home/hero-experience";
import { HeroSection } from "@/components/home/hero-section";
import { Menu } from "@/components/home/menu";
import { ReservationForm } from "@/components/home/reservationForm";
import { Rooms } from "@/components/home/rooms";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HeroExperience />
      <Rooms />
      <Facilities />
      <WhyChooseUs />
      <Menu />
      <Testimonials />
      <ReservationForm />
      <FaqSection />
    </>
  );
};

export default HomePage;
