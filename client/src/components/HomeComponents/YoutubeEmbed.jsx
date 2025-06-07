const YouTubeEmbed = () => {
  return (
    <section className="py-14 px-5 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28">
      <div className="aspect-video brightness-90 md:mt-20 xmd:mt-28 lg:mt-28 xl:mt-40 xxl:mt-58">
        <iframe
          className=" h-full w-full rounded-xl lg:rounded-2xl"
          src="https://www.youtube.com/embed/JoHsfOz1Q5w"
          title="Car Shipping: What You Need To Know!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
export default YouTubeEmbed;
