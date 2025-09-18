// import React, { useState } from "react";
// import { X, Home, Building2, Hotel, MapPin } from "lucide-react";

// export default function AddAddress({ openModal, setOpenModal }) {
//   const [selectedType, setSelectedType] = useState("Home");

//   return (
//     <>
//       {openModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
//           <div className="bg-white w-full max-w-4xl h-[90%] md:h-[85%] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
//             {/* Map */}
//             <div className="w-full md:w-1/2 relative h-64 md:h-auto">
//               <iframe
//                 title="map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!..." // add real URL
//                 className="w-full h-full border-0"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//               <button className="absolute bottom-4 left-4 bg-white border border-gray-300 px-3 py-1 rounded-lg text-sm flex items-center gap-2 shadow">
//                 <MapPin className="w-4 h-4 text-green-600" />
//                 Go to current location
//               </button>
//             </div>

//             {/* Form */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto relative">
//               {/* Header */}
//               <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
//                 <h2 className="text-lg font-semibold">
//                   Enter complete address
//                 </h2>
//                 <button
//                   onClick={() => setOpenModal(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* Address Type */}
//               <div>
//                 <p className="text-sm font-medium mb-2">Save address as *</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {[
//                     { type: "Home", icon: <Home className="w-4 h-4" /> },
//                     { type: "Work", icon: <Building2 className="w-4 h-4" /> },
//                     { type: "Hotel", icon: <Hotel className="w-4 h-4" /> },
//                     { type: "Other", icon: <MapPin className="w-4 h-4" /> },
//                   ].map((btn) => (
//                     <button
//                       key={btn.type}
//                       onClick={() => setSelectedType(btn.type)}
//                       className={`flex items-center gap-1 px-4 py-2 rounded-full border transition ${
//                         selectedType === btn.type
//                           ? "bg-green-100 border-green-500 text-green-600"
//                           : "border-gray-300 text-gray-600"
//                       }`}
//                     >
//                       {btn.icon}
//                       {btn.type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Inputs */}
//               <form className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Flat / House no / Building name *"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Floor (optional)"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                 />
//                 <input
//                   type="text"
//                   value="DR APJ Abdul Kalam Technical University, Sector 11, Jankipuram Vistar, Lucknow, Uttar Pradesh"
//                   readOnly
//                   className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Nearby landmark (optional)"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                 />

//                 <div className="pt-2 pb-2">
//                   <p className="text-sm text-gray-500 mb-1">
//                     Enter your details for seamless delivery experience
//                   </p>
//                   <input
//                     type="text"
//                     placeholder="Your name *"
//                     className="w-full border border-gray-300 rounded-lg p-3 mb-3"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Your phone number (optional)"
//                     className="w-full border border-gray-300 rounded-lg p-3"
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//                   >
//                     Save Address
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState } from "react";
// import { X, Home, Building2, Hotel, MapPin } from "lucide-react";

// export default function AddAddress({ openModal, setOpenModal }) {
//   const [selectedType, setSelectedType] = useState("Home");

//   // Auto-filled values
//   const [fullAddress, setFullAddress] = useState("");
//   const [loadingLocation, setLoadingLocation] = useState(false);

//   const handleGetCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser.");
//       return;
//     }

//     setLoadingLocation(true);

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//           );
//           const data = await res.json();

//           if (data && data.display_name) {
//             setFullAddress(data.display_name);
//             console.log("address:", data.display_name);
//           } else {
//             alert("Unable to fetch address.");
//           }
//         } catch (error) {
//           console.error("Reverse geocoding failed:", error);
//           alert("Failed to retrieve address.");
//         } finally {
//           setLoadingLocation(false);
//         }
//       },
//       (error) => {
//         console.error("Geolocation error:", error);
//         alert("Unable to detect location.");
//         setLoadingLocation(false);
//       }
//     );
//   };

//   return (
//     <>
//       {openModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
//           <div className="bg-white w-full max-w-4xl h-[90%] md:h-[85%] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
//             {/* Map */}
//             <div className="w-full md:w-1/2 relative h-64 md:h-auto">
//               <iframe
//                 title="map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.892573227758!2d80.938217!3d26.849681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1c9026d98d%3A0x14963e03c49daca9!2sDr.%20APJ%20Abdul%20Kalam%20Technical%20University!5e0!3m2!1sen!2sin!4v1666435651193"
//                 className="w-full h-full border-0"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//               <button
//                 className="absolute bottom-4 left-4 bg-white border border-gray-300 px-3 py-1 rounded-lg text-sm flex items-center gap-2 shadow"
//                 onClick={()=>{handleGetCurrentLocation();console.log("hii")}}
//               >
//                 <MapPin className="w-4 h-4 text-green-600" />
//                 {loadingLocation ? "Detecting..." : "Go to current location"}
//               </button>
//             </div>

//             {/* Form */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto relative">
//               <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
//                 <h2 className="text-lg font-semibold">
//                   Enter complete address
//                 </h2>
//                 <button
//                   onClick={() => setOpenModal(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* Address Type */}
//               <div>
//                 <p className="text-sm font-medium mb-2">Save address as *</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {[
//                     { type: "Home", icon: <Home className="w-4 h-4" /> },
//                     { type: "Work", icon: <Building2 className="w-4 h-4" /> },
//                     { type: "Hotel", icon: <Hotel className="w-4 h-4" /> },
//                     { type: "Other", icon: <MapPin className="w-4 h-4" /> },
//                   ].map((btn) => (
//                     <button
//                       key={btn.type}
//                       onClick={() => setSelectedType(btn.type)}
//                       className={`flex items-center gap-1 px-4 py-2 rounded-full border transition ${
//                         selectedType === btn.type
//                           ? "bg-green-100 border-green-500 text-green-600"
//                           : "border-gray-300 text-gray-600"
//                       }`}
//                     >
//                       {btn.icon}
//                       {btn.type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Inputs */}
//               <form className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Flat / House no / Building name *"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Floor (optional)"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                 />
//                 <input
//                   type="text"
//                   value={fullAddress}
//                   readOnly
//                   className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Nearby landmark (optional)"
//                   className="w-full border border-gray-300 rounded-lg p-3"
//                 />

