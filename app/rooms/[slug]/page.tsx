import { roomData } from "@/components/data/roomData";
import { BookingSidebar } from "@/components/rooms/booking-sidebar";
import { RoomGallery } from "@/components/rooms/room-gallery";
import { RoomInfo } from "@/components/rooms/room-Info";
import { Banners } from "@/components/shared/banners";
import FeatureBar from "@/components/shared/FeatureBar";
import { LocationInfo } from "@/components/shared/location-info";
import { notFound } from "next/navigation";

export default async function RoomDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomData.find((r) => r.slug === slug);

  if (!room) return notFound();

  return (
    <>
      <main>
        {/* Dynamic Banner */}
        <Banners
          title={room.title}
          currentPage={room.title}
          bgImage={room.image}
        />

        <div className="px-4 md:px-8 py-10">
          <RoomGallery mainImage={room.image} gallery={room.gallery} />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Left Column: Detailed Info */}
            <div className="lg:col-span-2 space-y-12">
              <RoomInfo room={room} />
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <BookingSidebar price={room.price} />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <FeatureBar
        features={[
          "Breakfast Included",
          "Swimming Pool",
          "High Speed Wifi",
          "Spa & Wellness",
        ]}
        duration={10}
      />
      <div className="footer-column ">
        <h4 className="text-black font-bold mb-4 text-2xl px-4 md:px-8">
          Contact Us
        </h4>
        <LocationInfo variant="card" />
      </div>
    </>
  );
}
