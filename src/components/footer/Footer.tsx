"use client";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import QuoteForm from "../quote-form/QuoteForm";
import LinkedInLogo from "@/lib/assets/illustrations/linkedin.svg";
import InstagramLogo from "@/lib/assets/illustrations/instagram.svg";
import OncrestGray from "@/lib/assets/illustrations/oncrest_gray.svg";
import OncrestLogoWhite from "@/lib/assets/oncrest_logo_white.svg";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="text-white -mx-4 px-4 bg-[#001E18] [background-image:url('/images/bg_ellipse.svg')] [background-position:-100px_430px] min-[920px]:[background-position:25vw_13%] [background-size:710px_1080px] min-[920px]:[background-size:100%_65%] bg-no-repeat"
    >
      <section className="center py-14 min-[920px]:py-28 lg:py-32">
        <div className="min-[920px]:flex min-[920px]:gap-10 min-[920px]:justify-between">
          <div className="min-[920px]:flex-1 min-[920px]:max-w-[397px]">
            <div>
              <div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="font-semibold text-sm text-[#54C8B0] tracking-widest lg:text-base"
                  >
                    GET PERSONALISED QUOTE
                  </motion.h3>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-4 font-semibold text-2xl min-[920px]:text-3xl lg:text-5xl"
                  >
                    Together we can do extraordinary things
                  </motion.h2>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.75 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-4 font-medium"
                >
                  Our commitment is to learn your needs and deliver a customized
                  staffing strategy that cultivates a friendly, dependable team
                  for lasting success.
                </motion.p>
              </div>

              <div className="mt-10 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex gap-x-3"
                >
                  <MailIcon />{" "}
                  <h5 className="underline font-medium">hello@oncrest.com</h5>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.85 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex gap-x-3"
                >
                  <MapPinIcon /> <h5 className="font-medium">Accra, Ghana</h5>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex gap-x-3"
                >
                  <PhoneIcon />{" "}
                  <h5 className="font-medium">
                    <a
                      href="tel:+234 000 0000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +234 000 0000
                    </a>
                  </h5>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-8 min-[920px]:max-w-[581px] min-[920px]:flex-1"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#141414]">
        <div className="center py-14 min-[920px]:py-12 lg:py-16 -mx-4 px-4 flex flex-col gap-y-8 min-[920px]:gap-y-[120px]">
          <div className="flex flex-col gap-y-8 min-[920px]:flex-row min-[920px]:justify-between">
            {" "}
            <div>
              <OncrestLogoWhite />
            </div>
            <div className="flex flex-col gap-y-4 text-gray-300 font-medium">
              <Link href={routes.home()}>Home</Link>
              <Link href={routes.services()}>Services</Link>
              <Link href={routes.aboutUs()}>About us</Link>
              <Link href="#footer">Contact us</Link>
            </div>
            <div className="flex flex-col gap-y-4 text-gray-300 font-medium">
              <h3>Follow us</h3>
              <div className="flex items-center gap-2">
                <LinkedInLogo />{" "}
                <Link href="https://www.linkedin.com/company/oncrestltd">
                  Linkedin
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <InstagramLogo /> <Link href={""}>Instagram</Link>
              </div>
            </div>
          </div>

          <div className="text-gray-400 font-medium text-sm">
            <div className="border-b-[0.29px] border-gray-400/40">
              <OncrestGray />
            </div>
            <div className="mt-4 min-[920px]:mt-10 flex flex-col gap-y-4 min-[920px]:flex-row min-[920px]:justify-between">
              <p>@2025 Oncrest - All rights reserved</p>
              <p>Privacy Policy - Terms of Service - Legal</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
