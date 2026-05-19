import { Banners } from "../shared/banners";
import { BentoGrid } from "./bentogrid";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const GalleryPage = ({
  title = "Gallery Section",
  currentPage = "Gallery & View",
  bgImage = "/double/d2.jpeg",
}: BannerProps) => {
  return (
    <>
      <Banners title={title} currentPage={currentPage} bgImage={bgImage} />
      <BentoGrid />
    </>
  );
};
