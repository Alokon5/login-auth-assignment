import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import toast from 'react-hot-toast';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Signup successful');
      console.log("account created");
    } catch (error) {
      toast.error("Email already in use");
    }
  };

  return (
    <div className="  flex justify-center items-center  h-[90vh] ">
      <form onSubmit={handleSignup} className=' flex flex-col gap-4 p-4 w-[40%] h-[70%] overflow-hidden  bg-teal-600 justify-center items-center rounded-lg shadow-black shadow-lg'>
        <h2 className=' text-2xl font-bold'>Signup</h2>
        <div className="w-full p-3">
          <label className=' text-xl'>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className=' p-2 rounded-lg w-full'
          />
        </div>
        <div className="w-full p-3">
          <label className=' text-xl '>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className=' p-2 rounded-lg w-full'
          />
        </div>
        <button className='w-[95%] p-2 m-2 rounded-lg bg-teal-800 hover:bg-teal-400' type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
