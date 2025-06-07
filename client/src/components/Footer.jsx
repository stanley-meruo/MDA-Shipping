import Logofooter from "/logo-footer.svg";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="grid gap-4 pt-12 bg-darkblue text-white rounded-t-3xl xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
      <div className="sm:flex sm:justify-between">
        <div>
          <img src={Logofooter} className="mx-auto w-44 lg:w-48" />
        </div>

        <ul className="grid gap-4 text-lg font-mulish text-center my-10 sm:my-3 sm:gap-0 sm:text-left lg:pl-24">
          <li>
            <Link
              to="/"
              className="hover:text-babyblue hover:underline hover:underline-offset-[10px]"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-babyblue hover:underline hover:underline-offset-[10px]"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-babyblue hover:underline hover:underline-offset-[10px]"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center space-y-2 sm:mt-1">
          <div className="flex items-center gap-4 py-2 sm:self-start">
            <FaFacebook className="size-6 hover:text-babyblue lg:size-7" />
            <FaXTwitter className="size-6 hover:text-babyblue lg:size-7" />
            <FaInstagram className="size-6 hover:text-babyblue lg:size-7" />
            <FaYoutube className="size-6 hover:text-babyblue lg:size-7" />
          </div>
          <div className="grid space-y-4 text-sm py-4 text-white text-center font-inter font-medium sm:text-left sm:space-y-4 lg:text-base">
            <Link href="">
              <p className=" hover:text-babyblue">
                info@mdashipping.us
              </p>
            </Link>
            <p className="">(+1) 912 000 4300</p>
            <div className="">
              <p>3456 Crestwood Parkway,</p>
              <p>Suite 400, Duluth GA,</p>
              <p>NewYork, USA</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center py-8 text-[10px] lg:text-start lg:text-xs">
        Copyright &copy; 2024 MDA Shipping. All Right Reserved
      </p>
    </footer>
  );
};
export default Footer;
