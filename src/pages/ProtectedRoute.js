// *********************************** FINAL LEARNING PHASE  ************************

import React from 'react';
import { Navigate } from "react-router-dom";

// children here is the Dashboard page
const ProtectedRoute = ({ children, user }) => {
    if(!user) {
        return <Navigate to='/' />;
    }
  return children;
};

export default ProtectedRoute;

// *********************************** LEARNING PHASE 8b ************************

// import React from 'react';
// import { Navigate } from "react-router-dom";

// // children here is the Dashboard page
// const ProtectedRoute = ({ children, user }) => {
//     if(!user) {
//         return <Navigate to='/' />;
//     }
//   return children;
// };

// export default ProtectedRoute;


// *********************************** LEARNING PHASE 8a ************************

// import React from 'react'

// const ProtectedRoute = () => {
//   return (
//     <div>ProtectedRoute</div>
//   )
// };

// export default ProtectedRoute;

