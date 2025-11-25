import OncrestLogo from "@/lib/assets/oncrest_logo.svg";
import MobileNav from "./mobile-nav/MobileNav";

export default function Nav() {
  return (
    <article>
      <section className="flex center relative">
        <div className="my-7">
          <OncrestLogo />
        </div>
        {/* Mobile Nav */}
        <MobileNav />

        {/* Desktop Nav */}
      </section>
    </article>
  );
}
