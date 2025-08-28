import { FaDiamond, FaWordpressSimple } from "react-icons/fa6";
import { PiStarFour } from "react-icons/pi";
import { IoRadioButtonOn } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export const Card = () => {
  return (
    <div className="card">
      <div className=" card-header">
        <div className="card-icon flex">
          <FaWordpressSimple size={60} />
        </div>
        <div className="icon icon-style-1">
          <PiStarFour color="#8C01DB" />
        </div>
        <div className="icon icon-style-2">
          <FaDiamond color="#8C01DB" />
        </div>
        <div className="icon icon-style-3">
          <IoRadioButtonOn color="#8C01DB" />
        </div>
        <div className="icon icon-style-4">
          <AiOutlinePlus color="#8C01DB" />
        </div>
      </div>
      <div className="card-text">WordPress(95%)</div>
      <div className="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </div>
    </div>
  );
};
