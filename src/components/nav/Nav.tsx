import OncrestLogo from "@/lib/assets/oncrest_logo.svg";
import MobileNav from "./mobile-nav/MobileNav";
import { Button } from "@/components/ui/button";
import DesktopNav from "./DesktopNav";

export default function Nav() {
  return (
    <article className="min-[920px]:border-b min-[920px]:border-[#F5F5F5] min-[920px]:mb-14">
      <section className="flex justify-between center relative items-center">
        <div className="my-7">
          <OncrestLogo />
        </div>
        {/* Mobile Nav */}
        <MobileNav />

        {/* Desktop Nav */}
        <DesktopNav />

        <Button size="sm" className="hidden min-[920px]:block">
          Contact us
        </Button>
      </section>
    </article>
  );
}
