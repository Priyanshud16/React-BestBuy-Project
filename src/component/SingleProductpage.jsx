import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import './SingleProductpage.css'
function SingleProductPage(){
const {id}=useParams()
const [data,setdata]=useState({})
const [Loading,setLoading]=useState(false)
const [Error,setError]=useState(false)


useEffect(()=>{
   FetchData()
},[id])

async function FetchData(){
    setLoading(true)
    try {
        const res=await fetch(`https://fakestoreapi.com/products/${id}`)
        const ResData=await res.json()
        setdata(ResData)
        setLoading(false)
    } catch (error) {
        setLoading(false)
        setError(true)
    }
}


if(Loading){
    return <h1>Loading....please wait</h1>
}
if(Error){
    return <h1>Something went wrong...please try after some time..</h1>
}
    return(
        <div id="singleProduct-container">
        <img style={{height:"300px"}} src={data.image} alt="" />
        <Box  w='50%' p={4} >
         <p>Title: <span style={{fontWeight:"bolder"}}>{data.title}</span></p>   
        <p>Description: <span style={{fontWeight:"bolder"}}>{data.description}</span> </p>
        <p>Price: <span style={{fontWeight:"bolder"}}>{data.price}</span></p>
         <p>Category: <span style={{fontWeight:"bolder"}}>{data.category}</span></p>
      </Box>
       
        </div>
    )
}

export default  SingleProductPage