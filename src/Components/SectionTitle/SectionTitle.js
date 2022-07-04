import React from "react"
import "./styleSectionTitle.css"

const SectionTitle=({dataTitle} )=>{
   


    return(
        <div className="section-title-container">
            <div className="section-title"><h3>{dataTitle} </h3></div>
        </div>
        
    )
}


export default SectionTitle