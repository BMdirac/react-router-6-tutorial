// *********************************** LEARNING PHASE 6a ************************

import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
    return (
      <section className="section">
        <h2>Products</h2>
        <div className="products">
        {/* note that product in 'map' is as event parameter as such itself and every other product included in the map function can be replace with similar word or alphabet */}
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>
                  more info
                </Link>
              </article>
            )
          })}
          </div>
      </section>
    )
};

export default Products;

// *********************************** LEARNING PHASE 5 ************************

// import React from "react";

// const Products = () => {
//     return (
//       <section className="section">
//         <h2>Products</h2>
//       </section>
//     )
// };

// export default Products;

// *********************************** LEARNING PHASE 4 ************************

// import React from "react";

// const Products = () => {
//     return (
//       <section className="section">
//         <h2>Products</h2>
//       </section>
//     )
// };

// export default Products;

// *********************************** LEARNING PHASE 3 ************************

// import React from "react";

// const Products = () => {
//     return (
//       <section className="section">
//         <p>Products</p>
//       </section>
//     )
// };

// export default Products;

// *********************** LEARNING PHASE 2 *********************

// import React from "react";

// const Products = () => {
//     return (
//       <section className="section">
//         <p>Products</p>
//       </section>
//     )
// };

// export default Products;

// *********************** LEARNING PHASE 1 *********************

// import React from "react";

// const Products = () => {
//     return (
//       <section className="section">
//         <p>Products</p>
//       </section>
//     );
// };

// export default Products;