import { useState, useRef } from "react";

const Carousel = ({ slides, className = ""}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance) {
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // If you have fewer than 2 slides, just fall back to normal rendering:
  if (!slides || slides.length === 0) return null;

  // Renders one or more <h3> if title is array, else a single <h3>
  const renderTitle = (title) => {
    if (Array.isArray(title)) {
      return title.map((t, i) => (
        <h3
          key={i}
          className="text-lg text-babyblue font-semibold mb-2 xl:text-xl"
        >
          {t}
        </h3>
      ));
    }
    return (
      <h3 className="text-lg text-babyblue font-semibold mb-2 xl:text-xl">
        {title}
      </h3>
    );
  };

  // Renders one or multiple <p> if description is array, else single <p>
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((desc, i) => (
        <p key={i} className="text-sm mb-2 xl:text-base">
          {desc}
        </p>
      ));
    }
    return (
      <p className="text-sm leading-[22px] mb-2 xl:text-base">{description}</p>
    );
  };

  // For Slide 2 only: first title + its first description, then second title + remaining four
  const renderSecondSlideContent = (slide) => {
    return (
      <>
        {/* First title */}
        <h3 className="text-lg text-babyblue font-semibold mb-2 xl:text-xl">
          {slide.title[0]}
        </h3>
        {/* Exactly the first description under title[0] */}
        <p className="text-sm leading-[22px] mb-2 xl:text-base">
          {slide.description[0]}
        </p>

        {/* Second title */}
        <h3 className="text-babyblue font-semibold mb-2 xl:text-lg">
          {slide.title[1]}
        </h3>
        {/* The remaining four descriptions under title[1] */}
        <ul className="list-disc ml-6">
          {slide.description.slice(1).map((desc, i) => (
            <li key={i} className="text-sm mb-2 xl:text-base">
              {desc}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div>
      {/* MOBILE / TABLET: show one card at a time, swipeable */}
      <div
        className={`lg:hidden w-full rounded-xl border-[0.3px] border-gray-100 shadow-md p-6 xs:px-8 md:px-10 ${className}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {activeIndex === 1 ? (
          renderSecondSlideContent(slides[1])
        ) : (
          <>
            {renderTitle(slides[activeIndex].title)}
            {renderDescription(slides[activeIndex].description)}
          </>
        )}
      </div>

      {/* Dots for mobile */}
      <div className="mt-6 flex justify-center gap-3 md:mt-8 lg:hidden">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              idx === activeIndex ? "bg-babyblue" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* DESKTOP: show all cards side-by-side */}
      <div className="hidden lg:flex gap-6 mt-6">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`flex-1 w-full rounded-xl border-[0.3px] border-gray-100 shadow-md p-6 xl:p-8 ${className}`}
          >
            {idx === 1 ? (
              renderSecondSlideContent(slide)
            ) : (
              <>
                {renderTitle(slide.title)}
                {renderDescription(slide.description)}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
