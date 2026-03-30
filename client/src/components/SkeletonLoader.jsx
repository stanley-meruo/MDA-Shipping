const SkeletonLoader = () => {
    return (
      <div className="p-5 xs:px-6 sm:px-10 md:px-12 xmd:px-14 lg:px-16 xl:px-22 xxl:px-28 animate-pulse">
        <div className="md:flex md:gap-2">
          <div className="grid w-full">
            {/* Title */}
            <div className="h-7 bg-gray-300 rounded w-3/6 mb-4 sm:h-8 lg:h-10" />
            {/* Description */}
            <div className="grid space-y-2 mb-4">
              <div className="h-4 bg-gray-300 rounded w-5/6" />
              <div className="h-4 bg-gray-300 rounded w-4/6" />
              <div className="h-4 bg-gray-300 rounded w-5/6" />
              <div className="h-4 bg-gray-300 rounded w-4/6" />
            </div>
            {/* Button */}
            <div className="h-8 bg-gray-300 rounded w-60 my-4 flex justify-center sm:justify-left sm:h-9" />
          </div>

          {/* Image */}
          <div className="h-60 bg-gray-300 w-full rounded-xl mb-6" />
        </div>
      </div>
    );
}

export default SkeletonLoader;