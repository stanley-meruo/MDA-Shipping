import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoHeader from "/logo-header.svg";
import LogoFooter from "/logo-footer.svg";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import SocialIcons from "./SocialIcons";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [menuOpen]);
  

  const isActive = (path) =>
  location.pathname === path || location.pathname.startsWith(`${path}/`);


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-darkblue" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-5 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={isScrolled ? LogoFooter : LogoHeader}
            alt="Company Logo"
            className="w-36 lg:w-40 xl:w-44"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden font-inter md:flex gap-5 lg:gap-8 xl:gap-10 text-sm xl:text-base">
          <li>
            <Link
              to="/"
              className={`pb-1 border-b-2 transition-colors duration-300 ${
                isActive("/")
                  ? isScrolled
                    ? "border-white text-white font-semibold"
                    : "border-babyblue text-babyblue font-semibold"
                  : isScrolled
                  ? "text-white hover:text-babyblue border-transparent"
                  : "hover:text-babyblue border-transparent"
              }`}
            >
              HOME
            </Link>
          </li>

          {/* Desktop Services Dropdown */}
          <li className="relative group hidden md:block">
            <Link
              to="/services"
              className={`pb-1 border-b-2 cursor-pointer flex items-center gap-1 ${
                isActive("/services")
                  ? isScrolled
                    ? "border-white text-white font-semibold"
                    : "border-babyblue text-babyblue font-semibold"
                  : isScrolled
                  ? "text-white hover:text-babyblue border-transparent"
                  : "hover:text-babyblue border-transparent"
              }`}
            >
              SERVICES
              <IoIosArrowDown className="text-lg mt-[1px]" />
            </Link>
            <ul className="absolute -left-12 top-full w-52 bg-white shadow-md rounded-xl opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
              {[
                "buying-assistance",
                "auto-transport",
                "warehousing",
                "automobile-loading",
                "motorcycle-loading",
                "boat-loading",
                "heavy-machinery-loading",
                "dismantling",
                "part-purchase-assistance",
              ].map((slug) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className={`block py-1.5 px-4 hover:text-babyblue ${
                      isActive(`/services/${slug}`)
                        ? "text-babyblue font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {slug
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className={`pb-1 border-b-2 transition-colors duration-300 ${
                isActive("/contact")
                  ? isScrolled
                    ? "border-white text-white font-semibold"
                    : "border-babyblue text-babyblue font-semibold"
                  : isScrolled
                  ? "text-white hover:text-babyblue border-transparent"
                  : "hover:text-babyblue border-transparent"
              }`}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex">
          <SocialIcons />
        </div>

        {/* Hamburger */}
        <PiCirclesFourLight
          onClick={() => setMenuOpen(true)}
          className={`cursor-pointer size-8 -mr-1 md:hidden xs:size-10 xs:-mr-2 ${
            isScrolled ? "text-white" : "text-babyblue hover:text-darkblue"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 right-0 w-full h-full z-[9999] transform transition-transform duration-700 ease-in-out overscroll-none ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex`}
      >
        {/* Left side - Content */}
        <div className="w-[85%] bg-white h-full p-5 flex flex-col justify-between xs:px-6 sm:px-8">
          {/* Mobile Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={LogoHeader} alt="logo" className="w-36" />
          </Link>

          {/* Mobile Nav */}
          <ul className="grid gap-4">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`pb-1 border-b-2 ${
                  isActive("/")
                    ? "border-babyblue text-babyblue font-semibold"
                    : "border-transparent hover:text-babyblue"
                }`}
              >
                HOME
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="flex items-center justify-between w-full"
              >
                <li>
                  <Link
                    to="/services"
                    className={`pb-1 border-b-2 ${
                      isActive("/services")
                        ? "border-babyblue text-babyblue font-semibold"
                        : "border-transparent font-normal"
                    }`}
                  >
                    SERVICES
                  </Link>
                </li>

                <IoIosArrowDown
                  className={`text-xl transition-transform duration-300 ${
                    mobileSubmenuOpen ? "rotate-180 text-babyblue" : ""
                  }`}
                />
              </button>

              <ul
                className={`pl-4 mt-2 text-sm space-y-2 overflow-hidden transition-all duration-300 ${
                  mobileSubmenuOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {[
                  "buying-assistance",
                  "auto-transport",
                  "warehousing",
                  "automobile-loading",
                  "motorcycle-loading",
                  "boat-loading",
                  "heavy-machinery-loading",
                  "dismantling",
                  "part-purchase-assistance",
                ].map((slug) => (
                  <li key={slug}>
                    <Link
                      to={`/services/${slug}`}
                      onClick={() => setMenuOpen(false)}
                      className={`${
                        isActive(`/services/${slug}`)
                          ? "text-babyblue font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {slug
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`pb-1 border-b-2 ${
                  isActive("/contact")
                    ? "border-babyblue text-babyblue font-semibold"
                    : "border-transparent hover:text-babyblue"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          <div className="grid space-y-2 text-xs font-inter font-medium sm:text-sm">
            <Link href="">
              <p className=" text-babyblue">info@mdashipping.us</p>
            </Link>
            <p className="">(+1) 912 000 4300</p>
            <div className="">
              <p>3456 Crestwood Parkway,</p>
              <p>Suite 400, Duluth GA, NewYork, USA</p>
            </div>
          </div>

          {/* Mobile Social Icons */}
          <div className="mb-20">
            <SocialIcons />
          </div>
        </div>

        {/* Right side - Darkblue panel with FiX */}
        <div className="w-[20%] bg-darkblue h-full flex items-start justify-center pt-5">
          <RiArrowLeftSLine
            onClick={() => setMenuOpen(false)}
            className="text-white size-10 cursor-pointer hover:text-babyblue sm:size-12"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
