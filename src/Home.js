import React from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
const Home = () => {
    return (
        <div>
            <Filter></Filter>
            <Products></Products>
        </div>
    )
}

export default Home