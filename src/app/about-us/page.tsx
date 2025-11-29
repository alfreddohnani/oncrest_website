"use client";

import Image from "next/image";
import group_afro from "/public/images/group_afro_americans.jpg";
import industrial_designers from "/public/images/industrial_designers.jpg";
import PersonArmsSpread from "@/lib/assets/illustrations/PersonArmsSpread.svg";
import ChartLineUp from "@/lib/assets/illustrations/ChartLineUp.svg";
import Atom from "@/lib/assets/illustrations/Atom.svg";
import Target from "@/lib/assets/illustrations/Target.svg";
import StarFour from "@/lib/assets/illustrations/StarFour.svg";
import { TCardDetail } from "@/lib/types";
import { motion } from "framer-motion";

const ourValues: TCardDetail[] = [
  {
    image: PersonArmsSpread,
    title: "Integrity",
    description: "We act with transparency and professionalism in everything.",
  },
  {
    image: ChartLineUp,
    title: "Excellence",
    description: "We hold ourselves to the highest global standards.",
  },
  {
    image: Atom,
    title: "Innovation",
    description: "We leverage technology to improve efficiency and outcomes.",
  },
  {
    image: Target,
    title: "Client Focus",
    description: "We tailor solutions to meet unique business needs.",
  },
];

export default function AboutUsPage() {
  return (
    <article>
      <section className="px-4 py-14 bg-primary-700 min-[920px]:py-28 lg:py-32">
        <div className="center">
          <div className="w-fit relative mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold text-[clamp(32px,4.5vw,64px)] leading-[120%] md:font-medium text-white text-center whitespace-nowrap"
            >
              Lets change
              <br />
              finance <em className="font-editorial"> outsourcing</em> <br />
              for the better
            </motion.h1>
            <div className="absolute left-0 top-3 ">
              <StarFour />
            </div>
            <div className="absolute right-0">
              <StarFour />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="center py-14 min-[920px]:py-28 lg:py-32 flex flex-col min-[920px]:grid min-[920px]:grid-cols-2 gap-6 min-[920px]:items-center">
          <div className="min-[920px]:max-w-[607px]">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base min-[920px]:border min-[920px]:border-[#30927E] min-[920px]:py-2 min-[920px]:px-3 min-[920px]:rounded-full w-fit"
            >
              WHO WE ARE
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:leading-[120%]"
            >
              About Oncrest
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-medium text-gray-300 mt-4"
            >
              Oncrest Ltd is a Ghana based professional services and outsourcing
              firm specializing in accounting & finance, IT solutions, and data
              entry services. Founded by experienced accountants and consultants
              with Big Four backgrounds, we bring together global expertise and
              deep local market knowledge to deliver solutions that are
              efficient, reliable, and tailored to each client’s needs.
            </motion.p>
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
            className="relative aspect-[16/9] lg:w-[515px] lg:h-[417px] lg:ml-auto lg:overflow-hidden"
          >
            <Image
              src={group_afro}
              alt="oncrest staff"
              fill
              sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
              priority={false}
              placeholder="blur"
              className="lg:[transform:scaleX(1.2)]"
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="center py-14 min-[920px]:py-28 lg:py-32 flex flex-col min-[920px]:grid min-[920px]:grid-cols-2 gap-6 min-[920px]:items-center">
          <div className="min-[920px]:max-w-[553px] min-[920px]:order-2 lg:ml-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base min-[920px]:border min-[920px]:border-[#30927E] min-[920px]:py-2 min-[920px]:px-3 min-[920px]:rounded-full w-fit"
            >
              OUR PURPOSE
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:leading-[120%]"
            >
              What drives us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-medium text-gray-300 mt-4"
            >
              To empower organizations with clarity, compliance, and confidence
              through innovative outsourced solutions that enhance
              decision-making and drive sustainable growth.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative aspect-[16/9] lg:w-[569px] lg:h-[417px] min-[920px]:order-1"
          >
            <Image
              src={industrial_designers}
              alt="oncrest staff"
              fill
              sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
              priority={false}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </section>
      <section className="z-[3] relative bg-[#F1F7F6] -mx-4 px-4">
        <div className="center py-14 min-[920px]:py-28 lg:py-32">
          <div className="min-[920px]:text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base min-[920px]:border min-[920px]:border-[#30927E] min-[920px]:py-2 min-[920px]:px-3 min-[920px]:rounded-full w-fit min-[920px]:mx-auto"
            >
              OUR VALUES
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:leading-[120%] lg:max-w-[812px] lg:mx-auto"
            >
              What we hold true
            </motion.h2>
          </div>

          <div className="mt-10 lg:mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 min-[920px]:items-center">
            {ourValues.map(({ image: Icon, title, description }, i) => (
              <motion.div
                key={String(i)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="flex gap-2.5">
                  <Icon />{" "}
                  <h4 className="font-semibold text-xl text-gray-400">
                    {title}
                  </h4>
                </div>
                <p className="mt-2.5 font-medium text-gray-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
