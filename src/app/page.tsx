import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero_1 from "/public/images/hero_1.jpg";
import hero_2 from "/public/images/hero_2.jpg";
import WorkforceModel from "@/lib/assets/illustrations/workforce_model.svg";
import SavvyAgents from "@/lib/assets/illustrations/savvy_agents.svg";
import GrowthFreedom from "@/lib/assets/illustrations/growth_freedom.svg";
import NumberCircleFour from "@/lib/assets/illustrations/NumberCircleFour.svg";
import Coin from "@/lib/assets/illustrations/Coin.svg";
import Laptop from "@/lib/assets/illustrations/Laptop.svg";
import GlobeHemisphereWest from "@/lib/assets/illustrations/GlobeHemisphereWest.svg";
import { TCardDetail } from "@/lib/types";
import OurApproach from "@/components/our-approach/OurApproach";
import RolesWeOffer from "@/components/roles-we-offer/RolesWeOffer";
import OurClients from "@/components/our-clients/OurClients";
import { cn } from "@/lib/utils";

const strengths: TCardDetail[] = [
  {
    image: WorkforceModel,
    title: "Integrated Workforce Model",
    description: `Harness the power of people and technology together. We combine
            experienced professionals with cutting-edge AI tools to create a
            scalable workforce that adapts to your growth and delivers
            consistently impressive outcomes.`,
  },
  {
    image: SavvyAgents,
    title: "Culturally Savvy Agents",
    description: `Clear communication drives customer satisfaction. Our agents are not
            only fluent in English but also attuned to cultural nuances,
            ensuring every interaction feels natural, professional, and
            customer-centric.`,
  },
  {
    image: GrowthFreedom,
    title: "Operational Growth Freedom",
    description: `Focus on strategy and innovation while we manage the day-to-day
            staffing details. By taking care of recruitment, training, and
            ongoing support, we free your leadership team to concentrate on what
            matters most: driving your business forward.`,
  },
];

const value_propositions_1: TCardDetail[] = [
  {
    image: NumberCircleFour,
    title: "Big Four Expertise",
    description:
      "Our leadership comes from global firms, ensuring world-class practices.",
  },
  {
    image: Coin,
    title: "Cost Efficiency",
    description: "High-quality outsourcing at competitive rates.",
  },
];

const value_propositions_2: TCardDetail[] = [
  {
    image: GrowthFreedom,
    title: "Scalability",
    description: "Solutions for both SMEs and large organizations.",
  },
  {
    image: Laptop,
    title: "Technology-Driven",
    description: "Secure, cloud-based systems that enhance efficiency.",
  },
  {
    image: GlobeHemisphereWest,
    title: "Global & Local Perspective",
    description: "Deep knowledge of African markets with a global outlook.",
  },
];

