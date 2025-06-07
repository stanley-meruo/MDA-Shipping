import { motion } from "motion/react";

const SectionIcons = ({ content, title, icon, number }) => {
  return (
    <>
      <motion.div
        className="flex justify-between mb-6 gap-x-4 xs:gap-x-6 sm:gap-x-4 md:gap-x-4 lg:grid lg:gap-y-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="relative">
          <span className="grid border-2 border-babyblue rounded-full h-16 min-w-16 md:h-20 md:min-w-20 lg:min-w-24 lg:h-24 lg:w-12 ">
            <img src={icon} className="w-8 m-auto md:w-10 lg:w-12" />
          </span>
          <span className="absolute left-12 top-10 grid p-1 bg-darkblue text-white rounded-full size-6 md:top-14 md:left-14 lg:size-7 lg:top-18 lg:left-16">
            <span className="m-auto text-xs font-inter">
              {number}
            </span>
          </span>
        </div>

        <div className="">
          <p className="font-medium text-lg mb-3 w-48 font-mulish leading-6 xs:w-52 sm:w-44 md:w-48 xmd:w-60 lg:h-14">
            {title}
          </p>
          <p className="font-inter text-sm leading-5 md:text-base text-gray-600 xs:pr-8 sm:w-54 md:w-64 xmd:w-72 lg:pr-4">
            {content}
          </p>
        </div>
      </motion.div>
    </>
  );
};
export default SectionIcons;
