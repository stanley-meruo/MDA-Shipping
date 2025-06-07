import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { ImSpinner3 } from "react-icons/im";
import DetailsButton from "../DetailsButton";

const Warehousing = () => {
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
          setVehicles(response.data[2]);
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

  return (
    <main>
      <main className="pt-24 lg:pt-18">
        <section className="grid gap-4 md:flex md:items-center md:justify-between">
          <div className="w-full grid gap-5 px-5 xs:px-6 sm:px-10 md:pl-12 md:-mr-28 xmd:pl-14 xmd:-mt-14 lg:pl-16 lg:mt-8 lg:gap-6 xl:pl-22 xl:-mt-8 xxl:pl-28">
            <h1 className="text-3xl w-44 font-medium font-mulish xmd:text-4xl lg:w-full lg:text-[42px] xl:text-5xl xxl:text-[52px]">
              {vehicles.name}
            </h1>
            <p className="text-sm leading-[22px] font-inter xmd:w-[450px] lg:text-base lg:leading-[26px] lg:w-[500px] xl:w-[550px]">
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
              className="w-full md:translate-y-20 lg:hidden"
            />
            <img
              src={vehicles.mainImage.desktop}
              alt={vehicles.name}
              className="lg:w-full hidden lg:block lg:translate-y-24"
            />
          </div>
        </section>
      </main>

      <section className="px-5 py-20 xs:px-6 sm:px-10 sm:pt-26 md:pt-38 md:px-12 xmd:px-14 lg:px-16 lg:pt-50 xl:px-22 xxl:px-28">
        <h2 className="text-2xl font-bold font-mulish mb-4 tracking-wide xs:mb-6 sm:text-[27px] md:mb-8 xl:text-[32px]">
          We provide you with the following
        </h2>
        <div className="font-bold font-mulish grid gap-4 sm:grid-cols-2 lg:gap-6">
          <DetailsButton title={vehicles.additionalServices[0]} />
          <DetailsButton title={vehicles.additionalServices[1]} />
          <DetailsButton title={vehicles.additionalServices[2]} />
          <DetailsButton title={vehicles.additionalServices[3]} />
          <DetailsButton title={vehicles.additionalServices[4]} />
          <DetailsButton title={vehicles.additionalServices[5]} />
          <DetailsButton title={vehicles.additionalServices[6]} />
          <DetailsButton title={vehicles.additionalServices[7]} />
          <DetailsButton title={vehicles.additionalServices[8]} />
          <DetailsButton title={vehicles.additionalServices[9]} />
        </div>
      </section>
    </main>
  );
};

export default Warehousing;
