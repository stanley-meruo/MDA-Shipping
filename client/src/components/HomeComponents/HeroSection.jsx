import { motion } from "motion/react";
import Main from "/src/assets/main.webp";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-26 grid xs:pt-28 md:flex md:flex-row md:items-center md:h-[400px] lg:h-[550px] lg:pt-0">
        <motion.div
          className="grid gap-4 px-5 xs:px-6 sm:px-10 md:px-12 md:h-[250px] xmd:pl-14 lg:pl-16 xl:pl-22 xxl:pl-28"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className=" text-2xl font-semibold font-mulish w-[300px] xs:w-[400px] sm:text-3xl sm:w-[450px] md:w-[450px] xmd:text-4xl xmd:w-[550px] lg:text-[42px] lg:w-[650px] xl:text-5xl xl:leading-14 xl:w-[750px] xxl:text-[56px] xxl:leading-15 xxl:w-[900px]">
            We are an American based company professionally provide
            <span className="text-babyblue"> auto auction participating</span>
          </h1>
          <p className="text-sm font-inter sm:pr-24 md:w-[450px] md:pt-1 lg:text-base lg:pr-12 xl:pt-4">
            We ship cars, motorcycles, boats, special machinery in containers
            from the USA to all over the world.
          </p>
          <div className="mt-2 xs:mt-4 xs:z-10 xs:w-2/4 md:w-[40%] lg:mt-6 lg:w-[30%] xl:mt-8">
            <Button
              onClick={() => navigate("/contact")}
              title="CONTACT US"
              className="bg-babyblue py-4 w-full text-sm text-white rounded-lg font-semibold font-inter hover:bg-gray-100 hover:text-gray-700 hover:scale-90 duration-300 transition-transform cursor-pointer lg:py-5"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full xs:-mt-10 sm:-mt-16 md:-ml-60 lg:-ml-96 xl:-ml-[400px] xxl:-ml-[500px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={Main}
            className="w-full md:translate-y-20 lg:translate-y-32 xxl:translate-y-44"
          />
        </motion.div>
      </div>
    </>
  );
};
export default HeroSection;
