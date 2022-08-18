// *********************************** FINAL LEARNING PHASE  ************************

import { Link, useParams } from 'react-router-dom';
import products from '../data';
 
 const SingleProduct = () => {
    const { productId } = useParams();
     // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
    const product = products.find((product) => product.id === productId); 
    const { image, name } = product;
  return (
    <section className="section product">
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <Link to='/products' className='btn'>back to products</Link>
    </section>
  );
};

export default SingleProduct;


// *********************************** LEARNING PHASE 8b ************************

// import { Link, useParams } from 'react-router-dom';
// import products from '../data';
 
//  const SingleProduct = () => {
//     const { productId } = useParams();
//      // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
//     const product = products.find((product) => product.id === productId); 
//     const { image, name } = product;
//   return (
//     <section className="section product">
//         <img src={image} alt={name} />
//         <h5>{name}</h5>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;


// *********************************** LEARNING PHASE 8a ************************

// import { Link, useParams } from 'react-router-dom';
// import products from '../data';
 
//  const SingleProduct = () => {
//     const { productId } = useParams();
//      // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
//     const product = products.find((product) => product.id === productId); 
//     const { image, name } = product;
//   return (
//     <section className="section product">
//         <img src={image} alt={name} />
//         <h5>{name}</h5>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;

// *********************************** LEARNING PHASE 7b ************************

// import { Link, useParams } from 'react-router-dom';
// import products from '../data';
 
//  const SingleProduct = () => {
//     const { productId } = useParams();
//      // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
//     const product = products.find((product) => product.id === productId); 
//     const { image, name } = product;
//   return (
//     <section className="section product">
//         <img src={image} alt={name} />
//         <h5>{name}</h5>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;

// *********************************** LEARNING PHASE 7a ************************

// import { Link, useParams } from 'react-router-dom';
// import products from '../data';
 
//  const SingleProduct = () => {
//     const { productId } = useParams();
//      // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
//     const product = products.find((product) => product.id === productId); 
//     const { image, name } = product;
//   return (
//     <section className="section product">
//         <img src={image} alt={name} />
//         <h5>{name}</h5>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;


// *********************************** LEARNING PHASE 6b ************************

// import { Link, useParams } from 'react-router-dom';
// import products from '../data';
 
//  const SingleProduct = () => {
//     const { productId } = useParams();
//      // note that product in 'find' is as event parameter as such itself and every other product include in the find function can be replace with similar word or alphabet
//     const product = products.find((product) => product.id === productId); 
//     const { image, name } = product;
//   return (
//     <section className="section product">
//         <img src={image} alt={name} />
//         <h5>{name}</h5>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;


// *********************************** LEARNING PHASE 6a ************************

// import { Link, useParams } from 'react-router-dom';
 
//  const SingleProduct = () => {
//     console.log(useParams());
//     const { productId } = useParams();
//   return (
//     <section className="section product">
//         <h2>{ productId }</h2>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;

// *********************************** LEARNING PHASE 5 ************************

// import { Link, useParams } from 'react-router-dom';
 
//  const SingleProduct = () => {
//     console.log(useParams());
//     const { productId } = useParams();
//   return (
//     <section className="section product">
//         <h2>{ productId }</h2>
//         <Link to='/products' className='btn'>back to products</Link>
//     </section>
//   );
// };

// export default SingleProduct;