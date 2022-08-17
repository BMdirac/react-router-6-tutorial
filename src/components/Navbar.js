import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' style={{marginRight: "20px", textDecoration: "none"}}>Home</Link>
      <Link to='/about' style={{marginRight: "20px", textDecoration: "none"}}>About</Link>
      <Link to='/products' style={{marginRight: "20px", textDecoration: "none"}}>Products</Link>
    </nav>
  )
}

export default Navbar;

// *********************************** LEARNING PHASE 3 ************************

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <Link to='/' style={{marginRight: "20px", textDecoration: "none"}}>Home</Link>
//       <Link to='/about' style={{marginRight: "20px", textDecoration: "none"}}>About</Link>
//       <Link to='/products' style={{marginRight: "20px", textDecoration: "none"}}>Products</Link>
//     </nav>
//   )
// }

// export default Navbar;

// *********************** LEARNING PHASE 2 *********************

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <Link to='/' style={{marginRight: "20px", textDecoration: "none"}}>Home</Link>
//       <Link to='/about' style={{marginRight: "20px", textDecoration: "none"}}>About</Link>
//       <Link to='/products' style={{marginRight: "20px", textDecoration: "none"}}>Products</Link>
//     </nav>
//   )
// }

// export default Navbar;


// *********************** LEARNING PHASE 1 *********************

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <Link to='/'>Home</Link>
//       <Link to='/about'>About</Link>
//       <Link to='/products'>Products</Link>
//     </nav>
//   )
// }

// export default Navbar;