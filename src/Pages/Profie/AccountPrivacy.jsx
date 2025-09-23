import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCart } from "../../Context/CartContext";

export default function AccountPrivacy() {
  const [expanded, setExpanded] = useState(false);
  const [privacyHtml, setPrivacyHtml] = useState("");
  const { policies } = useCart();

  const handleToggle = () => setExpanded(!expanded);

  useEffect(() => {
    const policy = async () => {
      try {
        const payload = { type: 3 };
        const res = await policies(payload);
        if (res?.success && res?.data?.description) {
          // ❌ Remove <style>, <html>, <head>, <body>
          const cleaned = res.data.description
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
            .replace(/<\/?(html|head|body)[^>]*>/gi, "");
          setPrivacyHtml(cleaned);
        }
      } catch (error) {
        console.log(error);
      }
    };
    policy();
  }, [policies]);

  return (
    <div className="w-full px-4 py-1">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2">Account privacy and policy</h2>

      {/* Privacy Policy Content */}
      <div
        className={`text-gray-700 text-sm mb-2 prose max-w-none transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-[3000px]" : "line-clamp-5 max-h-32"
        }`}
        dangerouslySetInnerHTML={{ __html: privacyHtml }}
      />

      {/* Read More / Less button */}
      {privacyHtml && (
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
      )}
    </div>
  );
}

