import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

// whatever structure we setup over here will be the result in the browser

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;

// *********************************** LEARNING PHASE 3 ************************

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// // whatever structure we setup over here will be the result in the browser

// const SharedLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// export default SharedLayout;