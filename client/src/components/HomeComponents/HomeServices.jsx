import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {motion} from "motion/react"

const HomeServices = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/vehicles`
        );
        // Simulate loading delay
        setTimeout(() => {
          setVehicles(response.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        setError("Failed to load vehicle data.");
        setLoading(false); // Stop loading even on error
      }
    };

    fetchVehicles();
  }, []);

  if (loading) {
      return (
        <div className="flex justify-center p-20">
          <ImSpinner3 className="animate-spin text-babyblue text-4xl" />
        </div>
    );
  }
  if (error) {
      return (
        <div className="text-center text-red-600 p-20">
          <p>{error}</p>
        </div>
    );
  }


  return (
    <section className="grid px-5 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
      <h1 className="text-lg text-babyblue tracking-wide font-semibold font-inter">
        SERVICES WE DO
      </h1>

      <motion.div
        className="font-mulish grid gap-4 py-5 xsm:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:py-7 xl:gap-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className={`relative rounded-xl border-[0.3px] border-gray-100 shadow-md hover:bg-gray-100 hover:scale-90 duration-300 transition-transform ${
              vehicle.mainImage.image[1] ? "xmd:col-span-2 xsm:col-span-2" : ""
            }`}
          >
            <h2 className="absolute left-8 top-12 text-xl font-bold w-36 lg:text-base lg:w-32 xl:text-xl xl:w-36">
              {vehicle.name}
            </h2>
            <picture>
              {/* Desktop view: image[1] if it exists */}
              {vehicle.mainImage.image[1] && (
                <source
                  media="(min-width: 560px)"
                  srcSet={vehicle.mainImage.image[1]}
                />
              )}
              {/* Mobile view (or fallback) */}
              <img
                src={vehicle.mainImage.image[0]}
                alt={`${vehicle.name} image`}
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
        ))}
      </motion.div>

      <div className="mx-auto w-full mb-4 py-4 xs:w-2/4 xmd:py-8 xmd:w-2/6 xl:w-1/4">
        <Button
          onClick={() => navigate("/services")}
          title="MORE ABOUT SERVICES"
          className="bg-babyblue py-4 w-full text-sm text-white rounded-lg font-semibold font-inter hover:text-gray-700 hover:bg-gray-100 hover:scale-90 duration-300 transition-transform cursor-pointer lg:py-5"
        />
      </div>
    </section>
  );
};

export default HomeServices;
