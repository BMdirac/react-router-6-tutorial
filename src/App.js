// (LEARNING PHASE 6b: ADDING MORE CODES TO THE SingleProduct.js BY IMPORTING THE data.js component)
// *********************************** LEARNING PHASE 6b ************************

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error"; 
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
        <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// (LEARNING PHASE 6: TO ITTERATE OVER THE PRODUCTS THAT ARE COMING FROM THE data.js component INTO THE Products.js component)
// (NOTICE THAT THE data.js has small case initial)
// *********************************** LEARNING PHASE 6a ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error"; 
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 5: HOW TO READ URL PARAMETER (PARAMS) AND HAVE DYNAMIC PAGES)
// (TO NAVIGATE TO THE SingleProduct component CREATED WE USE useParams in the component)
// *********************************** LEARNING PHASE 5 ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 4: IS ABOUT CREATING A StyledNavbar COMPONENT. IN IT WE USE NavLink FROM REACT ROUTER WHICH HELPS US TO STYLE OUR LINK)
// (STYLING CAN BE DONE WITH THE NORMAL CSS APPROACH OR USING ClassName)
// *********************************** LEARNING PHASE 4 ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// (LEARNING PHASE 3: IS ABOUT INDEX ROUTES. SETTING UP CONTENT IN THE HOME PAGE AND PREVENT SHARED LAYOUT ACROSS ALL NESTED PAGES IN THE HOME PAGE. SharedLayout components will be created)
// *********************************** LEARNING PHASE 3 ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />    {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// (LEARNING PHASE 2: SETTING UP THE Navbar COMPONENTS AND IMPORTING IT TO THE HOME PAGE)
// *********************************** LEARNING PHASE 2 ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Products from "./pages/Products";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} >
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// (LEARNING PHASE 1: NESTED PAGES)
// *********************************** LEARNING PHASE 1 ************************

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Error from "./pages/Error";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}>
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
