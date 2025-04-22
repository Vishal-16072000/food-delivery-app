import React, { useContext, useState } from "react";
import { SiFoodpanda } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { dataContext } from "../context/UserContext";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(dataContext);
    const {loading, setLoading} = context;
    // console.log(context);

    const navigate = useNavigate();

    const login = async () => {
        if(email=="" || password==""){
            return toast.error("All fields are required");
        }
        setLoading(true);
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result));
            toast.success("Login successfull");
            setLoading(false);
            navigate('/home');
        } catch(error) {
            console.log(error);
            toast.error("Wrong credentails");
            setLoading(false);
        }
    }
  return (
    <div className="h-screen bg-slate-100">
    <div className='w-full h-auto bg-slate-100 flex px-3 py-2 md:px-10 '>
    <div className=' w-[100px] h-[100px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <SiFoodpanda className='w-[70px] h-[100px] text-green-500'/>
            </div>
    </div>
    <div className=" p-3 bg-slate-100 w-full h-auto flex justify-center items-center mt-10">
      {loading && <Loader/>}
      <div className=" bg-white w-96 px-5 py-8 rounded-lg shadow-lg flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className=" text-gray-400 font-semibold">Email id</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className=" border rounded-lg p-1 outline-none" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label  className="text-gray-400 font-semibold">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg p-1 outline-none" type="password" placeholder="Enter password" />
        </div>

        <div className="mt-8">
          <button onClick={login} className=" bg-green-400 hover:bg-green-500 w-full rounded-lg p-1 text-slate-50 text-lg font-bold">Login</button>
        <div className="flex justify-end pr-2 gap-1">
          <span>Not registered ? </span>
          <Link to='/signup'><span className=" font-semibold">Sign up</span></Link>
        </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Login;
