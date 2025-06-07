import { motion } from "motion/react";
import SectionIcons from "../SectionIcons";

const Plan = () => {
  return (
    <section className="py-10 px-5 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 lg:pb-18 xl:px-22 xxl:px-28">
      <h1 className="text-2xl font-bold font-mulish mb-2 tracking-wide sm:text-[27px] xl:text-[32px]">
        How it works
      </h1>

      <div className="py-8 grid xs:gap-4 sm:grid-cols-2 xmd:gap-x-20 lg:flex lg:justify-between lg:overflow-x-scroll lg:overflow-y-hidden lg:py-6 xl:gap-8">
        
          <SectionIcons
            number="1"
            icon="/delivery-courier.svg"
            title="Bid and buy a lot"
            content="There's a wide variety of auctions where bargains can be had at wholesale prices for buyers who know what they're doing. "
          />
        
          <SectionIcons
            number="2"
            icon="/delivery-truck.svg"
            title="Deliver your units from the auction to your yard"
            content="After bidding, the vehicle will be sent to our yard for storage unit departure."
          />
        
        
          <SectionIcons
            number="3"
            icon="/container.svg"
            title="Load your vehicles into a container"
            content=" At our loading facility your car is driven into the container and carefully positioned before all four wheels are safely chocked."
          />
        
        
          <SectionIcons
            number="4"
            icon="/packages.svg"
            title="Buy all the spare parts if necessary"
            content="We offer original spare parts and components for the different types of vehicles. "
          />
        
        
          <SectionIcons
            number="5"
            icon="/ship.svg"
            title="Ship the container to your place"
            content="Your car will arrive at the destination in the condition it was loaded in the container."
          />
        
      </div>
    </section>
  );
};
export default Plan;


