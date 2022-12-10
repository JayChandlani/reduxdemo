import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../state/actions/cart'

const Cart = () => {


    const item = useSelector(state => state.cart)
    const dispatch = useDispatch();
    return (
        <div>
            {item.length > 0 ? <div className='  xl:mx-40'>
                <div className='grid lg:grid-cols-4 xl:grid-cols-5  md:grid-cols-2 gap-4'>

                    {item.map(cartItem => {

                        return (<div key={cartItem.id} className='card   my-4 lg:h-96 flex flex-col justify-between lg:w-56 rounded p-1 transition-all ease-in-out duration-300 mx-2 hover:shadow-2xl  bg-white  '>
                            <div className='w-52 h-52 mx-auto'>
                                <img className=" w-52 h-52 object-fill" src={cartItem.image} alt="" />
                            </div>
                            <div className='space-y-2'>
                                <h6 className=' font-bold '>{cartItem.title}</h6>

                                <h1> Quantity:<span onClick={() => { dispatch(removeFromCart(cartItem)) }} className='bg-slate-300 cursor-pointer px-2 ml-2'>-</span> {cartItem.quantity} <span onClick={() => { dispatch(addToCart(cartItem)) }} className='bg-slate-300 cursor-pointer px-2 '>+</span> </h1>
                                <h6 className=' font-semibold'>Rs{cartItem.price}</h6>
                            </div>
                            <hr className='mt-2' />
                            <div className='flex justify-evenly my-2'>
                                <button className='p-2 bg-green-200 rounded'>Checkout </button>
                                <button onClick={() => { dispatch(removeFromCart(cartItem)) }} className='p-2 bg-red-500 rounded'>Remove</button>
                            </div>
                        </div>)
                    })}

                </div>
            </div> :
                <div className='m-10 text-center'>
                    <h1 className='font-bold text-2xl'>Please Add Something!!!</h1>
                    <Link to={'/'}> <button className='bg-red-400 px-6 py-2 text-white my-4 rounded-2xl' >Shop</button></Link>
                </div>}
        </div>
    )
}

export default Cart