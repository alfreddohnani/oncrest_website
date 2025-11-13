import couple_working_from_home from "/public/images/couple_working_from_home.jpg";
import Image from "next/image";

export default function RolesWeOffer() {
  return (
    <section>
      <div>
        <h3>ROLES WE OFFER</h3>
        <h2>Here are some task we can help you do</h2>
      </div>
      <div>
        <h3>Accounting and Finance</h3>
        <p>Bookkeeping & Financial Reporting</p>
        <p>Payroll Processing</p>
        <p>Tax Compliance & Advisory</p>
        <p>Audit Support & Internal Controls</p>
        <p>Management Reporting</p>
      </div>

      <div>
        <h3>Data Entry</h3>
        <p>Item 3</p>
        <p>Item 3</p>
      </div>

      <div>
        <h3>IT and Technical Support</h3>
        <p>Item 1</p>
        <p>Item 2</p>
      </div>

      <div className="relative aspect-[16/9]">
        <Image
          src={couple_working_from_home}
          alt="Couple working from home"
          fill
          sizes="(max-width: 600px) 100vw,
                        (max-width: 1024px) 80vw,
                        (max-width: 1400px) 60vw,
                        1400px"
          priority={false}
          placeholder="blur"
        />
        <div className="absolute">
          <h3>Data Entry</h3>
          <p>
            Get the help you need with accurate data entry, including data
            input, data formatting and cleansing, data verification, and
            database management.
          </p>
        </div>
      </div>
    </section>
  );
}
