import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/actions/cart';
import { useNavigate } from 'react-router-dom'
const Card = ({ item }) => {
    const navigate = useNavigate()
    const takeTo = (id) => {
        id = id.toString()
        navigate(`/product/${id}`)
    }
    const dispatch = useDispatch();

    return (
        <div  className='card mx-2 overflow-hidden my-4 md:h-96 h-72 flex flex-col justify-between   md:w-60 rounded  transition-all ease-in-out duration-300  hover:shadow-2xl  bg-white  '>

            <div className=' mx-auto h-36 md:w-52 md:h-52'>
                <img onClick={() => takeTo(item.id)} className=" p-4  md:w-52 md:h-52 w-36 h-40 object-fill" src={item.image} alt="" />
            </div>
            <div className='ml-2'>
                <div className=' space-y-5'>
                    <h6 className=' truncate  md:text-lg text-sm '>{item.title}</h6>
                    <h6 className=' font-bold'>Rs{item.price}</h6>
                </div>
            </div>
            <div className='flex justify-around my-2'>
                <button onClick={() => dispatch(addToCart(item))} className=' bg-red-200 px-4 py-2 rounded transition-all ease-in-out duration-200 hover:bg-red-100'>Cart</button>
                <button className=' bg-red-500 px-4 py-2 rounded transition-all ease-in-out duration-200 hover:bg-red-400'>Wish</button>
            </div>
        </div>
    )
}

export default Card