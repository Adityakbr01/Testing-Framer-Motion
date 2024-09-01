import React from "react";
import { motion } from "framer-motion";

import google from "../assets/Google Fonts.svg";
import Gumroad from "../assets/Gumroad.svg";
import Intercom from "../assets/Intercom.svg";
import Metamask from "../assets/Metamask.svg";
import PayPal from "../assets/PayPal.svg";

const Marquee = () => {
  const images = [google, Gumroad, Intercom, Metamask, PayPal];

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="relative flex justify-between w-full px-6 mx-10"></div>
    </div>
  );
};

export default Marquee;
