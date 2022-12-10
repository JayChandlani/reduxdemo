import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { setLoading, setProducts } from '../state/actions';
import Loder from './Loder';
const Products = () => {

    const state = useSelector(state => state.products)
    const loading = useSelector(state=>state.loading)
    const dispatch = useDispatch();
    useEffect(() => {
        // loadProducts()
        dispatch(setProducts());
        dispatch(setLoading(true));
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const loadProducts = async () => {
    //     dispatch(setProducts(filterProduct(await fetchData())))
    // }
    // const fetchData = async () => {
    //     const responce = await fetch('https://fakestoreapi.com/products')
    //     const data = await responce.json();
    //     return data;
    // }

    // const filterProduct = (data) => {
    //     if (category === 'all') {
    //        return data
    //     } else {

    //         return data.filter((item) => item.category === category)
    //     }
    // }
if(loading.loading){
    return <Loder></Loder>
}
    return (
        <div className='mt-10 xl:mx-40 '>

        
                <div className='grid lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 md:gap-4  grid-cols-2 gap-0'>
                    {state.filterProducts.map((item) => {
                        return (
                            <Card key={Math.random()} item={item}></Card>
                        )
                    })}
                </div>
        </div>
    )
}

export default Products