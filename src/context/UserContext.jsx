import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();

const UserContext = (props) => {
    const [input, setInput] = useState("");
    let [cate, setCate] = useState(food_items);
    let [showCart, setShowCart] = useState(false);
    const data = {
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart,
    }
  return (
    <dataContext.Provider value={data}>
        {props.children}
    </dataContext.Provider>
  )
}

export default UserContext;