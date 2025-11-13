import Image from "next/image";
import OncrestLogo from "@/lib/assets/oncrest_logo.svg";
import OncrestLogoWhite from "@/lib/assets/oncrest_logo_white.svg";
import { Button } from "../../ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import "./mobile-nav.css";
import { routes } from "@/lib/routes";

export default function MobileNav() {
  return (
    <article className="md:hidden">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <Link href={routes.home()} className="navigation__logo">
            <Image src={OncrestLogoWhite} alt="Oncrest Logo" />
          </Link>
          <ul className="navigation__list sm:max-w-xs">
            {NAV_ITEMS.map(({ link, title }) => (
              <li key={link} className="navigation__item">
                <a href={link} className="navigation__link">
                  {title}
                </a>
              </li>
            ))}
            <li className="mx-4">
              <Button className="bg-white text-primary-500 font-medium text-xl w-full py-8 px-2 rounded-full">
                Contact us
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  );
}
