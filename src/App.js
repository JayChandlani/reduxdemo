import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import ProductDetail from './container/ProductDetail'
const App = () => {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'product/:productID'} element={<ProductDetail></ProductDetail>}></Route>
        <Route path={'cart'} element={<Cart></Cart>}> </Route>
      </Routes>
    </div>
  )
}

export default App