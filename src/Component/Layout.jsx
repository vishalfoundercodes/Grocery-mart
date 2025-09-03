// // import React from 'react'
// // import Header from './Header'
// // import Footer from './Footer'
// // export default function Layout() {
// //   return (
// //     <div>
// //       <Header/>
// //       <Footer/>
// //     </div>
// //   )
// // }

// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div>
//       <Header />

//       {/* This is where nested pages will render */}
//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />

      {/* This is where nested pages will render */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
