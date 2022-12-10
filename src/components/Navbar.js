import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cart = useSelector(state => state.cart);
    const sumQuantity = () => {
        return cart.reduce(
          (quantity, cartItem) => quantity + cartItem.quantity,
          0
        );
      };

    return (
        <div className=' sticky top-0 bg-slate-50 '>
            <div className='flex p-4 justify-between mx-10'>
                <Link to={'/'}>  <h1 className=' text-2xl font-bold text-slate-500 ' >Store</h1></Link>
                <Link to={'cart'}><button className='bg-slate-200 p-3 rounded-3xl' ><span className='absolute bg-red-400 right-20 px-1 m-1 text-white rounded-2xl'>{sumQuantity()}</span><FaShoppingCart ></FaShoppingCart></button></Link>
            </div>
        </div>


    )
}

export default Navbar