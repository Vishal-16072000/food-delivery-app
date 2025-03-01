import React from 'react'
import image1 from "../assets/image1.avif";
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


const Card2 = ({id, name, price, image, qty}) => {
    let dispatch = useDispatch();

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        <div className='w-[60%] h-full flex gap-4'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} className='w-full h-full object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg font-semibold'>{name}</div>
                <div className='w-110px h-[40px] flex rounded-xl overflow-hidden shadow-lg border-2 border-green-200'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={() => dispatch(DecrementQty(id))}>-</button>
                    <span className='w-[40%] h-full bg-slate-50 flex justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex  justify-center items-center text-green-400 hover:bg-gray-200' onClick={() => dispatch(IncrementQty(id))}>+</button>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 justify-start items-end'>
            <span className='text-xl text-green-400 font-semibold'>Rs. {price}/-</span>
            <ImBin className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={() =>{ dispatch(RemoveItem(id)); toast.error("Item Removed")}}/>
        </div>
    </div>
  )
}

export default Card2