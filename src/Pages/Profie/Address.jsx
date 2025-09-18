// import React, { useState } from "react";
// import { MoreVertical, Home } from "lucide-react";
// import AddAddress from "./AddAdress";

// export default function Address() {
//   const [openAddress, setOpenAddress] = useState(false);
//   const [editAddress, setEditAddress] = useState(null); // address to edit
//   const [dropdownOpenId, setDropdownOpenId] = useState(null); // track which dropdown is open

//   const addresses = [
//     {
//       id: 1,
//       type: "Home",
//       details:
//         "Vishal Mishra, Ajay Gupta, Sector-A, Sector K, Aliganj, Lucknow",
//     },
//     // Add more if needed
//   ];

//   const handleEdit = (address) => {
//     setEditAddress(address);
//     setOpenAddress(true);
//     setDropdownOpenId(null); // close dropdown
//   };

//   const handleDelete = (id) => {
//     console.log("Delete address id:", id);
//     setDropdownOpenId(null);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {/* Heading */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-xl font-semibold text-gray-900">My addresses</h1>
//         <button
//           className="flex items-center text-green-600 font-medium hover:underline"
//           onClick={() => {
//             setOpenAddress(true);
//             setEditAddress(null); // add new, not edit
//           }}
//         >
//           <span className="text-xl mr-1">+</span> Add new address
//         </button>
//       </div>

//       {/* Address List */}
//       <div className="space-y-4">
//         {addresses.map((address) => (
//           <div
//             key={address.id}
//             className="relative flex items-start justify-between p-4 rounded-lg border border-gray-200"
//           >
//             {/* Icon + Address Info */}
//             <div className="flex items-start gap-3">
//               <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
//                 <Home className="w-5 h-5 text-yellow-600" />
//               </div>
//               <div>
//                 <h2 className="font-medium text-gray-900">{address.type}</h2>
//                 <p className="text-sm text-gray-500 leading-snug">
//                   {address.details}
//                 </p>
//               </div>
//             </div>

//             {/* More Options */}
//             <div className="relative">
//               <button
//                 className="text-gray-500 hover:text-gray-700"
//                 onClick={() =>
//                   setDropdownOpenId(
//                     dropdownOpenId === address.id ? null : address.id
//                   )
//                 }
//               >
//                 <MoreVertical className="w-5 h-5" />
//               </button>

//               {/* Dropdown */}
//               {dropdownOpenId === address.id && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
//                   <button
//                     className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                     onClick={() => handleEdit(address)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
//                     onClick={() => handleDelete(address.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add/Edit Address Modal */}
//       {openAddress && (
//         <AddAddress
//           onClose={() => setOpenAddress(false)}
//           openModal={openAddress}
//           setOpenModal={setOpenAddress}
//           addressToEdit={editAddress} // pass the data
//         />
//       )}
//     </div>
//   );
// }


import React, { useState , useEffect} from "react";
import { MoreVertical, Home } from "lucide-react";
import AddAddress from "./AddAdress";
import { useAddress } from "../../Context/AddressContext";
import { useCart } from "../../Context/CartContext";

export default function Address() {
  const [openAddress, setOpenAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const { addresses, fetchAddress, addAddress, deleteAddress } = useCart();
  useEffect(()=>{
    const userId = localStorage.getItem("userId");  
    if(userId){
      fetchAddress(userId,true);
    }
  },[])


  // const { addresses, addAddress, deleteAddress, updateAddress } = useAddress();


  // handle add or update address
  // const handleAddAddress = (newAddress) => {
  //   if (editAddress) {
  //     // update existing
  //     updateAddress({ ...newAddress, id: editAddress.id });
  //   } else {
  //     // add new with id
  //     addAddress({ ...newAddress, id: Date.now() });
  //   }
  //   setOpenAddress(false);
  //   setEditAddress(null);
  // };

  const handleAddAddress = async (newAddress) => {
    await addAddress(newAddress); // ✅ API call hoga
      // console.log("📦 Received newAddress as FormData:");
      // for (let [key, value] of newAddress.entries()) {
      //   console.log(`${key}: ${value}`);
      // }
    setOpenAddress(false);
    setEditAddress(null);
  };


  const handleEdit = (address) => {
    setEditAddress(address);
    setOpenAddress(true);
    setDropdownOpenId(null);
  };

  const handleDelete = (id) => {
    const userId = localStorage.getItem("userId");
    const payload={
      userid:userId,
      id:id
    }
    deleteAddress(payload);
    setDropdownOpenId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">My addresses</h1>
        <button
          className="flex items-center text-green-600 font-medium hover:underline"
          onClick={() => {
            setOpenAddress(true);
            setEditAddress(null);
          }}
        >
          <span className="text-xl mr-1">+</span> Add new address
        </button>
      </div>

      {/* <div className="space-y-4">
        {addresses.map((address) => (
          <div
            // key={address.id}
            className="relative flex items-start justify-between p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
                <Home className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="font-medium text-gray-900">{address.type}</h2>
                <p className="text-sm text-gray-500 leading-snug">
                  {address.details}
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setDropdownOpenId(
                    dropdownOpenId === address.id ? null : address.id
                  )
                }
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {dropdownOpenId === address.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                  <button
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    onClick={() => handleEdit(address)}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => handleDelete(address.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div> */}

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="relative flex items-start justify-between p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
                <Home className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                {/* Name + Mobile */}
                <h2 className="font-medium text-gray-900">
                  {address.deliveryname} ({address.mobile})
                </h2>
                {/* Address Details */}
                <p className="text-sm text-gray-500 leading-snug">
                  {address.house_no}, {address.landmark}, {address.locality}
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setDropdownOpenId(
                    dropdownOpenId === address.id ? null : address.id
                  )
                }
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {dropdownOpenId === address.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                  <button
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    onClick={() => {handleEdit(address),console.log(address)}}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                    onClick={() =>{
                      handleDelete(address.id),
                      console.log("address.id:", address.id);}}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {openAddress && (
        // <AddAddress
        //   openModal={openAddress}
        //   setOpenModal={setOpenAddress}
        //   onSubmit={handleAddAddress}
        //   addressToEdit={editAddress}
        // />
        <AddAddress
          openModal={openAddress}
          setOpenModal={setOpenAddress}
          onSubmit={handleAddAddress}
          addressToEdit={editAddress}
        />
      )}
    </div>
  );
}

