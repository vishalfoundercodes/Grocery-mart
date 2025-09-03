import React, { useEffect, useRef, useState } from "react";
import apis from "../utlites/api"
import axios from "axios"
import { toast } from "react-toastify";
import { useLoginUserMutation } from "../store/api";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
export default function LoginModal({
  open,
  onClose,
  onContinue = (num) => console.log("continue", num),
}) {
  
const [loginUser, { isLoading }] = useLoginUserMutation();
const dispatch = useDispatch();
  const dialogRef = useRef(null);
  const [mobile, setMobile] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    // clear state when opened/closed
    if (!open) {
      setMobile("");
      setTouched(false);
      setError("");
    }
  }, [open]);

  // Helpers
  const onlyDigits = (value) => value.replace(/\D/g, "");
  const isValid = (value) => /^\d{10}$/.test(value);

  const handleChange = (e) => {
    const v = onlyDigits(e.target.value).slice(0, 10);
    setMobile(v);
    if (touched) {
      setError(isValid(v) ? "" : "Please enter a valid 10 digit mobile number");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(
      isValid(mobile) ? "" : "Please enter a valid 10 digit mobile number"
    );
  };

  const handleContinue = async() => {
    setTouched(true);
    if (!isValid(mobile)) {
      setError("Please enter a valid 10 digit mobile number");
      return;
    }
    setError("");
    onContinue(mobile);
    try {
      // console.log("login api",apis.login)
      const payload = {
        mobile: mobile
      };
      console.log("login api payload", payload);
      // const res = await axios.post(apis.login, payload);
      // console.log("login res:",res)
      const res = await loginUser(mobile).unwrap(); // gets raw data
      console.log("login res", res);
      if(res?.success===true|| res?.success===200||res?.status===200 ||res?.status==="200"){
        dispatch(setUser(res?.data));
        localStorage.setItem("userId", res?.data?.id);
        // console.log("login msg:", res?.data?.msg);
        toast.success(res?.msg || "Successfull login you are");
      }
      else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
 
    onClose();
  };

  if (!open) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 "
      aria-hidden={!open}
    >
      {/* translucent backdrop (clicking closes) */}
      <div
        className=" absolute inset-0 bg-black/40 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      {/* Modal container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Login modal"
        className="relative z-10 w-full max-w-xl mx-auto rounded-2xl bg-white shadow-xl overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* content wrapper */}
        <div className="p-6 sm:p-8 sm:pb-2">
          {/* top row: arrow + logo */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-gray-700 rounded-full p-2 hover:bg-gray-100"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11l3.707-3.707a1 1 0 011.414 1.414L5.414 11l2.293 2.293a1 1 0 010 1.414zM13 15a1 1 0 100-2h-2a1 1 0 100 2h2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="flex-1 flex justify-center">
              <div className="w-32 h-14 rounded-xl bg-yellow-300 flex items-center justify-center">
                <span className="font-bold text-lg">Grocery</span>
                <span className="font-bold text-lg text-green-600">mart</span>
              </div>
            </div>

            <div style={{ width: 40 }} />
          </div>

          {/* heading */}
          <div className="mt-2 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              India's last minute app
            </h2>
            <p className="mt-0 text-sm text-[#43403e]">Log in or Sign up</p>
          </div>

          {/* input + button */}
          <div className="mt-6 flex flex-col items-center">
            <div className="w-72">
              <div className="flex items-center gap-4 rounded-lg border border-gray-200 px-2 py-2">
                <span className="text-sm text-gray-700">+91</span>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  value={mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter mobile number"
                  className="w-full outline-none text-sm placeholder-gray-400"
                  aria-invalid={!!error}
                  aria-describedby="mobile-error"
                />
              </div>

              {/* error */}
              <div className="mt-2 text-center">
                {error ? (
                  <p id="mobile-error" className="text-xs text-red-600">
                    {error}
                  </p>
                ) : (
                  <div className="" />
                )}
              </div>

              {/* Continue button */}
              <button
                type="button"
                onClick={handleContinue}
                disabled={!isValid(mobile)}
                className={`mt-2 w-72 rounded-md py-2 font-medium ${
                  isValid(mobile)
                    ? "bg-gray-900 text-white"
                    : "bg-[#9c9c9c] text-white cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>

            {/* terms */}
            <p className="mt-4 text-xs text-center text-gray-400 w-96">
              By continuing, you agree to our{" "}
              <a href="#" className="underline">
                Terms of service
              </a>{" "}
              &amp;{" "}
              <a href="#" className="underline">
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
