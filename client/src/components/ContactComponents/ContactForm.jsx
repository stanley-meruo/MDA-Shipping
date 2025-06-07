import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaRegEnvelope,
  FaSpinner,
} from "react-icons/fa6";
import {motion} from "motion/react";
import SocialIcons from "../SocialIcons";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim())
      errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" }); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Simulate sending data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-4 lg:flex lg:items-center lg:gap-8">
      <form
        className="grid gap-4 font-mulish lg:w-full"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div className="form-control">
          <label className="font-semibold text-sm mb-1">First Name *</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Ex. John"
            className="w-full p-3 border rounded-lg text-sm bg-white border-gray-300 focus:outline focus:outline-babyblue"
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="form-control">
          <label className="font-semibold text-sm mb-1">Last Name *</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Ex. Doe"
            className="w-full p-3 border rounded-lg text-sm bg-white border-gray-300 focus:outline focus:outline-babyblue"
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="font-semibold text-sm mb-1">Email *</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="example@gmail.com"
            className="w-full p-3 border rounded-lg text-sm bg-white border-gray-300 focus:outline focus:outline-babyblue"
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="form-control">
          <label className="font-semibold text-sm mb-1">Phone *</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full p-3 border rounded-lg text-sm bg-white border-gray-300 focus:outline focus:outline-babyblue"
          />
          {formErrors.phone && (
            <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div className="form-control sm:col-span-2">
          <label className="font-semibold text-sm mb-1">Subject *</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Enter here.."
            className="w-full p-3 border rounded-lg text-sm bg-white border-gray-300 focus:outline focus:outline-babyblue"
          />
          {formErrors.subject && (
            <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div className="form-control sm:col-span-2">
          <label className="font-medium text-sm mb-1">Your Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter here.."
            rows={6}
            cols={20}
            className="w-full p-3 border rounded-lg text-sm resize-none bg-white border-gray-300 focus:outline focus:outline-babyblue"
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-xs">{formErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-babyblue w-full text-white font-semibold font-inter gap-2 py-3 rounded-xl mx-auto cursor-pointer hover:bg-gray-100 hover:text-gray-700 hover:scale-90 duration-300 transition-transform disabled:opacity-50 lg:text-base"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              SENDING...
            </>
          ) : (
            "SEND MESSAGE"
          )}
        </button>
      </form>

      <motion.section
        className="bg-inputblue bg-blend-multiply bg-[url(/src/assets/main.webp)] bg-cover bg-center bg-no-repeat text-white mt-10 px-4 py-10 space-y-10 rounded-xl shadow-md xs:px-6 sm:px-8 md:px-10 lg:w-4/5 lg:-mt-14 lg:text-base lg:px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div>
          <h3 className="font-bold text-xl font-mulish mb-2">Address</h3>
          <p className="font-inter">
            3456 Crestwood Parkway, Suite 400,<br/> Duluth GA,  NewYork, USA
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl font-mulish mb-2">Contact</h3>
          <p className="grid gap-1.5 font-inter">
            <span className="flex items-center gap-2">
              <FaRegEnvelope className="mt-1" />
              info@mdashipping.us
            </span>
            <span className="flex items-center gap-2">
              <FaPhone className="mt-1" />
              (+1) 912 000 0000
            </span>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl font-mulish mb-2">
            Follow Us on Social Media
          </h3>
          <SocialIcons/>
        </div>
      </motion.section>
    </section>
  );
};

export default ContactForm;
