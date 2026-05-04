import React from "react";
import { Banners } from "../shared/banners";
import { ReservationForm } from "../home/reservationForm";
import { LocationInfo } from "../shared/location-info";
import FeatureBar from "../shared/FeatureBar";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const ContactPage = ({
  title = "Contact US",
  currentPage = "Get In Touch",
  bgImage = "/pg2.jpg",
}: BannerProps) => {
  return (
    <div>
      <Banners title={title} currentPage={currentPage} bgImage={bgImage} />
      <ReservationForm />
      <div className="footer-column ">
        <h4 className="text-black font-bold mb-4 text-2xl px-4 md:px-8">
          Get In Touch
        </h4>
        <LocationInfo variant="card" />
      </div>
    </div>
  );
};
