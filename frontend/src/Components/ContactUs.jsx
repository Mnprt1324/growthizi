import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaEnvelope, FaFacebook, FaPhone, FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { ContactForm } from "./ContactForm";
import { RiMapPin2Fill } from "react-icons/ri";

export const ContactUs = () => {
  const contactDetalis = [
    {
      icon: <RiMapPin2Fill color="#FA614F" size={30} />,
      heading: "Adderss",
      detail: "Royal Ln.Mesa,New Jersey 45463",
    },
    {
      icon: <FaPhone color="#FA614F" size={30} />,
      heading: "Email",
      detail: "Royal Ln.Mesa,New Jersey 45463",
    },
    {
      icon: <FaEnvelope color="#FA614F" size={30} />,
      heading: "Phone Number",
      detail: "+1234567890",
    },
    {
      icon: <TbWorld color="#FA614F" size={30} />,
      heading: "Website",
      detail: "Www.Myportfy.Com",
    },
  ];

  return (
    <div className="text-white contactUs">
      <div className="contact-box">
        <div className="contact-headder">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur <span> adipisicing elit.</span></p>
        </div>
        <div className="contact-detalis-box">
          {contactDetalis.map((curr, index) => (
            <div key={index} className="contact-details">
              <div >{curr.icon}</div>
              <div>
                <p className="light-text">{curr.heading}</p>
                <p>{curr.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="social-icon ">
          <p> Share Social Media</p>
          <div >
            <FaFacebook  size={24}/>
            <BiLogoInstagramAlt size={24} />
            <FaXTwitter size={24} />
            <TbWorld  size={24}/>
          </div>
        </div>
      </div>

      {/* contact from */}
    <ContactForm/>
    </div>
  );
};
