import slipper_hub from "/public/images/slipper_hub.png";
import onda from "/public/images/onda.png";
import yaya from "/public/images/yaya.png";
import felix_motors from "/public/images/felix_motors.png";
import Image from "next/image";

const testimonialsList = [
  { image: onda },
  { image: felix_motors },
  { image: yaya },
  { image: slipper_hub },
];

export default function OurClients() {
  return (
    <section>
      <div>
        <h3>OUR CLIENTS</h3>
        <h2>Brands We&apos;ve Worked With</h2>
      </div>

      {testimonialsList.map(({ image }, index) => (
        <div key={image.src}>
          <div className="relative aspect-[16/9]">
            <Image
              src={image}
              alt={`Brand ${index + 1}`}
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
      ))}
    </section>
  );
}
