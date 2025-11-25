import { Button } from "@/components/ui/button";
import Image from "next/image";
import services_1 from "/public/images/services_1.jpg";
import smiley_friends_phone from "/public/images/smiley_friends_phone.jpg";
import Bag from "@/lib/assets/illustrations/Bag.svg";
import UsersThree from "@/lib/assets/illustrations/UsersThree.svg";
import NewspaperClipping from "@/lib/assets/illustrations/NewspaperClipping.svg";
import PresentationChart from "@/lib/assets/illustrations/PresentationChart.svg";
import WorkforceModel from "@/lib/assets/illustrations/workforce_model.svg";
import SavvyAgents from "@/lib/assets/illustrations/savvy_agents.svg";
import { TCardDetail } from "@/lib/types";
import OurApproach from "@/components/our-approach/OurApproach";
import RolesWeOffer from "@/components/roles-we-offer/RolesWeOffer";
import OurClients from "@/components/our-clients/OurClients";

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
      <section>
        <h1>
          Scale Faster with <em>Trusted Outsourcing</em>
        </h1>
        <p>
          Delegate routine operations to a dependable partner and stay focused
          on growth.
        </p>

        <Button>Contact us</Button>

        <div>
          <div className="relative aspect-[16/9]">
            <Image
              src={services_1}
              alt="man delegating task 1"
              fill
              sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
              priority={false}
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3>OUR PROCESS</h3>
          <h2>How We Help You Build Your Ideal Team</h2>
        </div>

        {processes.map(({ image: Icon, title, description }, index) => (
          <div key={title}>
            <div>
              <Icon />
            </div>
            <div>
              <h2>0{index + 1}</h2>
            </div>

            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div>
          <h3>HOW WE EXCELL</h3>
          <h2>
            We provide more than roles—we deliver the service your business
            deserves
          </h2>
        </div>

        <div>
          {how_we_excell.map(({ image: Icon, description, title }) => (
            <div key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="relative aspect-[16/9]">
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
            />
          </div>
        </div>
      </section>
      <OurApproach />
      <RolesWeOffer />
      <OurClients />
    </article>
  );
}
