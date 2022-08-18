// (FINAL LEARNING PHASE)

/* 
setting up the product and the productId as a nested route.
Basically we want to use the nested route approach. The functionality is the same 
*/

// (SharedProductLayout component is created)
// *********************************** FINAL LEARNING PHASE  ************************

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error"; 
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
  // state value 
  const [ user, setUser ] = useState(null); // useState([]) can also be used here
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
        <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
        <Route path='about' element={<About />} />

        <Route path='products' element={<SharedProductLayout />} >
        <Route index element={<Products />} />
        <Route path=':productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
        </Route>
        
        <Route path='login' element={<Login setUser={setUser}/>} />
        <Route path='dashboard'
               element={
              <ProtectedRoute user={user}>
                 <Dashboard user={user}/>
              </ProtectedRoute>
        } />
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// (LEARNING PHASE 8b: setting ProtectedRoute component functionality)
// *********************************** LEARNING PHASE 8b ************************

// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error"; 
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";

// function App() {
//   // state value 
//   const [ user, setUser ] = useState(null); // useState([]) can also be used here
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='login' element={<Login setUser={setUser}/>} />
//         <Route path='dashboard'
//                element={
//               <ProtectedRoute user={user}>
//                  <Dashboard user={user}/>
//               </ProtectedRoute>
//         } />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 8: RESTRICTING ACCESS TO CERTAIN ROUTE)
// (ProtectedRoute component is created)
// *********************************** LEARNING PHASE 8a ************************

// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error"; 
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";

// function App() {
//   // state value 
//   const [ user, setUser ] = useState(null); // useState([]) can also be used here
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='login' element={<Login setUser={setUser}/>} />
//         <Route path='dashboard'
//                element={
//               <ProtectedRoute user={user}>
//                  <Dashboard user={user}/>
//               </ProtectedRoute>
//         } />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 7b: Use OF useNavigate in the Login component and the use of props from App.js to the Login.js and Dashboard.js)
// (HERE PROGRAMMATIC NAVIGATION IS DONE WITH THE USE OF useNavigate)
// *********************************** LEARNING PHASE 7b ************************

// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error"; 
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";


// function App() {
//   // state value
//   const [ user, setUser ] = useState(null);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='login' element={<Login setUser={setUser}/>} />
//         <Route path='dashboard' element={<Dashboard user={user}/>} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 7: TO NAVIGATE AROUND OUR PROJECT PROGRAMMATICALLY)
// (WE USE THE useState. Login and Dashboard components are created and added)
// *********************************** LEARNING PHASE 7a ************************

// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./pages/Error"; 
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";


// function App() {
//   // state value
//   const [ user, setUser ] = useState(null);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<SharedLayout />} > {/* what you want to share across those pages */}
//         <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
//         <Route path='about' element={<About />} />
//         <Route path='products' element={<Products />} />
//         <Route path='products/:productId' element={<SingleProduct />} /> {/* any of these can also be used ':productId' or 'products/stat/:productId' */}
//         <Route path='login' element={<Login setUser={setUser}/>} />
//         <Route path='dashboard' element={<Dashboard user={user}/>} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// (LEARNING PHASE 6b: ADDING MORE CODES TO THE SingleProduct.js BY IMPORTING THE data.js component)
// *********************************** LEARNING PHASE 6b ************************

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
