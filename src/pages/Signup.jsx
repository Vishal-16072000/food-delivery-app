import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dataContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../components/Loader';
import { SiFoodpanda } from "react-icons/si";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(dataContext);

    const { loading, setLoading } = context; 
    const navigate = useNavigate();

    const signup = async () => {
        setLoading(true);
        if(name == "" || email=="" || password==""){
           return toast.error("All fields are required");
        }

        try{
            const users = await createUserWithEmailAndPassword(auth, email, password);
            console.log(users);

            const user = {
                name : name,
                uid : users.user.uid,
                email : users.user.email,
                time : Timestamp.now()
            }

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup successful");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate('/login');
        }catch(error){
            console.log(error);
            toast.error("try again");
        }
    }

  return (
    <div className="h-screen bg-slate-100">
        <div className='w-full h-auto bg-slate-100 flex px-3 py-2 md:px-10 '>
        <div className=' w-[100px] h-[100px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                    <SiFoodpanda className='w-[70px] h-[100px] text-green-500'/>
                </div>
        </div>

    <div className=" p-5 bg-slate-100 w-full h-auto flex justify-center items-center">
      {loading && <Loader/>}
      <div className=" bg-white w-96 px-5 py-8 rounded-lg shadow-lg flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className=" text-gray-400 font-semibold">Full name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className=" border rounded-lg p-1 outline-none" type="email" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label className=" text-gray-400 font-semibold">Email id</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className=" border rounded-lg p-1 outline-none" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label  className="text-gray-400 font-semibold">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border rounded-lg p-1 outline-none" type="password" placeholder="Enter password" />
        </div>

        <div className="mt-8">
          <button onClick={signup} className=" bg-green-400 hover:bg-green-500 w-full rounded-lg p-1 text-slate-50 text-lg font-bold">Signup</button>
        <div className="flex justify-end pr-2 gap-1">
          <span>Already registered ? </span>
          <Link to='/login'><span className=" font-semibold">Login</span></Link>
        </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Signup