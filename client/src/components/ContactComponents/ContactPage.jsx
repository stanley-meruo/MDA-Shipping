import CompanyMap from "./CompanyMap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <main className="grid pt-24 px-4 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        className="grid gap-2 my-6 md:mt-10 xmd:mb-12 lg:mb-14"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-[27px] tracking-wide font-bold font-mulish md:text-3xl xl:text-4xl">
          Contact us
        </h1>
        <h3 className="text-sm font-inter lg:text-base lg:pt-2">
          Get in touch with us if you need any information about our services
        </h3>
      </motion.div>
      <ContactForm />
      <CompanyMap />
    </main>
  );
};
export default ContactPage;
