"use client";

import { TCardDetail } from "@/lib/types";
import talent_searches from "/public/images/talent_searches.jpg";
import staff_management from "/public/images/staff_management.jpg";
import performance_reviews from "/public/images/performance_reviews.jpg";
import couple_working_from_home from "/public/images/couple_working_from_home.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const approach_section_details_list: TCardDetail[] = [
  {
    image: couple_working_from_home,
    title: "Talent searches",
    description:
      "We conduct targeted talent acquisition using proven recruitment methodologies to identify qualified professionals aligned with our clients’ technical, operational, and cultural requirements. Our process emphasizes quality, reliability, and long-term value creation.",
  },
  {
    image: talent_searches,
    title: "Customised staffing plans",
    description:
      "We develop tailored staffing strategies designed to support clients’ operational objectives, workforce planning, and scalability requirements. Our solutions are flexible, cost-effective, and aligned with evolving business and regulatory needs.",
  },
  {
    image: staff_management,
    title: "Staff management",
    description:
      "We oversee all aspects of workforce administration, including onboarding, HR coordination, compliance, and workforce reporting. This ensures seamless operations, risk mitigation, and adherence to established governance standards.",
  },
  {
    image: performance_reviews,
    title: "Performance reviews",
    description:
      "We implement structured performance management frameworks supported by clear KPIs and regular reporting. Our review processes promote accountability, continuous improvement, and sustained service excellence.",
  },
];

export default function OurApproach() {
  return (
    <article className="px-4 py-14 bg-primary-700 min-[920px]:py-28 lg:py-32 [background-image:url('/images/approach_bg.svg')] bg-contain bg-top bg-no-repeat">
      <div className="center">
        <div className="min-[920px]:text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-semibold text-sm tracking-widest text-gray-100 lg:text-base"
          >
            OUR APPROACH
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 font-semibold text-2xl text-white min-[920px]:text-3xl lg:text-5xl"
          >
            Complete outsourcing journey
          </motion.h2>
        </div>

        <div className="mt-8 min-[920px]:mt-16 lg:mt-32 flex flex-col gap-4 sm:grid sm:grid-cols-2 min-[920px]:grid-cols-3 lg:grid-cols-4">
          {approach_section_details_list.map(
            ({ image, title, description }, index) => (
              <motion.div
                key={image.src}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="bg-white rounded-3xl p-4"
              >
                <div className="relative min-h-48">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
                    priority={false}
                    placeholder="blur"
                    className="rounded-t-2xl"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-xl text-gray-400">
                    {title}
                  </h3>
                  <p className="mt-4 font-medium text-gray-300">
                    {description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </article>
  );
}
