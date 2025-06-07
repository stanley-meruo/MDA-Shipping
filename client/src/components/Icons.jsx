const Icons = ({ iconName, icon }) => {
  return (
    <div className="grid gap-1">
      <div className="bg-gray-100 rounded-xl grid min-h-20">
        <img src={icon} alt="iconName" className="m-auto w-16" />
      </div>
      <p className="mx-auto font-mulish text-[13px] md:text-sm">{iconName}</p>
    </div>
  );
};

export default Icons;
