import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import QuoteForm from "../quote-form/QuoteForm";
import LinkedInLogo from "@/lib/assets/illustrations/linkedin.svg";
import InstagramLogo from "@/lib/assets/illustrations/instagram.svg";
import OncrestLogoWhite from "@/lib/assets/oncrest_logo_white.svg";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";

export default function Footer() {
  return (
    <footer>
      <div>
        <section>
          <div>
            <div>
              <div>
                <h3>GET PERSONALISED QUOTE</h3>
                <h2>Together we can do extraordinary things</h2>
              </div>
              <p>
                Our commitment is to learn your needs and deliver a customized
                staffing strategy that cultivates a friendly, dependable team
                for lasting success.
              </p>
            </div>

            <div>
              <div>
                <MailIcon /> <h5>hello@oncrest.com</h5>
              </div>
              <div>
                <MapPinIcon /> <h5>Accra, Ghana</h5>
              </div>
              <div>
                <PhoneIcon />{" "}
                <h5>
                  <a
                    href="tel:+234 000 0000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 000 0000
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section>
          <QuoteForm />
        </section>
      </div>

      <section>
        <div>
          <Image src={OncrestLogoWhite} alt="Oncrest Logo White" />
        </div>

        <div>
          <Link href={routes.home()}>Home</Link>
          <Link href={routes.services()}>Services</Link>
          <Link href={routes.aboutUs()}>About us</Link>
          <Link href={routes.contactUs()}>Contact us</Link>
        </div>

        <div>
          <h3>Follow us</h3>
          <div>
            <Image src={LinkedInLogo} alt="Linkedin Logo" />{" "}
            <Link href="https://www.linkedin.com/company/oncrestltd">
              Linkedin
            </Link>
          </div>
          <div>
            <Image src={InstagramLogo} alt="Instagram Logo" />{" "}
            <Link href={""}>Instagram</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
