import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { ImSpinner3 } from "react-icons/im";
import DetailsButton from "../DetailsButton";
import Icons from "../Icons";

const AutomobileLoading = () => {
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
          setVehicles(response.data[3]);
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
      <main className="pt-24 xmd:pt-16 lg:pt-26">
        <section className="grid md:flex md:items-center md:justify-between">
          <div className="w-full grid gap-5 px-5 xs:px-6 sm:px-10 md:pl-12 md:-mt-8 md:-mr-8 xmd:pl-14 xmd:-mt-24 xmd:-mr-16 lg:pl-16 xl:pl-22 xl:-mt-44 xl:-mr-36 xxl:pl-28">
            <h1 className="text-3xl w-44 font-medium font-mulish xmd:text-4xl xmd:w-full lg:text-[42px] xl:text-5xl xxl:text-[52px]">
              {vehicles.name}
            </h1>
            <p className="text-sm leading-[22px] font-inter md:w-80 xmd:w-96 lg:text-base lg:leading-[26px] lg:w-[500px]">
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
              className="w-full md:translate-y-8 lg:hidden"
            />
            <img
              src={vehicles.mainImage.desktop}
              alt={vehicles.name}
              className="lg:w-full hidden lg:block lg:translate-y-8"
            />
          </div>
        </section>
      </main>

      <section className="px-5 py-10 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <p className="uppercase font-inter font-medium text-babyblue mb-4">
          {vehicles.iconTitle}
        </p>
        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:grid-cols-6">
          <Icons icon={vehicles.icon[0]} iconName={vehicles.iconName[0]} />
          <Icons icon={vehicles.icon[1]} iconName={vehicles.iconName[1]} />
          <Icons icon={vehicles.icon[2]} iconName={vehicles.iconName[2]} />
          <Icons icon={vehicles.icon[3]} iconName={vehicles.iconName[3]} />
          <Icons icon={vehicles.icon[4]} iconName={vehicles.iconName[4]} />
          <Icons icon={vehicles.icon[5]} iconName={vehicles.iconName[5]} />
        </div>
      </section>

      <section className="grid px-5 py-10 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        <section>
          <div className="grid gap-4 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/5 md:-mr-44 xmd:-mr-52 lg:-mr-64 lg:text-2xl xl:-mr-84 xxl:-mr-[390px]">
              {vehicles.sectionTitle[0]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow md:max-w-[1000px] xmd:max-w-[1200px] lg:max-w-[1500px] xl:max-w-[1950px]"></div>
          </div>
          <div className="py-4 md:flex md:justify-between">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[2]}</p>
              <p className="text-sm">{vehicles.sectionDescriptions[0]}</p>
            </div>
            <div className="w-full grid md:mt-6">
              <img
                src={vehicles.sectionImage[0]}
                alt={vehicles.sectionTitle[2]}
                className="m-auto"
              />
            </div>
          </div>

          <div className="grid gap-4 mt-16 mb-4 md:flex md:items-center">
            <h2 className="text-xl font-mulish font-bold text-babyblue md:w-2/5 md:-mr-20 xmd:-mr-28 lg:-mr-32 lg:text-2xl xl:-mr-48">
              {vehicles.sectionTitle[1]}
            </h2>
            <div className="h-[2.5px] w-full bg-babyblue flex-grow md:max-w-[1000px] xmd:max-w-[1200px] lg:max-w-[1500px] xl:max-w-[1950px]"></div>
          </div>
          <div className=" py-4 md:flex md:justify-between md:py-0">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[3]}</p>
              <p className="text-sm md:w-72 xmd:w-80">
                {vehicles.sectionDescriptions[1]}
              </p>
            </div>
            <div className="w-full grid md:mt-6">
              <img
                src={vehicles.sectionImage[1]}
                alt={vehicles.sectionTitle[3]}
                className="m-auto"
              />
            </div>
          </div>
          <div className="py-4 md:flex md:justify-between md:py-0">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[4]}</p>
              <p className="text-sm">{vehicles.sectionDescriptions[2]}</p>
            </div>
            <div className="w-full grid md:mt-6">
              <img
                src={vehicles.sectionImage[2]}
                alt={vehicles.sectionTitle[4]}
                className="m-auto"
              />
            </div>
          </div>
          <div className="py-4 md:flex md:justify-between md:py-0">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[5]}</p>
              <p className="text-sm md:w-72 xmd:w-80">
                {vehicles.sectionDescriptions[3]}
              </p>
            </div>
            <div className="w-full grid md:mt-6 ">
              <img
                src={vehicles.sectionImage[3]}
                alt={vehicles.sectionTitle[5]}
              />
            </div>
          </div>
          <div className="py-4 md:flex md:justify-between md:py-0">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[6]}</p>
              <p className="text-sm md:w-72 xmd:w-80">
                {vehicles.sectionDescriptions[4]}
              </p>
            </div>
            <div className="w-full grid md:mt-6">
              <img
                src={vehicles.sectionImage[4]}
                alt={vehicles.sectionTitle[6]}
                className="m-auto"
              />
            </div>
          </div>
          <div className="py-4 md:flex md:justify-between md:py-0">
            <div className="my-4 font-inter w-full">
              <p className="text-babyblue">{vehicles.sectionTitle[6]}</p>
              <p className="text-sm md:w-72 xmd:w-80">
                {vehicles.sectionDescriptions[5]}
              </p>
            </div>
            <div className="w-full grid md:mt-6">
              <img
                src={vehicles.sectionImage[5]}
                alt={vehicles.sectionTitle[6]}
                className="m-auto"
              />
            </div>
          </div>
        </section>
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

export default AutomobileLoading;