export default function HomePage() {
  return (
    <article>
      <section className="center flex flex-col min-[920px]:flex-row min-[920px]:items-center gap-y-16 min-[920px]:gap-x-6 lg:gap-x-7 min-[920px]:pb-28">
        <div>
          <h1 className="font-semibold text-gray-400 text-[clamp(32px,4.5vw,63px)] leading-[120%]">
            Empowering Organizations with Trusted{" "}
            <em className="not-italic text-[#30927E]">Outsourced Solutions</em>
          </h1>

          <p className="font-medium text-gray-300 mt-7 lg:text-xl lg:leading-[30px] lg:max-w-[657px]">
            Oncrest delivers world-class accounting, IT, and data services —
            combining global standards with local expertise to help businesses
            achieve clarity, compliance, and sustainable growth
          </p>

          <Button className="mt-10">Contact us</Button>

          <div className="mt-8 min-[920px]:mt-16 lg:mt-32 flex justify-between sm:justify-normal sm:gap-x-14 gap-x-6">
            <div>
              <h2 className="font-semibold text-gray-400 text-xl lg:text-3xl">
                2x
              </h2>
              <h4 className="mt-2 font-medium text-gray-300 text-sm lg:text-base">
                Faster delivery
              </h4>
            </div>
            <div>
              <h2 className="font-semibold text-gray-400 text-xl lg:text-3xl">
                50%
              </h2>
              <h4 className="mt-2 font-medium text-gray-300 text-sm lg:text-base">
                Less bookkeeping
              </h4>
            </div>
            <div>
              <h2 className="font-semibold text-gray-400 text-xl lg:text-3xl">
                90%
              </h2>
              <h4 className="mt-2 font-medium text-gray-300 text-sm lg:text-base">
                Client satisfaction
              </h4>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pr-2 lg:pr-0">
            <div className="relative w-full h-[69vw] min-[920px]:size-[clamp(280px,40vw,500px)] rounded-t-[32.47px] min-[920px]:rounded-[32.47px] overflow-hidden">
              <Image
                src={hero_1}
                alt="man outsourcing task 1"
                fill
                sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
                priority={false}
                placeholder="blur"
                className="[transform:rotateY(180deg)_scaleX(1.8)_scaleY(1.2)_translateX(10%)]"
              />
            </div>
          </div>
          <div className="w-[163.29px] h-[155px] sm:size-[35vw] min-[920px]:size-[clamp(156px,20vw,226px)] rounded-[30px] border-4 border-white absolute -bottom-16 size-full min-[920px]:top-[clamp(10px,30%,215px)] -right-6 z-[2] overflow-hidden">
            <Image
              src={hero_2}
              alt="man outsourcing task 2"
              fill
              sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
              priority={false}
              placeholder="blur"
              className="scale-x-[1.55]"
            />
          </div>
        </div>
      </section>

      <section className="z-[3] relative bg-[#F1F7F6] -mx-4 px-4">
        <div className="center py-14 min-[920px]:py-28 lg:py-32">
          <div className="min-[920px]:text-center">
            <h3 className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base">
              OUR STRENGTH
            </h3>
            <h2 className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:leading-[120%] lg:max-w-[812px] lg:mx-auto">
              Empowering your limitless growth with Oncrest Outsourcing
            </h2>
          </div>

          <div className="mt-8 min-[920px]:mt-16 lg:mt-32 flex flex-col gap-4 min-[920px]:grid min-[920px]:grid-cols-3">
            {strengths.map(({ image: Icon, description, title }) => (
              <div key={title} className="bg-white p-6 rounded-2xl">
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
                <p className="mt-3 font-medium text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurApproach />

      <section className="z-[3] relative bg-[#F1F7F6] -mx-4 px-4">
        <div className="center py-14 min-[920px]:py-28 lg:py-32">
          <div className="min-[920px]:text-center">
            <h3 className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base">
              VALUE PROPOSITION
            </h3>
            <h2 className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl lg:max-w-[812px] lg:mx-auto">
              Why Oncrest?
            </h2>
          </div>

          <div className="mt-8 min-[920px]:mt-16 lg:mt-32 flex flex-col gap-4 min-[920px]:grid min-[920px]:grid-cols-2">
            {value_propositions_1.map(({ image: Icon, description, title }) => (
              <div key={title} className="bg-white p-6 rounded-2xl">
                <div className="size-14 flex justify-center items-center rounded-lg bg-[#F1F7F6]">
                  <Icon />
                </div>
                <h3 className="mt-8 font-semibold text-gray-400 text-xl lg:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 font-medium text-gray-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 min-[920px]:grid min-[920px]:grid-cols-3">
            {value_propositions_2.map(({ image: Icon, description, title }) => (
              <div key={title} className="bg-white p-6 rounded-2xl">
                <div
                  className={cn(
                    "size-14 flex justify-center items-center rounded-lg bg-[#F1F7F6]",
                    {
                      "[--growth-freedom-rect-bg:#F1F7F6] text-[#30927E]":
                        title.toLowerCase() === "scalability",
                    }
                  )}
                >
                  <Icon />
                </div>
                <h3 className="mt-8 font-semibold text-gray-400 text-xl lg:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 font-medium text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RolesWeOffer />
      <OurClients />
    </article>
  );
}
