import OncrestLogo from "@/lib/assets/oncrest_logo.svg";
import MobileNav from "./mobile-nav/MobileNav";
import { Button } from "@/components/ui/button";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import { routes } from "@/lib/routes";

export default function Nav() {
  return (
    <article className="min-[920px]:border-b min-[920px]:border-[#F5F5F5] min-[920px]:mb-14">
      <section className="flex justify-between center relative items-center">
        <Link href={routes.home()} className="my-7">
          <OncrestLogo />
        </Link>
        {/* Mobile Nav */}
        <MobileNav />

        {/* Desktop Nav */}
        <DesktopNav />

        <Link href="#footer">
          <Button size="sm" className="hidden min-[920px]:block">
            Contact us
          </Button>
        </Link>
      </section>
    </article>
  );
}
