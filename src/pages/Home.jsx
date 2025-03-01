import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import UserContext, { dataContext } from '../context/UserContext'
import { Input } from 'postcss'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {
  let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext);  
  let items = useSelector(state => state.cart);
  // console.log(items);

  let subtotal = items.reduce((total, item) => total + (item.price*item.qty), 0);
  let deliveryFee = 20;
  let taxes = (subtotal*0.5)/100;
  let total = Math.floor(subtotal + deliveryFee + taxes);


  

  useEffect(()=>{
    let newList = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
    setCate(newList);
    
  }, [input])
  
  function filter(category){
    if(category==="All"){
      setCate(food_items);
    } else {
      let newList = food_items.filter((item)=>item.food_category===category);
      setCate(newList);
    }
  }
  
  return (
    <div className="w-[100%] h-full min-h-screen bg-slate-200">
        <Nav/>
        {input=="" ? 
              <div className='w-[100%] flex flex-wrap justify-center gap-5 py-4'>
                  {Categories.map((Item) => {
                  return (
                      <div className=' bg-white w-[120px] h-[130px] flex flex-col gap-5 font-bold text-gray-500 justify-center p-4 shadow-md rounded-md hover:bg-green-100 transition-all duration-200' onClick={() => filter(Item.name)}>
                          {Item.image}
                          {Item.name}
                      </div>
                  )
                  })}
              </div>
          : 
          null
        }
        <div className='w-full flex flex-wrap gap-5 justify-center px-5 pt-5 pb-5'>
            {cate.length > 0 ? cate.map((items) => {
              return(
                <Card key={items.id} id={items.id} name={items.food_name} image={items.food_image} price={items.price} type={items.food_type}/>
              )
            }) : 
            <div>No Dish Found</div>}
            
        </div>


        <div className={`w-full md:w-[40vw] h-[100%] fixed bg-white top-0 right-0 shadow-xl p-3 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
            <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
            <RxCross1 className='text-green-500 text-[20px] font-semibold cursor-pointer hover:text-gray-500' onClick={()=>setShowCart(false)}/>
          </header>
          <div className='w-full mt-9 flex flex-col gap-8'>
            {items.map((item) => {
              return (
                <Card2 key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} qty={item.qty}/>
              )
            })}
          </div>

          {items.length > 0 ? <>
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-lg text-green-400 font-semibold'>Rs {subtotal}/-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-lg text-green-400 font-semibold'>Rs {deliveryFee}/-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-lg text-green-400 font-semibold'>Rs {taxes}/-</span>
          </div>
          </div>
          <div className='w-full flex justify-between items-center p-9'>
            <span className='text-lg text-gray-600 font-semibold text-2xl'>Total</span>
            <span className='text-lg text-green-400 font-semibold text-2xl'>Rs {total}/-</span>
          </div>

          <button className='w-[80%] bg-green-500 p-3 rounded-lg font-semibold text-white hover:bg-green-300 transition-all' onClick={() => toast.success("Order Placed!")}>Place Order</button>
          </> : 
          <div className='text-center text-2xl text-gray-400 font-semibold pt-5'>
          Empty Cart
          </div>}
          
        </div>
    </div>
  )
}

export default Home