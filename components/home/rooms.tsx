import FeatureBar from "../shared/FeatureBar";
import RoomCard from "../shared/RoomCard";

export const Rooms = () => {
  const roomData = [
    {
      category: "Luxury Room",
      price: 150,
      title: "Standard Rooms",
      rating: "4.9",
      bed: 1,
      bath: 1,
      sqft: 300,
      image: "/pg2.jpg",
    },
    {
      category: "Luxury Room",
      price: 250,
      title: "Deluxe Rooms",
      rating: "5.0",
      bed: 1,
      bath: 2,
      sqft: 400,
      image: "/pg2.jpg",
    },
    {
      category: "Luxury Suites",
      price: 450,
      title: "The Pearl Suite",
      rating: "4.9",
      bed: 2,
      bath: 2,
      sqft: 700,
      image: "/pg2.jpg",
    },
  ];

  return (
    <>
      <section className="py-10 relative overflow-hidden">
        {/* Background Watermark Text */}
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none">
          <h1 className="text-[3rem] md:text-[10rem] font-bold text-slate-200/40 uppercase tracking-tighter leading-none whitespace-nowrap">
            Rooms & Suits
          </h1>
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 space-y-2">
            <div className="flex justify-center mb-2">
              <div className="text-[#2C4A42] opacity-80 flex-shrink-0">
                <svg
                  width="60"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="currentColor"
                >
                  <path
                    d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <span className="text-orange-500 uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
              Rooms & Suites
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 font-medium">
              Luxury Rooms & Suites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {roomData.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>
      <FeatureBar
        features={[
          "Breakfast Included",
          "Swimming Pool",
          "High Speed Wifi",
          "Spa & Wellness",
        ]}
        duration={10}
      />
    </>
  );
};
