import React,{useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function AccountPrivacy() {
      const [expanded, setExpanded] = useState(false);

      const handleToggle = () => setExpanded(!expanded);

      const privacyText = `
    This privacy policy explains how we collect, use, process and disclose information about you.
    By using our website/ app/ platform and affiliated services, you consent to the terms of our
    privacy policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read
    this privacy policy to understand the collection, use, and disclosure of your information from
    time to time, to keep yourself updated with the changes and updates that we make to this policy.
    This privacy policy describes our privacy practices for all websites, products and services that
    are linked to it. However this policy does not apply to those affiliates and partners that have
    their own privacy policy. In such situations, we recommend that you read the privacy policy on
    the applicable site. Should you have any clarifications regarding this privacy policy, please
    write to us at info@grocerymart.com
  `;
  return (
    <div className="w-full px-4 py-1">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2">Account privacy and policy</h2>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-2">
        We i.e.{" "}
        <span className="font-medium">"Grocery Commerce Private Limited"</span>,
        are committed to protecting the privacy and security of your personal
        information. Your privacy is important to us and maintaining your trust
        is paramount.
      </p>
      <p className="text-gray-700 text-sm mb-2">
        {expanded && <p className="mb-4">{privacyText}</p>}
      </p>

      {/* Read More */}
      <button
        className="text-green-600 text-sm font-medium flex items-center mb-6"
        onClick={handleToggle}
      >
        {expanded ? (
          <>
            Read less <IoIosArrowUp className="ml-1 text-base" />
          </>
        ) : (
          <>
            Read more <IoIosArrowDown className="ml-1 text-base" />
          </>
        )}
      </button>

      {/* Delete Account Card */}
      {/* <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer hover:bg-gray-50 transition">
        <div className="flex items-center space-x-4">
          <div className="bg-red-50 text-red-600 p-2 rounded-full">
            <FaTrashAlt className="text-lg" />
          </div>
          <div>
            <p className="font-semibold text-sm">Request to delete account</p>
            <p className="text-gray-500 text-xs">
              Request to closure of your account
            </p>
          </div>
        </div>
        <FiChevronRight className="text-gray-400 text-xl" />
      </div> */}
    </div>
  );
}
