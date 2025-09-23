
// import React, { useState,useEffect } from "react";
// import { toast } from "react-toastify";
// export default function OTPVerification({ mobile, onClose, handleVerifyOtp }) {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [timer, setTimer] = useState(30);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(countdown);
//   }, []);

//   const handleOTPChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1); // Only one digit
//     setOtp(newOtp);
//     // Move focus to next input
//     if (value && index < 3) {
//       document.getElementById(`otp-${index + 1}`)?.focus();
//       //   onclose();
//     }
//   };

//   // ✅ Auto-close when all digits are filled
//   useEffect(() => {
//     if (otp.every((digit) => digit !== "")) {
//       // Optional: verify OTP here first
//       handleVerifyOtp(otp);
//       setTimeout(() => {
//         onClose(); // 👈 closes the modal
//         // toast.success("OTP Verified!");
//       }, 500); // Small delay for user feedback
//     }
//   }, [otp, onClose]);

//   return (
//     <div className="text-center">
//       {/* <h2 className="text-xl font-semibold mb-2">OTP Verification</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         We have sent a verification code to <br />
//         <strong>+91-{mobile}</strong>
//       </p> */}

//       {/* OTP Input Fields */}
//       <div className="flex justify-center gap-3 my-4">
//         {otp.map((digit, i) => (
//           <input
//             key={i}
//             id={`otp-${i}`}
//             type="text"
//             value={digit}
//             onChange={(e) => handleOTPChange(i, e.target.value)}
//             maxLength={1}
//             className="w-10 h-12 text-center border rounded text-lg"
//           />
//         ))}
//       </div>

//       {/* Resend code */}
//       <p className="text-sm text-gray-500">
//         Resend Code {timer > 0 ? `in (${timer} secs)` : ""}
//       </p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function OTPVerification({ mobile, handleVerifyOtp }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only one digit
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 3 && value) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // ✅ Auto verify when all digits filled
  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleVerifyOtp(otp.join("")); // parent me verify call
    }
  }, [otp]);

  return (
    <div className="text-center">
      <div className="flex justify-center gap-3 my-4">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            value={digit}
            onChange={(e) => handleOTPChange(i, e.target.value)}
            maxLength={1}
            className="w-10 h-12 text-center border rounded text-lg"
          />
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Resend Code {timer > 0 ? `in (${timer} secs)` : ""}
      </p>
    </div>
  );
}
