import { Menu } from "../home/menu";
import { Banners } from "../shared/banners";
import { DiningSection } from "./dining-section";
import { MenuFacilities } from "./menu-facilities";

interface BannerProps {
  title?: string;
  currentPage?: string;
  bgImage?: string;
}

export const FoodMenuPage = ({
  title = "Food Menu",
  currentPage = "Food Menu",
  bgImage = "/pg2.jpg",
}: BannerProps) => {
  return (
    <div>
      <Banners title={title} currentPage={currentPage} bgImage={bgImage} />
      <DiningSection />
      <Menu />
      <MenuFacilities />
    </div>
  );
};
