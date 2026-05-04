"use client";

import { Rooms } from "../home/rooms";
import { ReservationForm } from "../home/reservationForm";
import { Testimonials } from "../home/testimonials";
import { Banners } from "../shared/banners";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const Banner = ({
  title = "Rooms & Suites",
  currentPage = "Rooms & Suites",
  bgImage = "/pg2.jpg",
}: BannerProps) => {
  return (
    <>
      <Banners title={title} currentPage={currentPage} bgImage={bgImage} />
      <Rooms />
      <ReservationForm />
      <Testimonials />
    </>
  );
};
