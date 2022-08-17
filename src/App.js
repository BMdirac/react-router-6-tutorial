import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />  {/* index will directly match the SharedLayout path */}
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



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
//         <Route path='/' element={<SharedLayout />} >
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
