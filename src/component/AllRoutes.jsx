import React from "react"
import { Route, Routes } from 'react-router-dom'
import ProductList from "./ProductList"
import Home from "./Home"
import SingleProductPage from "./SingleProductpage"
import LoginPage from "./Loginpage"
import CreateAccount from "./CreateAccount"
import Cart from "./Cart"
import PrivateRoute from "./PrivateRoute"

function AllRoutes(){
return(
   <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/*" element={<ErrorPath/>}/> */}
        <Route path='/ProductList' element={
        <PrivateRoute>
        <ProductList/>
        </PrivateRoute>
       } />
        <Route path="/ProductList/:id" element={
        <PrivateRoute>
        <SingleProductPage/>
        </PrivateRoute>
       }/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
        <Route path="/Cart" element={<Cart/>}/>
    </Routes>
   </div>
)
}

export default AllRoutes