//                 <div className="pt-2 pb-2">
//                   <p className="text-sm text-gray-500 mb-1">
//                     Enter your details for seamless delivery experience
//                   </p>
//                   <input
//                     type="text"
//                     placeholder="Your name *"
//                     className="w-full border border-gray-300 rounded-lg p-3 mb-3"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Your phone number (optional)"
//                     className="w-full border border-gray-300 rounded-lg p-3"
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//                   >
//                     Save Address
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { X, Home, Building2, Hotel, MapPin } from "lucide-react";

export default function AddAddress({
  openModal,
  setOpenModal,
  onSubmit,
  addressToEdit,
}) {
  const [selectedType, setSelectedType] = useState("Home");
  const [fullAddress, setFullAddress] = useState("");
  const [flat, setFlat] = useState("");
  const [floor, setFloor] = useState("");
  const [landmark, setLandmark] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  // Populate form if editing
  useEffect(() => {
    if (addressToEdit) {
      setSelectedType(addressToEdit.type || "Home");
      setFullAddress(addressToEdit.details || "");
      setFlat(addressToEdit.flat || "");
      setFloor(addressToEdit.floor || "");
      setLandmark(addressToEdit.landmark || "");
      setName(addressToEdit.name || "");
      setPhone(addressToEdit.phone || "");
      console.log("Editing address id:", addressToEdit.id);
    } else {
      setSelectedType("Home");
      setFullAddress("");
      setFlat("");
      setFloor("");
      setLandmark("");
      setName("");
      setPhone("");
    }

    
  }, [addressToEdit]);

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          if (data?.display_name) {
            setFullAddress(data.display_name);
          } else {
            alert("Unable to fetch address.");
          }
        } catch (error) {
          console.error("Reverse geocoding failed:", error);
          alert("Failed to retrieve address.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to detect location.");
        setLoadingLocation(false);
      }
    );
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const userId = localStorage.getItem("userId");

  // API format me payload
  const payload = {
    userid: userId,
    workplace: selectedType.toLowerCase(),
    house_no: flat,
    locality: fullAddress,
    mobile: phone || "",
    latitude: "788995588",
    longitude: "6896325625",
    landmark: landmark || "",
  };

  // agar edit kar rahe hain to id bhi bhejo
  if (addressToEdit) {
    payload.address_id = addressToEdit.id;
  }

  // 👇 Convert to FormData
  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    formData.append(key, payload[key]);
  });

 console.log("Submitting address:", Object.fromEntries(formData.entries()));
  onSubmit(formData);
};


 
  if (!openModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
      <div className="bg-white w-full max-w-4xl h-[90%] md:h-[85%] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Map */}
        <div className="w-full md:w-1/2 relative h-auto md:h-auto">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.892573227758!2d80.938217!3d26.849681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1c9026d98d%3A0x14963e03c49daca9!2sDr.%20APJ%20Abdul%20Kalam%20Technical%20University!5e0!3m2!1sen!2sin!4v1666435651193"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <button
            className="absolute bottom-4 left-4 bg-white border border-gray-300 px-3 py-1 rounded-lg text-sm flex items-center gap-2 shadow"
            onClick={handleGetCurrentLocation}
          >
            <MapPin className="w-4 h-4 text-green-600" />
            {loadingLocation ? "Detecting..." : "Go to current location"}
          </button>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full p-0 md:p-0 flex flex-col h-full bg-white">
            {/* Header */}
            <div className="p-2 md:p-6 sticky top-0 bg-white z-20 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Enter complete address</h2>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body (scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {/* Address Type */}
              <div>
                <p className="text-sm font-medium mb-2">Save address as *</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { type: "Home", icon: <Home className="w-4 h-4" /> },
                    { type: "Work", icon: <Building2 className="w-4 h-4" /> },
                    { type: "Hotel", icon: <Hotel className="w-4 h-4" /> },
                    { type: "Other", icon: <MapPin className="w-4 h-4" /> },
                  ].map((btn) => (
                    <button
                      // key={btn.type}
                      type="button"
                      onClick={() => setSelectedType(btn.type)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-full border transition ${
                        selectedType === btn.type
                          ? "bg-green-100 border-green-500 text-green-600"
                          : "border-gray-300 text-gray-600"
                      }`}
                    >
                      {btn.icon}
                      {btn.type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <form
                id="addressForm"
                className="space-y-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Flat / House no / Building name *"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                  value={flat}
                  onChange={(e) => setFlat(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Floor (optional)"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                />
                <input
                  type="text"
                  value={fullAddress}
                  placeholder="Full Address"
                  required
                  onChange={(e) => setFullAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Nearby landmark (optional)"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />

                <div className="pt-2 pb-40 md:pb-1">
                  <p className="text-sm text-gray-500 mb-1">
                    Enter your details for seamless delivery experience
                  </p>
                  <input
                    type="text"
                    placeholder="Your name *"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-3"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Your phone number (optional)"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 sticky bottom-0 bg-white z-20 border-t border-gray-200">
              <button
                type="submit"
                // onClick={handleSubmit}
                form="addressForm"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {addressToEdit ? "Update Address" : "Save Address"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


