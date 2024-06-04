import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    console.log("success");
      
      toast.success('Login successful');
      

    } catch (error) {
      
      toast.error("wrong credentials");
      console.log("wrong credentials");
    }
  };

  return ( <div>
            <div className=" flex justify-center items-center  h-[90vh] ">
            <form onSubmit={handleLogin} className=' flex flex-col gap-4 p-4 w-[40%] overflow-hidden h-[70%]  bg-teal-600 shadow-black shadow-lg justify-center items-center rounded-lg'>
              <h2 className=' text-2xl font-bold'>Login</h2>
              <div className="w-full p-3">
                <label className=' text-xl '>Email</label>
                <br/>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className=' p-2 rounded-lg w-full'
                />
              </div>
              <div className="w-full p-3">
                <label className=' text-xl'>Password</label>
                <br/>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  className=' w-full p-2 rounded-lg'
                />
              </div>
              <button className='w-[95%] p-2 m-2 rounded-lg bg-teal-800 hover:bg-teal-400' type="submit">Login</button>
            </form>
        </div>
      </div> 
    
  )
};

export default Login;
