import Image from "next/image";
import group_afro from "/public/images/group_afro_americans.jpg";
import industrial_designers from "/public/images/industrial_designers.jpg";
import PersonArmsSpread from "@/lib/assets/illustrations/PersonArmsSpread.svg";
import ChartLineUp from "@/lib/assets/illustrations/ChartLineUp.svg";
import Atom from "@/lib/assets/illustrations/Atom.svg";
import Target from "@/lib/assets/illustrations/Target.svg";
import { TCardDetail } from "@/lib/types";

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
      <section>
        <h1>
          Lets change finance <span>outsourcing</span> for the better
        </h1>
      </section>
      <section>
        <div>
          <div>
            <h3>WHO WE ARE</h3>
            <h2>About Oncrest</h2>
          </div>
          <p>
            Oncrest Ltd is a Ghana based professional services and outsourcing
            firm specializing in accounting & finance, IT solutions, and data
            entry services. Founded by experienced accountants and consultants
            with Big Four backgrounds, we bring together global expertise and
            deep local market knowledge to deliver solutions that are efficient,
            reliable, and tailored to each client’s needs.
          </p>
        </div>
        <div className="relative aspect-[16/9]">
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
          />
        </div>
      </section>

      <section>
        <div>
          <div>
            <h3>OUR PURPOSE</h3>
            <h2>What drives us</h2>
          </div>
          <p>
            To empower organizations with clarity, compliance, and confidence
            through innovative outsourced solutions that enhance decision-making
            and drive sustainable growth.
          </p>
        </div>
        <div className="relative aspect-[16/9]">
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
        </div>
      </section>
      <section>
        <div>
          <h3>OUR VALUES</h3>
          <h2>What we hold true</h2>
        </div>
        <div>
          {ourValues.map(({ image: icon, title, description }, i) => (
            <div key={String(i)}>
              <div>
                <Image src={icon} alt={title} /> <h4>title</h4>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
