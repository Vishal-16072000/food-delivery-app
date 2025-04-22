import React, { useEffect } from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


const Card = ({id, name, image, price, type}) => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart);

    const AddToCart = () => {
        dispatch(AddItem({ id, name, price, image, qty: 1 }));
        toast.success("Product added to cart!");
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col shadow-lg gap-3 hover:border-2 hover:border-green-300'>
        <div className='w-full h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>

        <div className='text-xl font-semibold'>
            {name}
        </div>

        <div className='w-full flex justify-between items-center'>
            <div className='text-green-500 font-bold'>
                Rs {price}/-
            </div>

            <div className='flex justify-center items-center gap-2 text-green-500 font-semibold'>
                {type=='veg' ? <LuLeafyGreen/> : <GiChickenOven/>}
                <span>{type}</span>
            </div>
        </div>
        <button className='w-full bg-green-500 p-3 rounded-lg font-semibold text-white hover:bg-green-300 transition-all' onClick={AddToCart}>Add to dish</button>
    </div>
  )
}

export default Card;