import React from "react";
import './searchResultList.css'
function SearchResultList({result}){
    return(
        <div className="result-List">
           {
            result.map((result,id)=>{
                return <div key={id}>{result.name}</div>
            })
           }
        </div>
    )
}
export default SearchResultList