import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { ImSpinner3 } from "react-icons/im";
import Carousel from "../Carousel";
import DetailsButton from "../DetailsButton";

const BuyingAssistance = () => {
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
          setVehicles(response.data[0]);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        setError("Failed to load vehicle data.");
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) {
      return (
        <div className="flex justify-center p-20">
          <ImSpinner3 className="animate-spin text-blue-500 text-4xl" />
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
  
    const slides = [
      {
        title: vehicles.slideTitle[0],
        description: vehicles.slideDescriptions[0],
      },
      {
        title: [vehicles.slideTitle[1], vehicles.slideTitle[2]],
        description: [
          vehicles.slideDescriptions[1],
          vehicles.slideDescriptions[2],
          vehicles.slideDescriptions[3],
          vehicles.slideDescriptions[4],
          vehicles.slideDescriptions[5]
        ]
      },      
      {
        title: vehicles.slideTitle[3],
        description: vehicles.slideDescriptions[6],
      },
    ];
  

  return (
    <main>
      <main className="pt-24 md:pt-26 lg:pt-18">
        <section className="grid gap-4 md:flex md:items-center md:justify-between">
          <div className="w-full grid gap-5 px-5 xs:px-6 sm:px-10 md:pl-12 md:-mr-24 xmd:pl-14 lg:pl-16 lg:gap-6 xl:pl-22 xl:-mt-20 xxl:pl-28">
            <h1 className="text-3xl w-44 font-medium font-mulish xmd:text-4xl lg:w-full lg:text-[42px] xl:text-5xl xxl:text-[52px]">
              {vehicles.name}
            </h1>
            <p className="text-sm leading-[22px] font-inter lg:text-base lg:leading-[26px] lg:w-[500px] xl:w-[550px]">
              {vehicles.description}
            </p>
            <Button
              onClick={() => navigate("/contact")}
              title="CONTACT US TO LEARN MORE"
              className="bg-babyblue py-4 w-full text-sm text-white rounded-lg font-semibold font-inter hover:text-gray-700 hover:bg-gray-100 hover:scale-90 duration-300 transition-transform cursor-pointer sm:w-2/4 md:w-4/5 lg:w-4/6 lg:py-5 lg:mt-4"
            />
          </div>
          <div className="w-full">
            <img
              src={vehicles.mainImage.mobile}
              alt={vehicles.name}
              className="w-full md:translate-y-24 lg:hidden"
            />
            <img
              src={vehicles.mainImage.desktop}
              alt={vehicles.name}
              className="lg:w-full hidden lg:block lg:translate-y-24"
            />
          </div>
        </section>
      </main>

      <section className="px-5 py-10 xs:px-6 sm:px-10 md:pt-32 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <h2 className="text-2xl font-bold font-mulish mb-4 tracking-wide xs:mb-6 sm:text-[27px] xl:text-[32px]">
          How it works
        </h2>
        <Carousel
          slides={slides}
          className=" min-h-[290px] xs:min-h-[280px]"
        />
      </section>

      <section className="px-5 pt-12 pb-20 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <h2 className="text-2xl font-bold font-mulish mb-4 tracking-wide xs:mb-6 sm:text-[27px] md:mb-8 xl:text-[32px]">
          Optional services
        </h2>
        <div className="font-bold font-mulish grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <DetailsButton title={vehicles.additionalServices[0]} />
          <DetailsButton title={vehicles.additionalServices[1]} />
          <DetailsButton title={vehicles.additionalServices[2]} />
          <DetailsButton title={vehicles.additionalServices[3]} />
          <DetailsButton title={vehicles.additionalServices[4]} />
          <DetailsButton title={vehicles.additionalServices[5]} />
        </div>
      </section>
    </main>
  );
};

export default BuyingAssistance;
