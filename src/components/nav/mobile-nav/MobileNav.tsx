"use client";
import OncrestLogoWhite from "@/lib/assets/oncrest_logo_white.svg";
import { Button } from "../../ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import "./mobile-nav.css";
import { routes } from "@/lib/routes";
import { useRef } from "react";

export default function MobileNav() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <article className="min-[920px]:hidden">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          ref={ref}
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <Link href={routes.home()} className="navigation__logo">
            <OncrestLogoWhite />
          </Link>
          <ul className="navigation__list sm:max-w-xs">
            {NAV_ITEMS.map(({ link, title }) => (
              <li key={link} className="navigation__item">
                <Link
                  href={link}
                  onClick={() => {
                    if (ref.current) ref.current.checked = false;
                  }}
                  className="navigation__link"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li className="mx-4">
              <Link
                href="#footer"
                onClick={() => {
                  if (ref.current) ref.current.checked = false;
                }}
              >
                <Button className="bg-white text-primary-500 w-full py-8 px-2">
                  Contact us
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  );
}
