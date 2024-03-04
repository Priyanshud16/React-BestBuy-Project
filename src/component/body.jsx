import { useEffect, useState } from 'react'
import './body.css'
import { Button, ButtonGroup, Link } from '@chakra-ui/react'

function Banner(){
return(
    <div id='banner'>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-780399-tv-sv-d57356de-db77-4842-95cd-f750ad7cbb58.jpg;maxHeight=954;maxWidth=1400" alt="" />
    </div>
)
}


 function FetchOneView(){
    const [products,setProducts]=useState([])

    useEffect(()=>{
   FetchData()
    },[])

async function FetchData(){
    try {
       let Res=await fetch('https://dummyjson.com/products/7') 
       let ResData=await Res.json()
       setProducts(ResData);
    } catch (error) {
        
    }
}
return(
    <div id='fetchData-1'>
       <h3>You Viewed</h3>
      <div>
    
      <img src={products.images && products.images[1]} alt='' />
        <p>{products.description}</p>
      </div>
    </div>
)
}


function SignAndFetch(){
    return(
        <div id='signAndFetch'>
            <div id='Signup'>
                <p>Sign In to Best Buy</p>
                <p>My Best Buy® members get free shipping with no minimum purchase. Plus, <br /> exclusive offers and more.</p>
                <Button w={200} colorScheme='blue'>Sign up</Button>
            </div>
            <div id='fetchinsign'>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=640;maxWidth=550" alt="" />
                <p>MacBook Air 13.6" Laptop - Apple M2 chip - 8GB Memory....</p>
                <p id='price'>$949.00</p>

            </div>
        </div>
    )
}


function TopDealsBanner(){
    return(
        <div id='topDeals'>
            <div id='topBanner'>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_TopDealsGHP-SV-1a0aa8b5-67e5-49a9-a01b-4a7924aa95bc.jpg;maxHeight=954;maxWidth=1400" alt="" />
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-773907-starlink-sv-df09175a-4036-49a5-9969-afb31d0ee449.jpg;maxHeight=954;maxWidth=1400" alt="" />
            </div>
        </div>
    )
}

function LaptopFetch(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
    FetchData()
    },[])

    async function FetchData(){
        try {
            let Res=await fetch('https://dummyjson.com/products')
            let ResData=await Res.json()
            setProducts(ResData.products)
        } catch (error) {
            
        }
    }
    return(
        <div>
        <div id='fetchContainer'>
           
         
            <div id="fetchlaptop">
             {
                products.map((item)=>(
                    <div id='mainItem'>
                    <img src={item.thumbnail} alt="" />
                    <p>Brand:{item.brand}</p>
                    <p>Rating:{item.rating}</p>
                    <p>Price:{item.price}</p>
                    </div>
                ))
             }
            </div>
        
        </div>
        
        </div>

        
    )
}
export  {Banner,FetchOneView,SignAndFetch,TopDealsBanner,LaptopFetch}