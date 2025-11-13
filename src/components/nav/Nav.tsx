import Image from "next/image";
import OncrestLogo from "@/lib/assets/oncrest_logo.svg";
import { Button } from "../ui/button";
import { routes } from "@/lib/routes";
import MobileNav from "./mobile-nav/MobileNav";

export default function Nav() {
  return (
    <article>
      <section className="flex center relative">
        <div className="my-7">
          <Image src={OncrestLogo} alt="Oncrest Logo" />
        </div>
        {/* Mobile Nav */}
        <MobileNav />

        {/* Desktop Nav */}
      </section>
    </article>
  );
}
