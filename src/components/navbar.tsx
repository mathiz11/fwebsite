import Link from "next/link";
import { useEffect, useState } from "react";

const SCROLL_POSITION_LIMIT = 100;

export function Navbar() {
  const [showDarkNavbar, setShowDarkNavbar] = useState<boolean>(false);

  useEffect(() => {
    function updatePosition() {
      console.log(window.pageYOffset)
      if (showDarkNavbar && window.pageYOffset < SCROLL_POSITION_LIMIT) {
        setShowDarkNavbar(false)
      }
      if (!showDarkNavbar && window.pageYOffset >= SCROLL_POSITION_LIMIT) {
        setShowDarkNavbar(true)
      }
    }

    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition)
  })

  return (
    <div className={`flex fixed items-center w-full justify-center gap-7 text-white h-24 z-10 ${showDarkNavbar ? "bg-black" : "bg-transparent"}`}>
      <div className="flex-1 flex justify-end gap-5 text-xl">
        <Link href="/">À propos</Link>
        <Link href="/">Ostéopathie animale</Link>
        <Link href="/">Prestations</Link>
      </div>
      <div className="w-16">
        <img
          src="/images/logo-navbar.png"
          width={64}
          height={64}
          alt="Logo"
          className="mx-auto"
        />
      </div>
      <div className="flex-1 flex justify-start gap-5 text-xl">
        <Link href="/">Témoignages</Link>
        <Link href="/">Parternaires</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
}
