// *********************************** LEARNING PHASE 6a ************************

import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Home</NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>About</NavLink>
      <NavLink to='/products' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Products</NavLink>
    </nav>
  )
}

export default StyledNavbar;


// *********************************** LEARNING PHASE 5 ************************

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const StyledNavbar = () => {
//   return (
//     <nav className='navbar'>
//       <NavLink to='/' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Home</NavLink>
//       <NavLink to='/about' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>About</NavLink>
//       <NavLink to='/products' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Products</NavLink>
//     </nav>
//   )
// }

// export default StyledNavbar;

// *********************************** LEARNING PHASE 4 ************************

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const StyledNavbar = () => {
//   return (
//     <nav className='navbar'>
//       <NavLink to='/' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Home</NavLink>
//       <NavLink to='/about' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>About</NavLink>
//       <NavLink to='/products' className={({ isActive }) => (isActive ? 'Link active' : 'Link' )}>Products</NavLink>
//     </nav>
//   )
// }

// export default StyledNavbar;