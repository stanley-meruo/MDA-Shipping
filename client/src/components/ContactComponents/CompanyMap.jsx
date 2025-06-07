const CompanyMap = () => {
  return (
    <>
      <div className="rounded-xl w-full overflow-hidden my-12 h-[400px] md:my-18 md:h-[500px] lg:my-24 lg:h-[750px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45060306.91979328!2d-129.94270855!3d46.42366899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90786dec7fd83%3A0x728decc27513140!2sMercury%20Auto%20Transport%20%7C%20Car%20Shipping%20Experts!5e0!3m2!1sen!2sng!4v1749073912820!5m2!1sen!2sng"
          className="size-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default CompanyMap;
