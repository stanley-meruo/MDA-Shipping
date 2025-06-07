import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { ImSpinner3 } from "react-icons/im";
import DetailsButton from "../DetailsButton";

const Dismantling = () => {
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
          setVehicles(response.data[7]);
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
      <main className="pt-24 lg:pt-30">
        <section className="grid md:flex md:items-center md:justify-between">
          <div className="w-full grid gap-5 px-5 xs:px-6 sm:px-10 md:pl-12 md:-mr-8 xmd:pl-14 xmd:-mr-16 lg:pl-16 xl:pl-22 xl:-mr-36 xl:-mt-24 xxl:pl-28 xxl:-mt-36">
            <h1 className="text-3xl w-44 font-medium font-mulish xmd:text-4xl xmd:w-full lg:text-[42px] xl:text-5xl xxl:text-[52px]">
              {vehicles.name}
            </h1>
            <div className="text-sm leading-[22px] font-inter md:w-80 xmd:w-90 lg:text-base lg:leading-[26px] lg:w-[450px]">
              {vehicles.description.split("\n").map((para, index) => (
                <p key={index} className="mb-4 md:mb-2">
                  {para}
                </p>
              ))}
            </div>
            <Button
              onClick={() => navigate("/contact")}
              title="CONTACT US TO LEARN MORE"
              className="bg-babyblue py-4 w-full text-sm text-white rounded-lg font-semibold font-inter hover:text-gray-700 hover:bg-gray-100 hover:scale-90 duration-300 transition-transform cursor-pointer sm:w-2/4 md:-mt-4 md:w-4/5 lg:w-4/6 lg:py-5 lg:mt-2 xl:mt-4"
            />
          </div>
          <div className="w-full pt-2 pl-5 sm:pl-28 md:pl-0">
            <img
              src={vehicles.mainImage.mobile}
              alt={vehicles.name}
              className="w-full md:translate-y-8 lg:hidden"
            />
            <img
              src={vehicles.mainImage.desktop}
              alt={vehicles.name}
              className="lg:w-full hidden lg:block lg:translate-y-12"
            />
          </div>
        </section>
      </main>

      <section className="grid px-5 py-10 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <h2 className="text-2xl font-bold font-mulish mb-5 mt-8 tracking-wide xs:mb-6 xs:mt-12 sm:text-[27px] md:mb-8 md:mt-20 lg:mt-28 xl:text-[32px]">
          Our options for dismantling
        </h2>
        <section>
          <div className="grid gap-4 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/4 md:-mr-28 xmd:-mr-38 lg:-mr-42 lg:text-2xl xl:-mr-68 xxl:-mr-[360px]">
              {vehicles.sectionTitle[0]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow"></div>
          </div>
          <div className="py-4 md:flex md:justify-between">
            <div className="my-4 font-inter w-full text-sm">
              {vehicles.sectionDescriptions[0]
                .split("\n")
                .map((para, index) => (
                  <p
                    key={index}
                    className="mb-2 md:w-72 xmd:w-84 lg:w-96 xl:w-[500px]"
                  >
                    {para}
                  </p>
                ))}
            </div>
            <div className="w-full grid md:mt-4 bg-green-400">
              <img
                src={vehicles.sectionImage[0]}
                alt={vehicles.sectionTitle[0]}
                className="m-auto md:ml-auto md:my-auto md:mr-0"
              />
            </div>
          </div>

          <div className="grid gap-4 mt-10 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/4 md:-mr-48 xmd:-mr-58 lg:-mr-66 lg:text-2xl xl:-mr-92 xxl:-mr-[460px]">
              {vehicles.sectionTitle[1]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow"></div>
          </div>
          <div className="py-4 md:flex md:justify-between">
            <div className="my-4 font-inter w-full">
              <p className="text-sm md:w-72 xmd:w-84 lg:w-96 xl:w-[500px]">
                {vehicles.sectionDescriptions[1]}
              </p>
            </div>
            <div className="w-full grid md:mt-4">
              <img
                src={vehicles.sectionImage[1]}
                alt={vehicles.sectionTitle[1]}
                className="m-auto md:ml-auto md:my-auto md:mr-0"
              />
            </div>
          </div>

          <div className="grid gap-4 mt-10 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/4 md:-mr-22 xmd:-mr-32 lg:-mr-36 lg:text-2xl xl:-mr-64 xxl:-mr-[340px]">
              {vehicles.sectionTitle[2]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow"></div>
          </div>
          <div className="py-4 md:flex md:justify-between">
            <div className="my-4 font-inter w-full text-sm">
              {vehicles.sectionDescriptions[2]
                .split("\n")
                .map((para, index) => (
                  <p
                    key={index}
                    className="mb-2 md:w-72 xmd:w-84 lg:w-96 xl:w-[500px]"
                  >
                    {para}
                  </p>
                ))}
            </div>
            <div className="w-full grid md:mt-4">
              <img
                src={vehicles.sectionImage[2]}
                alt={vehicles.sectionTitle[2]}
                className="m-auto md:ml-auto md:my-auto md:mr-0"
              />
            </div>
          </div>

          <div className="grid gap-4 mt-10 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/4 md:-mr-8 xmd:-mr-18 lg:-mr-18 lg:text-2xl xl:-mr-44 xxl:-mr-[270px]">
              {vehicles.sectionTitle[3]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow"></div>
          </div>
          <div className="py-4 md:flex md:justify-between">
            <div className="my-4 font-inter w-full">
              <p className="text-sm md:w-72 xmd:w-84 lg:w-96 xl:w-[500px]">
                {vehicles.sectionDescriptions[3]}
              </p>
            </div>
            <div className="w-full grid md:mt-4">
              <img
                src={vehicles.sectionImage[3]}
                alt={vehicles.sectionTitle[3]}
                className="m-auto md:ml-auto md:my-auto md:mr-0"
              />
            </div>
          </div>
        </section>
      </section>

      <section className="px-5 pt-12 pb-20 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <h2 className="text-2xl font-bold font-mulish mb-4 tracking-wide xs:mb-6 sm:text-[27px] md:mb-8 xl:text-[32px]">
          Extra services
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

export default Dismantling;