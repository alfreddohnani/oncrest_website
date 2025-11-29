"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import services_1 from "/public/images/services_1.jpg";
import smiley_friends_phone from "/public/images/smiley_friends_phone.jpg";
import black_girls_city from "/public/images/black-girls-city.jpg";
import Bag from "@/lib/assets/illustrations/Bag.svg";
import UsersThree from "@/lib/assets/illustrations/UsersThree.svg";
import NewspaperClipping from "@/lib/assets/illustrations/NewspaperClipping.svg";
import PresentationChart from "@/lib/assets/illustrations/PresentationChart.svg";
import WorkforceModel from "@/lib/assets/illustrations/workforce_model.svg";
import Suitcase from "@/lib/assets/illustrations/Suitcase.svg";
import SavvyAgents from "@/lib/assets/illustrations/savvy_agents.svg";
import RigthSArrow from "@/lib/assets/illustrations/right_s_arrow.svg";
import LeftSArrow from "@/lib/assets/illustrations/left_s_arrow.svg";
import { TCardDetail } from "@/lib/types";
import OurApproach from "@/components/our-approach/OurApproach";
import RolesWeOffer from "@/components/roles-we-offer/RolesWeOffer";
import OurClients from "@/components/our-clients/OurClients";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const processes: TCardDetail[] = [
  {
    image: Bag,
    title: "Certified Professionals",
    description:
      "Enhance your outsourcing strategy by combining top-tier human expertise with advanced AI technology. Our integrated workforce approach delivers scalable solutions and exceptional outcomes.",
  },
  {
    image: UsersThree,
    title: "Experienced Team",
    description:
      "Leverage our expertise in employee onboarding, skill development, team management, and productivity enhancement across various business sectors and roles.",
  },
  {
    image: NewspaperClipping,
    title: "Meeting Quality Standards",
    description:
      "Every potential hire goes through an initial evaluation to determine their compatibility with Oncrest’s values and our elevated expectations.",
  },
  {
    image: PresentationChart,
    title: "Tailored to your Requirements",
    description:
      "Following this, all candidates participate in a secondary evaluation to gauge their alignment with your specific organisational needs and workplace culture.",
  },
];

const how_we_excell: TCardDetail[] = [
  {
    image: WorkforceModel,
    title: "Dedicated Account Manager",
    description:
      "To some outsourcing services, you’re just another client sharing their pool of resources. But at Oncrest, you’ll have a dedicated Account Manager whose job is to focus on your business, from recruitment through implementation.",
  },
  {
    image: SavvyAgents,
    title: "Dedicated Staff",
    description:
      "Your team is yours alone. Some companies let their staff work on multiple accounts. But we feel your staff should be trained to work specifically on your business and nothing else. Sometimes sharing isn’t a virtue.",
  },
];

