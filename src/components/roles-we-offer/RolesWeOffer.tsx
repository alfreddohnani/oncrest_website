"use client";
import couple_working_from_home from "/public/images/couple_working_from_home.jpg";
import data_entry_image from "/public/images/pexels-gustavo-fring-6285079.jpg";
import it_support_image from "/public/images/pexels-divinetechygirl-1181472.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const roles = [
  {
    title: "Accounting and Finance",
    description: `Get the help you need with accurate data entry, including data
              input, data formatting and cleansing, data verification, and
              database management.`,
    image: couple_working_from_home,
  },
  {
    title: "Data Entry",
    description: `We handle your data with care — entering, cleaning, and organizing it for accuracy and clarity.
We correct errors, remove duplicates, and format everything exactly how you need it.
You receive dependable, ready-to-use files and databases.`,
    image: data_entry_image,
  },
  {
    title: "IT and Technical Support",
    description: `We provide reliable IT and technical support to keep your systems running smoothly.
We troubleshoot issues, set up software, and resolve technical problems quickly.
You get stable, secure, and efficient technology you can depend on.`,
    image: it_support_image,
  },
];

export default function RolesWeOffer() {
  const [hoveredRoleIndex, setHoveredRoleIndex] = useState(0);
  return (
    <section className="center py-14 min-[920px]:py-28 lg:py-32 min-[920px]:flex min-[920px]:justify-between lg:gap-x-8">
      <div className="min-[920px]:max-w-[243px] lg:max-w-[486px]">
        <div className="lg:max-w-[344px]">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base"
          >
            ROLES WE OFFER
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 font-semibold text-2xl min-[920px]:text-3xl lg:text-5xl lg:leading-[56px] text-gray-400"
          >
            Here are some tasks we can help you do
          </motion.h2>
        </div>

        <div className="lg:mt-8">
          {roles.map(({ title }, index) => (
            <div
              key={title}
              className="py-8 border-b border-gray-50 space-y-2 transition-all delay-300 cursor-pointer"
              onMouseOver={() => {
                setHoveredRoleIndex(index);
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: (index + 1) * 0.3,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={cn(
                  "font-semibold text-xl lg:text-2xl text-gray-200",
                  {
                    "text-gray-400": index === hoveredRoleIndex,
                  }
                )}
              >
                {title}
              </motion.h3>
            </div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: (roles.length + 1) * 0.3,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="py-8 space-y-3"
          >
            <p className="font-semibold text-xl lg:text-2xl text-gray-400 ">
              Can&apos;t find the solution you&apos;re looking for?
            </p>
            <p>
              We provide a lot more: we&apos;ll be happy to help when you get in
              touch.
            </p>
            <div>
              <Link href="#footer">
                <Button>Get in touch</Button>
              </Link>
            </div>
          </motion.div>
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
        className="relative min-h-64 mt-12 sm:h-[400px] min-[920px]:size-[500px] lg:size-[702px] rounded-2xl lg:overflow-hidden"
      >
        <Image
          src={roles[hoveredRoleIndex]?.image}
          alt={roles[hoveredRoleIndex]?.title}
          fill
          sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
          priority={false}
          placeholder="blur"
          className="rounded-[inherit] lg:scale-x-150 lg:-translate-x-44 "
        />
        <div className="absolute flex h-full p-2 min-[920px]:p-6 bg-gradient-to-b from-gray-500/0 to-gray-500/100 text-white rounded-[inherit]">
          <div className="mt-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold min-[920px]:text-2xl lg:text-[32px]"
            >
              {roles[hoveredRoleIndex]?.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-medium min-[920px]:text-lg lg:text-xl mt-2"
            >
              {roles[hoveredRoleIndex]?.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
