import React,{useState} from "react"
import './searchbaar.css'

function SearchBar({setResult}){
    const [input,setInput]=useState("")

    const FetchData=(value)=>{
     fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((json)=>{
        const Result=json.filter((user)=>{
            return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResult(Result)
     })
    }

    const handleChange=(value)=>{
        setInput(value)
        FetchData(value)
    }
return(
    <div className="input-wrapper">
      <input type="text"  id="inp" value={input} onChange={(e)=>handleChange(e.target.value)} placeholder="What can we help you find today?" />
    </div>
)
}

export default SearchBar