export default function ServicesPage() {
  return (
    <article>
      <section className="center flex flex-col min-[920px]:flex-row min-[920px]:items-center gap-y-[69px] min-[920px]:gap-x-6 lg:gap-x-7 mb-6 min-[920px]:pb-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-semibold text-gray-400 text-[clamp(32px,4.5vw,71px)] leading-[120%]"
          >
            Scale Faster with{" "}
            <em className="not-italic text-[#30927E] whitespace-nowrap">
              Trusted Outsourcing
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-medium text-gray-300 mt-7 lg:text-xl lg:leading-[30px] lg:max-w-[645px]"
          >
            Delegate routine operations to a dependable partner and stay focused
            on growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="#footer">
              <Button className="mt-10">Contact us</Button>
            </Link>
          </motion.div>
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
          className="relative"
        >
          <div className="pl-[60px] lg:pr-0">
            <div className="relative w-full h-[70vw] min-[920px]:size-[clamp(280px,40vw,518px)] rounded-[24.32px] min-[920px]:rounded-[42.01px] overflow-hidden">
              <Image
                src={services_1}
                alt="man outsourcing task 2"
                fill
                sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
                priority={false}
                placeholder="blur"
                className="[transform:rotateY(180deg)_scaleX(1.4)_translateX(14%)] w-full"
              />
            </div>
          </div>
          <div className="p-1.5 border-[0.69px] border-[#EDEDED] shadow-lg rounded-xl flex items-center gap-x-2 w-fit absolute top-3 left-0 bg-white">
            <div className="size-12 flex justify-center items-center rounded-lg bg-[#F1F7F6] border-[0.32px] border-[#196F5D1A]">
              <Suitcase />
            </div>
            <h3 className="font-medium text-gray-400 text-sm w-44">
              Trusted finance solutions for your business
            </h3>
          </div>
          <div className="p-1.5 border-[0.69px] border-[#EDEDED] shadow-lg rounded-xl flex items-center gap-x-2 w-fit absolute -bottom-3 -right-3 bg-white">
            <Image
              src={black_girls_city}
              alt="women outsourcing work"
              className="size-8 rounded-full border-[1.39px] border-[#24A148]"
            />
            <h3 className="font-medium text-gray-400 text-sm w-44">
              Experts in scalable finance operations
            </h3>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-14 bg-primary-800 min-[920px]:py-28 lg:py-32">
        <div className="center">
          <div className="md:text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold text-sm tracking-widest text-gray-100 lg:text-base"
            >
              OUR PROCESS
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 font-semibold text-2xl text-white md:text-3xl lg:text-5xl"
            >
              How We Help You Build Your Ideal Team
            </motion.h2>
          </div>

          <div className="mt-8 md:mt-20 md:max-w-[635px] md:mx-auto">
            {processes.map(({ image: Icon, title, description }, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                  transition={{
                    duration: 0.6,
                    delay: (index + 1) * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={cn(
                      "bg-[#015B48] p-5 rounded-xl flex flex-col gap-y-3.5 transition-all duration-300 hover:bg-white group md:max-w-[403px]",
                      {
                        "ml-auto": isEven,
                      }
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <div className="p-2.5 bg-[#106553] rounded-md group-hover:bg-[#F1F7F6]  [--process-ilstrxn-fill-bg:#ffffff33] text-white group-hover:[--process-ilstrxn-fill-bg:#30927e33] group-hover:text-[#30927E]">
                        <Icon />
                      </div>
                      <h2 className="text-[52px] font-medium text-white/10 group-hover:text-gray-400/10">
                        0{index + 1}
                      </h2>
                    </div>

                    <div className="text-white group-hover:text-gray-400 space-y-2.5">
                      <h3 className="font-semibold text-xl">{title}</h3>
                      <p className="font-medium text-sm">{description}</p>
                    </div>
                  </div>

                  {index !== processes.length - 1 && (
                    <div className="flex justify-center my-4">
                      {isEven ? <LeftSArrow /> : <RigthSArrow />}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
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
              className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base"
            >
              HOW WE EXCELL
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:leading-[120%] lg:max-w-[1012px] lg:mx-auto"
            >
              We provide more than roles—we deliver the service your business
              deserves
            </motion.h2>
          </div>

          <div className="flex flex-col gap-14 min-[920px]:flex-row bg-white p-4 md:p-8 rounded-2xl mt-8 md:mt-16 lg:mt-32 ">
            <div className="flex flex-col gap-14">
              {how_we_excell.map(
                ({ image: Icon, description, title }, index) => (
                  <motion.div
                    key={title}
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
                  >
                    <div
                      className={cn({
                        "[--growth-freedom-rect-bg:#A3D4B3] text-green-500":
                          title.toLowerCase() === "operational growth freedom",
                      })}
                    >
                      <Icon />
                    </div>
                    <h3 className="mt-8 font-semibold text-gray-400 text-xl lg:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 font-medium text-gray-300">
                      {description}
                    </p>
                  </motion.div>
                )
              )}
            </div>

            <div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="relative w-full h-[134vw] min-[920px]:w-[327px] min-[920px]:h-[560px] overflow-hidden rounded-lg xl:w-[596px] xl:h-[560px]"
              >
                <Image
                  src={smiley_friends_phone}
                  alt="Dedicated staff"
                  fill
                  sizes="(max-width: 600px) 100vw,
                                    (max-width: 1024px) 80vw,
                                    (max-width: 1400px) 60vw,
                                    1400px"
                  priority={false}
                  placeholder="blur"
                  className="rounded-lg [transform:scaleX(2.5)] xl:[transform:scaleX(1.35)] h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <OurApproach />
      <RolesWeOffer />
      <OurClients />
    </article>
  );
}
