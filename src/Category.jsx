import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id : 1,
        name : "All",
        image : <TiThSmallOutline className='text-green-500 w-14 h-14'/>
    },

    {
        id : 2,
        name : "breakfast",
        image : <MdOutlineFreeBreakfast className='text-green-500 w-14 h-14'/>
    },

    {
        id : 3,
        name : "soups",
        image : <TbSoup className='text-green-500 w-14 h-14'/>
    },

    {
        id : 4,
        name : "pasta",
        image : <CiBowlNoodles className='text-green-500 w-14 h-14'/>
    },

    {
        id : 5,
        name : "main_course",
        image : <MdOutlineFoodBank className='text-green-500 w-14 h-14'/>
    },

    {
        id : 6,
        name : "pizza",
        image : <GiFullPizza className='text-green-500 w-14 h-14'/>
    },

    {
        id : 7,
        name : "burger",
        image : <GiHamburger className='text-green-500 w-14 h-14'/>
    }
]

export default Categories;