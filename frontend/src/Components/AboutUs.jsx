import { ShadowText } from "./UI/ShadowText";
import { StylishTextBox } from "./UI/StylishTextBox";
import { MdDownloading } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
export const AboutUs = () => {
  const text = [
    "Avoid These Mistakes",
    "Your New Venture",
    "New Fonts",
    "Beyond the Norm",
    "Forge Destiny",
    "Dare to be Different",
  ];
  return (
    <div className="aboutUs-section">
      <div className="aboutUs">
        <div>
          <div className="aboutus-img">
            <img src="/images/image.svg" alt="" />
            <div className="about-box-1">
              <p>22+</p>
              <div>Years Of Experience</div>
            </div>
            <div className="about-box-2">
              <IoIosArrowUp size={30} />
              <IoIosArrowUp size={30} />
              <IoIosArrowUp size={30} />
              <IoIosArrowUp size={30} />
              <IoIosArrowUp size={30} />
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-heading">
            <p>About Us</p>
            <h1>
              "Crafting enjoyable <span className="new-text-style">digital</span>  solutions from
              business ideas."
            </h1>
            <div>
              "I specialize in interface, digital product & user experience
              design, focusing on building products, brands, and websites."
            </div>
          </div>
          <div className="about-btn-box">
            {text.map((curr, index) => (  
            <StylishTextBox text={curr} key={index} />
            ))}

            <button className="flex btn-2">
              <span className="flex">
                <MdDownloading color="#" size={18} />{" "}
              </span>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
