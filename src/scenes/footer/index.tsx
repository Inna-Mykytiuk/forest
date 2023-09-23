import Logo from "../../assets/treeLogo.png";
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="bg-borderLight py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex justify-between">
        <div className="mt-16  md:mt-0">
        <img alt="logo" src={Logo} className="w-[120px] h-[50px]"/>
          {/* <p className="my-5 text-md">
          Let's take action together, for the sake of the forests, the Earth, and all living beings. Together, we can create a legacy of conservation and leave a greener, more vibrant world for future generations.
          </p> */}
          <p className="mt-4">© Wild Forest All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 item-center">
        <h4 className="font-bold">Links</h4>
          <div className="flex">
          <AiOutlineLinkedin className="my-5 w-[40px] h-[40px] hover:text-white transition duration-300 ease-in-out"/>
          <AiOutlineFacebook className="my-5 w-[40px] h-[40px] hover:text-white transition duration-300 ease-in-out"/>
          <AiOutlineInstagram className="my-5 w-[40px] h-[40px] hover:text-white transition duration-300 ease-in-out"/>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:mt-0 items-start">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex flex-col items-start justify-between">
          <p>tel: +3 8(097)425-6825</p>
          <p>email: WildForest@.com.ua</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;