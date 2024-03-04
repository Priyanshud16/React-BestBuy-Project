import { MainNavbar, NavDown, UpperNavBar } from "./Navbar"
import './Loginpage.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContextProvider"
function LoginPage(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const {LoginUser}=useContext(AuthContext)


async function HandlePage(e){
    e.preventDefault()
    try {
        let Res=await fetch('https://reqres.in/api/login',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        let ResData=await Res.json()
       LoginUser(ResData.token);
       navigate('/ProductList')
    } catch (error) {
        console.log(error);
    }
}
    return(

       <>
        <MainNavbar/>
         <form onSubmit={HandlePage}>
           
            
           <div id="page">
            <div id="heading">
                <h1 style={{border:"none"}}>Sign In to Best Buy</h1>
            </div>
            <input type="email" name="" id="" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <br />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <p id="forgot-heading">Forgot Your Password?</p>
            <Button  type= "submit" colorScheme='blue' id="btn">Button</Button>
            <br />
            <br />
            <hr/>
            <button id="signupGoogle">Sign up with Google</button>
            <p id="signup-para">By continuing you agree to our Terms and Conditions, our Privacy <br /> Policy, and the My Best Buy™ Program Terms.</p>
            <hr />
            
                <h1 id="heading-createAccount">Don't have an account? <Link to='/CreateAccount' id="create-account">Create an account</Link> </h1>
            
           </div>
           </form>
       
       </>
    )
}

export default LoginPage