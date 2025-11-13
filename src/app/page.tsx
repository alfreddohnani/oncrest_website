import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero_1 from "/public/images/hero_1.jpg";
import hero_2 from "/public/images/hero_2.jpg";
import WorkforceModel from "@/lib/assets/illustrations/workforce_model.svg";
import SavvyAgents from "@/lib/assets/illustrations/savvy_agents.svg";
import GrowthFreedom from "@/lib/assets/illustrations/growth_freedom.svg";
import { TCardDetail } from "@/lib/types";
import OurApproach from "@/components/our-approach/OurApproach";
import RolesWeOffer from "@/components/roles-we-offer/RolesWeOffer";
import OurClients from "@/components/our-clients/OurClients";

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

export default function HomePage() {
  return (
    <article>
      <section className="center min-[920px]:flex min-[920px]:gap-x-6 lg:gap-x-16">
        <div className="">
          <h1 className="font-semibold text-gray-400 text-[clamp(32px,4.5vw,54px)]">
            Empowering Organizations with Trusted{" "}
            <em className="not-italic text-[#30927E]">Outsourced Solutions</em>
          </h1>

          <p className="font-medium text-gray-300 mt-7 lg:text-xl">
            Oncrest delivers world-class accounting, IT, and data services —
            combining global standards with local expertise to help businesses
            achieve clarity, compliance, and sustainable growth
          </p>

          <Button className="bg-primary-500 text-white font-semibold text-lg rounded-full px-5 py-6 mt-10">
            Contact us
          </Button>

          <div className="mt-8 lg:mt-32 flex justify-between sm:justify-normal sm:gap-x-14 gap-x-6">
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

        <div className="mt-16 relative lg:mt-24">
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
                className="[transform:rotateY(180deg)_scale(1.3)_translateX(10%)]"
              />
            </div>
          </div>
          <div className="w-[163.29px] h-[155px] sm:size-[35vw] min-[920px]:size-[clamp(156px,20vw,256px)] rounded-[30px] border-4 border-white absolute -bottom-20 size-full min-[920px]:top-[clamp(10px,30%,180px)] -right-6 z-[2] overflow-hidden">
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

      <section className="z-[3] relative bg-[#F1F7F6] -mx-4 px-4 ">
        <div className="center">
          <div className="pt-14">
            <h3 className="font-semibold text-sm text-[#30927E] tracking-widest">
              OUR STRENGTH
            </h3>
            <h2 className="mt-4 font-semibold text-2xl text-gray-400">
              Empowering your limitless growth with Oncrest Outsourcing
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {strengths.map(({ image, description, title }) => (
              <div key={image.src} className="bg-white p-6 rounded-2xl">
                <Image src={image} alt={title} />
                <h3 className="mt-8 font-semibold text-gray-400 text-xl">
                  {title}
                </h3>
                <p className="mt-3 font-medium text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurApproach />
      <RolesWeOffer />
      <OurClients />
    </article>
  );
}
