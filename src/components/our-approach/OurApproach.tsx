import { TCardDetail } from "@/lib/types";
import talent_searches from "/public/images/talent_searches.jpg";
import staff_management from "/public/images/staff_management.jpg";
import performance_reviews from "/public/images/performance_reviews.jpg";
import couple_working_from_home from "/public/images/couple_working_from_home.jpg";
import Image from "next/image";

const approach_section_details_list: TCardDetail[] = [
  {
    image: couple_working_from_home,
    title: "Talent searches",
    description:
      "This is a placeholder text for the particular section of the website design",
  },
  {
    image: talent_searches,
    title: "Customised staffing plans",
    description:
      "This is a placeholder text for the particular section of the website design",
  },
  {
    image: staff_management,
    title: "Staff management",
    description:
      "This is a placeholder text for the particular section of the website design",
  },
  {
    image: performance_reviews,
    title: "Performance reviews",
    description:
      "This is a placeholder text for the particular section of the website design",
  },
];

export default function OurApproach() {
  return (
    <article>
      <div>
        <h3>OUR APPROACH</h3>
        <h2>Complete outsourcing journey</h2>
      </div>

      <div>
        {approach_section_details_list.map(({ image, title, description }) => (
          <div key={image.src}>
            <div className="relative aspect-[16/9]">
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
              />
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
