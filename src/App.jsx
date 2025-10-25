// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import "./App.css";
// import Layout from "./Component/Layout";

// function App() {

//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout/>} />
//         <Route path="/page1" element={<div>Page 1</div>} />
//         </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Page1 from "./Pages/Page1"; // Import your pages
import Page2 from "./Pages/Page2"; // You can add more later
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import AllCategories from "./Pages/Categories/AllCategories";
import ProfileHome from "./Pages/Profie/ProfileHome";
import ProfilePage from "./Pages/Profie/ProfilePage";
import OrderDetails from "./Pages/Profie/OrderDetails";
import CategoryWithProducts from "./Pages/ProductCategory/CategoryProduct";
import CategoryList from "./Pages/ProductCategory/CategoryList";
import SeeAll from "./Pages/SeeAll/SeeAll";
import ProductDetails from "./Pages/SeeAll/ProductDetails";
import SearchPage from "./Component/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes inside Layout */}
          <Route
            index
            element={
              <div>
                <Home />
              </div>
            }
          />
          {/* <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="allcategories" element={<AllCategories />} />
          <Route path="profile" element={<ProfileHome />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="categoryProduct" element={<CategoryWithProducts />} />
          <Route path="categoryList" element={<CategoryList />} />
          <Route path="seeall" element={<SeeAll />} />
          {/* <Route path="/order/:id" element={<OrderDetails />} /> */}
          {/* <Route path="seeall" element={<SeeAll />} /> */}

          {/* ✅ Add this new route here */}
          <Route path="/seeall/:categoryTitle" element={<SeeAll />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchPage />} />


          {/* <Route
            path="category/:categoryName"
            element={<SeeAll allCategories={AllCategories} />}
          /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
