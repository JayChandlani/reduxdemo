import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart, removeFromCart, setLoading, setProduct } from '../state/actions'
import Loder from '../components/Loder'
import { Link } from 'react-router-dom'
const ProductDetail = () => {
    const dispatch = useDispatch();
    const productId = useParams().productID
    useEffect(() => {
        dispatch(setProduct(productId))
        dispatch(setLoading(true))
        // eslint-disable-next-line
    }, [])
    const handleProduct = (val) => {
        if (val === 'add') {
            dispatch(addToCart(data))
        } else if (val === 'remove') {
            dispatch(removeFromCart(data))
        }
    }
    const data = useSelector(state => state.product)
    const loading = useSelector(state => state.loading)
    const { price, title, description, id, image } = data
    const cartData = useSelector(state => state.cart)
    let item 
    if (cartData.find(cartItem => cartItem.id === data.id)) {

        item = cartData.find(cartItem => cartItem.id === data.id)
    }else{
        item = {}
    }

    if (loading.loading) {
        return <Loder></Loder>
    }
    return (

        <div id={id} className='grid gap-2 justify-items-center md:grid-cols-2 md:mx-40 bg-white m-5 '>
            <div className='p-10'>
                <img className='md:w-72 w-56' src={image} alt="" />
                <div className='flex mt-2 justify-around'>
                    <img className='w-16' src={image} alt="" />
                    <img className='w-16' src={image} alt="" />
                    <img className='w-16' src={image} alt="" />
                </div>
            </div>

            <div className='md:my-10 md:mr-20 m-5'>
                <h1>{title}</h1>
                <p className='font-bold text-xl'>Rs {price}</p>
                <p className='text-xl mt-2'><button onClick={() => { handleProduct('add') }} className='bg-slate-200 px-2 cu'>+</button> {item.quantity ? item.quantity : 0} <button onClick={() => { handleProduct('remove') }} className='bg-slate-200 px-2'>-</button></p>
                <h1 className='my-4'>{description}</h1>
                <div className='mt-2'>
                    <button onClick={() => handleProduct('add')} className='bg-blue-400 text-white px-4 py-1 mr-4 rounded-lg'>Add to Cart</button>

                    <Link to={'/cart'}> {item.quantity ? <button className='bg-red-400 text-white px-4 py-1 rounded-lg'>Move To Cart</button> : ""} </Link>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail