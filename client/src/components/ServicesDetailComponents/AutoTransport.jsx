import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { ImSpinner3 } from "react-icons/im";

const VehicleTwo = () => {
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
          setVehicles(response.data[1]);
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
      {/* Hero Section */}
      <main className="pt-24 md:py-24 xmd:pt-12 lg:pt-24 xl:pt-28">
        <section className="grid gap-4 md:flex md:items-center md:justify-between">
          <div className="w-full grid gap-5 px-5 xs:px-6 sm:px-10 md:pl-12 xmd:pl-14 lg:pl-16 lg:gap-6 xl:pl-22 xxl:pl-28">
            <h1 className="text-3xl w-44 font-medium font-mulish xmd:text-4xl lg:w-full lg:text-[42px] xl:text-5xl xxl:text-[52px]">
              {vehicles.name}
            </h1>
            <p className="text-sm leading-[22px] font-inter lg:text-base lg:leading-[26px] lg:w-[450px] xl:w-[550px]">
              {vehicles.description}
            </p>
            <Button
              onClick={() => navigate("/contact")}
              title="CONTACT US TO LEARN MORE"
              className="bg-babyblue py-4 w-full text-sm text-white rounded-lg font-semibold font-inter hover:text-gray-700 hover:bg-gray-100 hover:scale-90 duration-300 transition-transform cursor-pointer sm:w-2/4 md:w-4/5 lg:w-4/6 lg:py-5 lg:mt-4"
            />
          </div>
          <div className="w-full pl-5 sm:pl-28 md:pl-0">
            <img
              src={vehicles.mainImage.mobile}
              alt={vehicles.name}
              className="w-full md:translate-y-24 lg:hidden"
            />
            <img
              src={vehicles.mainImage.desktop}
              alt={vehicles.name}
              className="lg:w-full lg:h-auto hidden lg:block lg:translate-y-24"
            />
          </div>
        </section>
      </main>

      <section className="grid gap-16 px-5 py-10 xs:px-6 sm:px-10 md:py-18 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <div>
          <div className="grid gap-4 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/5 md:-mr-24 xmd:-mr-32 lg:-mr-40 lg:text-2xl xl:-mr-48">
              {vehicles.sectionTitle[0]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow md:max-w-[1000px] xmd:max-w-[1200px] lg:max-w-[1500px] xl:max-w-[1950px]"></div>
          </div>

          <div className="md:flex md:items-center md:gap-6 md:justify-between xmd:gap-12 lg:gap-0">
            <div className="w-full">
              <p className="py-5 text-sm md:w-72 lg:text-base lg:w-80 xl:w-96">
                {vehicles.sectionDescriptions[0]}
              </p>
              <span className="text-babyblue font-inter font-semibold grid gap-4 text-sm md:mt-3 lg:text-base">
                <p>{vehicles.sectionTitle[2]}</p>
                <p>{vehicles.sectionTitle[3]}</p>
                <p>{vehicles.sectionTitle[4]}</p>
              </span>
              <p className="text-xs py-2 text-gray-600 md:w-72 lg:text-sm lg:w-96">
                {vehicles.sectionDescriptions[1]}
              </p>
            </div>
            <div className="my-8 w-ful grid">
              <img
                src={vehicles.sectionImage[0]}
                alt={vehicles.sectionTitle[0]}
                className="m-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-4 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/5 md:-mr-12 xmd:-mr-22 lg:-mr-25 lg:text-2xl xl:-mr-36">
              {vehicles.sectionTitle[1]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow md:max-w-[1000px] xmd:max-w-[1200px] lg:max-w-[1500px] xl:max-w-[1950px]"></div>
          </div>

          <div className="md:flex md:items-center md:gap-6 md:justify-between xmd:gap-12 lg:gap-0">
            <div className="w-full md:-mt-8 xmd:-mt-12 lg:-mt-16 xl:-mt-20">
              <p className="py-5 text-sm md:w-68 lg:text-base lg:w-72 xl:w-96">
                {vehicles.sectionDescriptions[1]}
              </p>
              <span className="text-babyblue font-inter font-semibold grid gap-4 text-sm md:mt-3 lg:text-base">
                <p>{vehicles.sectionTitle[5]}</p>
                <p>{vehicles.sectionTitle[6]}</p>
              </span>
              <p className="text-xs py-2 text-gray-600 md:w-72 lg:text-sm lg:w-96 xl:w-[430px]">
                {vehicles.sectionDescriptions[3]}
              </p>
            </div>
            <div className="my-8 w-full grid">
              <img
                src={vehicles.sectionImage[1]}
                alt={vehicles.sectionTitle[1]}
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default VehicleTwo;
