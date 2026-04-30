"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const data = [
  { id: "1", label: "Home", path: "/" },
  { id: "2", label: "About", path: "/about" },
  { id: "3", label: "Gallery", path: "/gallery" },
  { id: "4", label: "Booking", path: "/booking" },
  { id: "5", label: "Food Menu", path: "/food-menu" },
  { id: "6", label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-3 border-b shadow px-4 lg:px-8">
      <Image src="/pg.png" height={160} width={120} alt="logo" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`transition duration-200 ${pathname === item.path ? "text-[#13540c] font-semibold" : "text-black"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Icon */}
      <Menu
        size={24}
        className="lg:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Image src="/pg.png" height={160} width={120} alt="logo" />
            <X
              size={24}
              className="cursor-pointer bg-[#13540C] text-white rounded-full"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-6 text-5xl italic justify-center h-full">
            {data.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`transition duration-200 ${pathname === item.path ? "text-[#13540c] font-semibold" : "text-black"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
