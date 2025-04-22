import React, { useContext, useEffect, useState } from 'react'
import { SiFoodpanda } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

const Nav = () => {
  let items = useSelector((state) => state.cart);

  
 let {input, setInput, showCart, setShowCart} = useContext(dataContext);
  return (
    <div className='w-full h-[70px] flex items-center px-3 md:px-10 justify-between'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <SiFoodpanda className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[55%] h-[60px] bg-white flex justify-center items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
        <IoSearchOutline className='text-green-500 w-[20px] h-[20px]'/>
        <input type='text' className='w-[100%] outline-none text-[16px] md:text-[20px]' placeholder='Search Items...' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer' onClick={()=>setShowCart(true)} >
            <span className='absolute top-1 right-[21px] md:right-[48px] text-green-500 font-bold text-[18px]'>{items.length}</span>
            <FiShoppingBag className='w-[30px] h-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav