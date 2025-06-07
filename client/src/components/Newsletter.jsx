import { useState } from "react";
import  {motion} from "motion/react";
import Button from "./Button";
import { FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner3 } from "react-icons/im";
import CarContainer0 from "../assets/car-container-mobile.webp";
import CarContainer1 from "../assets/car-container-desktop.webp";

const Newsletter = () => {
    const [loading, setLoading] = useState(false);
    

    const handleSubscribe = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setLoading(true);

      // Simulate API delay
      setTimeout(() => {
        toast.success("Subscribed successfully!");
        setLoading(false);
        e.target.reset();
      }, 1500);
    };
      

  return (
    <section className="bg-babyblue text-white rounded-t-3xl -mb-4 py-10 px-5 xs:-mb-6 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
      <section className="sm:flex sm:justify-between sm:gap-4 xmd:gap-0 lg:">
        <div className="sm:w-2/4 xmd:w-[75%] lg:w-2/4 lg:pt-4 xl:w-2/5 xl:pt-14">
          <div className="grid gap-2 mb-8 xmd:mb-12 lg:mb-14">
            <h1 className="text-[27px] tracking-wide font-bold font-mulish md:text-3xl xl:text-4xl">
              Newsletter
            </h1>
            <h3 className="text-sm font-inter w-72 lg:text-base lg:pt-2">
              Subscribe to Our Newsletter for the Latest Updates and Offers
            </h3>
          </div>
          <form onSubmit={handleSubscribe}>
            <div className="grid gap-4">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter Email Address"
                  className="bg-inputblue rounded-lg p-3 pl-11 focus:outline-white focus:outline-1 text-white w-full"
                  required
                />
              </div>
              <Button
                title={
                  loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <ImSpinner3 className="text-2xl animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    "SUBSCRIBE"
                  )
                }
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:scale-90"
                } bg-white py-3 w-full text-gray-700 rounded-lg font-semibold font-inter cursor-pointer transition-transform duration-300 lg:py-4`}
              />
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
          </form>
        </div>

        <motion.div
          className="py-4 sm:pt-10 md:pt-4 lg:pt-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={CarContainer0} alt="" className="w-full xmd:hidden" />
          <img src={CarContainer1} alt="" className="w-full hidden xmd:block" />
        </motion.div>
      </section>
    </section>
  );
};

export default Newsletter;
