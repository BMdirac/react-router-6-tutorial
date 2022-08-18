// *********************************** FINAL LEARNING PHASE  ************************

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({setUser}) => {
  // both are setup as control input //  useState([]) can also be used here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

//   invoke it 
const navigate = useNavigate() // navigate doesn't come with bracket because it is not refering to an id or parameter

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;


// *********************************** LEARNING PHASE 8b ************************

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Login = ({setUser}) => {
//   // both are setup as control input //  useState([]) can also be used here
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

// //   invoke it 
// const navigate = useNavigate() // navigate doesn't come with bracket because it is not refering to an id or parameter

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!name || !email) return;
//     setUser({ name: name, email: email });
//     navigate('/dashboard');
//   };

//   return (
//     <section className='section'>
//       <form className='form' onSubmit={handleSubmit}>
//         <h5>login</h5>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             name
//           </label>
//           <input
//             type='text'
//             className='form-input'
//             id='name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className='form-row'>
//           <label htmlFor='email' className='form-label'>
//             email
//           </label>
//           <input
//             type='email'
//             className='form-input'
//             id='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn btn-block'>
//           login
//         </button>
//       </form>
//     </section>
//   );
// };
// export default Login;


// *********************************** LEARNING PHASE 8a ************************

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Login = ({setUser}) => {
//   // both are setup as control input //  useState([]) can also be used here
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

// //   invoke it 
// const navigate = useNavigate() // navigate doesn't come with bracket because it is not refering to an id or parameter

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!name || !email) return;
//     setUser({ name: name, email: email });
//     navigate('/dashboard');
//   };

//   return (
//     <section className='section'>
//       <form className='form' onSubmit={handleSubmit}>
//         <h5>login</h5>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             name
//           </label>
//           <input
//             type='text'
//             className='form-input'
//             id='name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className='form-row'>
//           <label htmlFor='email' className='form-label'>
//             email
//           </label>
//           <input
//             type='email'
//             className='form-input'
//             id='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn btn-block'>
//           login
//         </button>
//       </form>
//     </section>
//   );
// };
// export default Login;

// *********************************** LEARNING PHASE 7b ************************

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Login = ({setUser}) => {
//   // both are setup as control input //  useState([]) can also be used here
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
 
// //   invoke it 
// const navigate = useNavigate() // navigate doesn't come with bracket because it is not refering to an id or parameter

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!name || !email) return;
//     setUser({ name: name, email: email });
//     navigate('/dashboard');
//   };

//   return (
//     <section className='section'>
//       <form className='form' onSubmit={handleSubmit}>
//         <h5>login</h5>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             name
//           </label>
//           <input
//             type='text'
//             className='form-input'
//             id='name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className='form-row'>
//           <label htmlFor='email' className='form-label'>
//             email
//           </label>
//           <input
//             type='email'
//             className='form-input'
//             id='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn btn-block'>
//           login
//         </button>
//       </form>
//     </section>
//   );
// };
// export default Login;

// *********************************** LEARNING PHASE 7a ************************

// import { useState } from 'react';
// const Login = () => {
//  // both are setup as control input //  useState([]) can also be used here
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(name, email)
//   };

//   return (
//     <section className='section'>
//       <form className='form' onSubmit={handleSubmit}>
//         <h5>login</h5>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             name
//           </label>
//           <input
//             type='text'
//             className='form-input'
//             id='name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className='form-row'>
//           <label htmlFor='email' className='form-label'>
//             email
//           </label>
//           <input
//             type='email'
//             className='form-input'
//             id='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn btn-block'>
//           login
//         </button>
//       </form>
//     </section>
//   );
// };
// export default Login;
