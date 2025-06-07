import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";


const SocialIcons = () => {
    return (
        <>
            <div className="flex items-center gap-3 lg:gap-5">
              <FaFacebook className="size-6 text-white rounded-sm bg-babyblue p-1 lg:size-7" />
              <FaXTwitter className="size-6 text-white rounded-sm bg-babyblue p-1 lg:size-7" />
              <FaInstagram className="size-6 text-white rounded-sm bg-babyblue p-1 lg:size-7" />
              <FaYoutube className="size-6 text-white rounded-sm bg-babyblue p-1 lg:size-7" />
            </div>
        </>
    )
}
export default SocialIcons;