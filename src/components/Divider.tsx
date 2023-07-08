import ArrowIcon from "../assets/images/icon-arrow.svg";

const Divider = () => {
  return (
    <div className="relative my-14 flex w-full flex-col items-center justify-center">
      <button className="relative z-10 flex h-23 w-23 items-center justify-center rounded-full bg-purple">
        <img src={ArrowIcon} alt="Down Arrow" className="h-11 w-11" />
      </button>
      <div className="absolute h-1 w-full border-t border-light-grey"></div>
    </div>
  );
};

export default Divider;
