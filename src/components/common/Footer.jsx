import React from 'react';
import {
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoWhatsapp,
  IoMailOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="w-full flex flex-col md:flex-row bg-transparent p-8 lg:p-12 lg:px-16 gap-8 lg:gap-16">
        <div className="w-full md:w-[50%] lg:w-[30%]">
          <p className="text-white font-bold text-3xl lg:text-4xl mb-4">
            Get in Touch
          </p>
          <p className="text-white text-sm">
            Feel free to get in touch with us to discuss your car rental needs.
            We are here to provide you with the right solutions and help you
            find the ideal vehicle for any occasion.
          </p>
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%] text-white flex flex-col gap-4">
          <div className="flex gap-4 items-center mb-4">
            <IoMailOutline size={24} />
            <a
              href="mailto:admin@rent1st.com"
              className="text-white font-medium lg:text-lg"
            >
              admin@rent1st.com
            </a>
          </div>
          <div className="flex gap-4 items-start mb-4">
            <IoLogoWhatsapp size={24} />
            <a
              href="https://wa.me/+6282168683898"
              className="text-white font-medium lg:text-lg"
              target="_blank"
              rel="noreferrer"
            >
              +62 821 6868 3898
            </a>
          </div>
          <div className="w-full flex gap-4 items-start mb-4">
            <div className="w-[7%]">
              <IoLocationOutline size={24} />
            </div>
            <a
              href="https://maps.app.goo.gl/cP3qdkUFJwwvJXxk7"
              className="w-[93%] text-white font-medium lg:text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Showroom Metro Motorcars, Komp. Pertokoan Seruni, Jalan Laksamana
              Bintan, Sungai Panas, Batam Kota, Batam, Kepulauan Riau (29411)
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[30%] flex flex-col items-center lg:items-start">
          <p className="text-white font-bold lg:text-xl lg:ml-3 mb-4">
            Follow Us
          </p>
          <div className="flex gap-4 text-white">
            <Link
              to="https://www.instagram.com/transrental.co/"
              target="_blank"
            >
              <button
                className="rounded-full hover:bg-[#252525] p-3 transition-all duration-300"
                title="Instagram"
                aria-label="Instagram"
              >
                <IoLogoInstagram size={20} />
              </button>
            </Link>
            <Link to="https://www.tiktok.com/@transrentalco" target="_blank">
              <button
                className="rounded-full hover:bg-[#252525] p-3 transition-all duration-300"
                title="Tiktok"
                aria-label="Tiktok"
              >
                <IoLogoTiktok size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start bg-transparent text-white font-medium border-t border-white p-4 px-8 lg:px-16">
        <span>
          {new Date().getFullYear()} &copy; Trans Rental | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
