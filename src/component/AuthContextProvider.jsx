import React, { createContext, useState } from "react"

export const AuthContext=createContext()
function AuthContextProvider({children}){
const [add,setAdd]=useState(0)

const [Auth,setAuth]=useState({
    isAuth:false,
    token:null
})
const LoginUser=(token)=>{
    setAuth((prev)=>({
        ...prev,
        isAuth:true,
        token:token
    }))
}

const LogOutUser=()=>{
    setAuth((prev)=>({
        ...prev,
        isAuth:false,
        token:null
    }))
}

    return(
        <div>
     <AuthContext.Provider value={{add,setAdd,LoginUser,LogOutUser,Auth}}>
        {children}
     </AuthContext.Provider>
        </div>
    )
}
export default AuthContextProvider