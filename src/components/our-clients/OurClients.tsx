import slipper_hub from "/public/images/slipper_hub.svg";
import onda from "/public/images/onda.svg";
import yaya from "/public/images/yaya.svg";
import felix_motors from "/public/images/felix_motors.svg";

const testimonialsList = [
  { image: onda },
  { image: felix_motors },
  { image: yaya },
  { image: slipper_hub },
];

export default function OurClients() {
  return (
    <section className="bg-[#F1F7F6] -mx-4 px-4">
      <div className="center py-14 min-[920px]:py-28 lg:py-32 min-[920px]:[background-image:url('/images/clients_bg.svg')] min-[920px]:bg-no-repeat min-[920px]:bg-contain min-[920px]:bg-center">
        <div className="text-center">
          <h3 className="font-semibold text-sm text-[#30927E] tracking-widest lg:text-base">
            OUR CLIENTS
          </h3>
          <h2 className="mt-4 font-semibold text-2xl text-gray-400 min-[920px]:text-3xl lg:text-5xl">
            Brands We&apos;ve Worked With
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-28 items-center min-[920px]:flex-row min-[920px]:justify-center xl:gap-56">
          {testimonialsList.map(({ image: Icon }, index) => (
            <div key={String(index)} className="xl:scale-125">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
