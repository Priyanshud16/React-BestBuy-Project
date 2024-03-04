import { useContext, useEffect, useState } from "react"
import { MainNavbar, NavDown, UpperNavBar } from "./Navbar"
import './ProductList.css'
import Bottom from "./bottom"

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { AuthContext } from "./AuthContextProvider"
function ProductList(){
    const {setAdd,add}=useContext(AuthContext)
    const [Product,setProducts]=useState([])
    const [Loading,setLoading]=useState(false)
    const [Error,setError]=useState(false)
    useEffect(()=>{
FetchData()
    },[])

    async function FetchData(){
        setLoading(true)
        try {
            let Res=await fetch('https://fakestoreapi.com/products')
            let ResData=await Res.json()
            setProducts(ResData)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    if(Loading){
        return <h2>Loading....Please wait</h2>
    }
    if(Error){
        return <h2>Something Wents Wrong....Please try again</h2>
    }
return(
    <div>
         <UpperNavBar/>
      <MainNavbar/>
      <NavDown/>
      <div className="img">
        <img src="https://economytraveller.com/etcontent/uploads/2014/02/MH-3Day-Flash-Sale-Jul17.jpg" alt="" />
      </div>

      <div id="product-data">
        {
            Product.map((item)=>{
            return    <div>
                 <img  style={{height:"300px",paddingTop:"20px"}} src={item.image} alt="" />
                 <Link to={`/ProductList/${item.id}`}  >{item.category}</Link>
                 {/* <p>category:{item.category}</p> */}
                 <p style={{paddingTop:"10px"}}>title:{item.title}</p>
                 <p style={{paddingTop:"10px"}}>Price:{item.price}</p>
                 <Button mt={5} colorScheme='blue' onClick={()=>setAdd(add+1)}>Add to Cart</Button>

                </div>
            })
        }
      </div>
     <Bottom/>
    </div>
)
}

export default ProductList