import React from 'react';
import {
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoWhatsapp,
  IoMailOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import useIconSize from '../../hooks/useIconSize';

const Footer = () => {
  const iconSize = useIconSize();
  return (
    <footer className="border-t border-white/50">
      <div className="w-full flex flex-col lg:flex-row bg-transparent pt-8 px-4 md:px-10 gap-8 lg:gap-16">
        <div className="w-full lg:w-[30%]">
          <p className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl mb-4">
            Get in Touch
          </p>
          <p className="text-white xl:text-lg text-sm">
            Feel free to get in touch with us to discuss your car rental needs.
            We are here to provide you with the right solutions and help you
            find the ideal vehicle for any occasion.
          </p>
        </div>
        <div className="w-full lg:w-[40%] text-white flex flex-col gap-4">
          <div className="flex gap-4 items-center mb-4">
            <IoMailOutline size={iconSize} />
            <a
              href="mailto:admin@rent1st.com"
              className="text-white font-medium lg:text-lg"
            >
              admin@rent1st.com
            </a>
          </div>
          <div className="flex gap-4 items-start mb-4">
            <IoLogoWhatsapp size={iconSize} />
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
            <div className="lg:w-[7%] xl:w-fit">
              <IoLocationOutline size={iconSize} />
            </div>
            <a
              href="https://maps.app.goo.gl/cP3qdkUFJwwvJXxk7"
              className="lg:w-[93%] xl:w-full text-white font-medium lg:text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Showroom Metro Motorcars, Komp. Pertokoan Seruni, Jalan Laksamana
              Bintan, Sungai Panas, Batam Kota, Batam, Kepulauan Riau (29411)
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start">
          <p className="text-white font-bold lg:text-xl xl:text-2xl lg:ml-3 lg:mb-4">
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
                <IoLogoInstagram size={iconSize} />
              </button>
            </Link>
            <Link to="https://www.tiktok.com/@transrentalco" target="_blank">
              <button
                className="rounded-full hover:bg-[#252525] p-3 transition-all duration-300"
                title="Tiktok"
                aria-label="Tiktok"
              >
                <IoLogoTiktok size={iconSize} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end bg-transparent text-white xl:text-lg pt-4 py-2 px-4 md:px-10 xl:py-4">
        <span>
          {new Date().getFullYear()} &copy; Trans Rental | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
