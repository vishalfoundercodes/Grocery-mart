import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import { SiThreads } from "react-icons/si";

export default function FooterSteps() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Copyright */}
        <p className="w-full md:w-auto text-sm text-gray-600 text-center md:text-left">
          © Grocery Commerce Private Limited, 2016-2025
        </p>

        {/* App Download */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          <span className="font-medium text-gray-800">Download App</span>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-800">
            <BiLogoApple className="text-lg" /> App Store
          </button>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-800">
            <BiLogoPlayStore className="text-lg" /> Google Play
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="w-full md:w-auto flex items-center gap-3 justify-center md:justify-end">
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80"
          >
            <SiThreads />
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto mt-4 px-4">
        <p className="text-xs text-gray-500 text-center md:text-left leading-relaxed">
          “GroceryMart” is owned & managed by "Grocery Commerce Private Limited"
          and is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </footer>
  );
}

