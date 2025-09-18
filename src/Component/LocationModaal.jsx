// import React from "react";

// export default function LocationModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 flex items-start justify-start sm:pl-[50px] pt-[100px] z-50 bg-black/40 backdrop-blur-sm">
//       <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] sm:max-w-[450px] p-6 relative bg-black/40 backdrop-blur-sm">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-black"
//         >
//           ✕
//         </button>
//         <h2 className="text-lg font-semibold mb-4">Change Location</h2>
//         <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
//           <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-nowrap ">
//             Detect my location
//           </button>
//           <span className="text-gray-400">OR</span>
//           <input
//             type="text"
//             placeholder="Search delivery location"
//             className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLocation } from "../Context/LocationContext";
import { X, Home, Building2, Hotel, MapPin } from "lucide-react";
import { toast } from "react-toastify";
// Fix Leaflet marker icon (needed when using with Webpack/CRA/Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});



export default function LocationModal({ open, onClose }) {
  // const [location, setLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);
// const { setLocation, setAddress } = useLocation();
const [loading, setLoading] = useState(false);
const { setLocation, setAddress, location } = useLocation();
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [fullAddress,setFullAddress]=useState()


  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      console.log("Full Address:", data.display_name);
    } catch (error) {
      console.error("Reverse geocoding error:", error);
    }
  };
// const reverseGeocode = async (lat, lng) => {
//   try {
//     // const apiKey = "YOUR_GOOGLE_API_KEY";
//     // const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY; 
//     const apiKey = "AIzaSyBsDd1Cg9eb2rueQSvlYp9onFOi5XQGJjc"; 
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
//     );
//     const data = await response.json();
//     if (data.status === "OK") {
//       const fullAddress = data.results[0].formatted_address;
//       setAddress(fullAddress);
//       console.log("Full Address:", fullAddress);
//     } else {
//       console.error("Geocoding failed:", data);
//       console.log(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
//       );
//     }
//   } catch (error) {
//     console.error("Google Geocoding error:", error);
//   }
// };


  // const handleDetectLocation = () => {
  //   if (!navigator.geolocation) {
  //     alert("Geolocation is not supported by your browser.");
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const coords = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //       setLocation(coords);
  //       setMapVisible(true);
  //     },
  //     (error) => {
  //       console.error("Error detecting location:", error);
  //       alert("Failed to detect location.");
  //     }
  //   );
  // };

const handleDetectLocation = () => {
   setLoading(true);
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setLocation(coords); // 👈 Store in context

    // Immediately reverse geocode
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.display_name); // 👈 Also store address
        console.log("current location:", data.display_name);
        setLoading(false); // ✅ Stop loading
        setMapVisible(true); // ✅ Show map now
        onClose();
      })
      .catch((error) => {
        console.error("Error in reverse geocoding:", error);
        setLoading(false); // even on error
      });
  },
      (error) => {
      console.error("Error detecting location:", error);
      alert("Failed to detect location.");
      setLoading(false); // even on error
    }

);
};


const handleGetLocation = () => {
  if (location) {
    console.log("Current Location:", location);
    reverseGeocode(location.lat, location.lng);
  } else {
    // alert("Location not detected yet.");
    toast.error("Location not detected yet.");
  }
};

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
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-start sm:pl-[50px] pt-[100px] z-50 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] sm:max-w-[450px] p-6 relative">
        {loading ? (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              className="animate-spin h-5 w-5 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Detecting your location...
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4">Change Location</h2>

            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap mb-4">
              <button
                onClick={handleDetectLocation}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-nowrap"
              >
                Detect my location
              </button>
              <span className="text-gray-400">OR</span>
              <input
                type="text"
                placeholder="Search delivery location"
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Show map after location is detected */}
            {/* {mapVisible && location && (
              <div className="w-full h-52 rounded overflow-hidden mb-4 border">
                 <MapContainer
                  center={[location.lat, location.lng]}
                  zoom={16}
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[location.lat, location.lng]} />
                </MapContainer> 
                <div className="w-full  relative h-full">
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
                    {loadingLocation
                      ? "Detecting..."
                      : "Go to current location"}
                  </button>
                </div>
              </div>
            )} */}

            {/* Show "Get My Current Location" button after map appears */}
            {/* {mapVisible && (
              <button
                onClick={handleGetLocation}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Get My Current Location
              </button>
            )} */}
          </>
        )}
      </div>
    </div>
  );
}
